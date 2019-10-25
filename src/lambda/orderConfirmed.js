const MongoClient = require("mongodb").MongoClient
const sgMail = require("@sendgrid/mail")
const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const client = new MongoClient(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const confirmedHTML = `<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'></script>
<script> window.addEventListener('DOMContentLoaded', () => {
    swal('hey', 'Order Confirmed', 'success')
    window.setTimeout(() => {
      window.location.href = 'https://loving-kilby-fc3f0a.netlify.com/'
    }, 3000)
  })
</script>`

sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

exports.handler = async event => {
  const { orderId, confirm, decline } = event.queryStringParameters

  if (!orderId) {
    return {
      statusCode: 403,
      body: "You done fucked up",
    }
  }

  try {
    await client.connect()
    const collection = client.db("Rawberri").collection("orders")
    const order = await collection.findOne({ orderId: Number(orderId) })

    // order doesn't exist
    if (!order) {
      return {
        statusCode: 403,
        body: "you done fucked up bud",
      }
    }

    // update confirmed bool and send user email
    if (confirm === "true" && !order.confirmed && !order.declined) {
      await collection.updateOne(
        { orderId: Number(orderId) },
        { $set: { confirmed: true } }
      )

      const msg = {
        to: order.userEmail,
        from: "orders-testing@riley.gg",
        subject: "Order Confirmed",
        html: order.confirmedOrderHtml,
      }
      await sgMail.send(msg)

      return {
        statusCode: 200,
        body: confirmedHTML,
      }
    }

    // update declined bool and send user email
    if (decline === "true" && !order.confirmed && !order.declined) {
      await collection.updateOne(
        { orderId: Number(orderId) },
        { $set: { declined: true } }
      )

      const msg = {
        to: order.userEmail,
        from: "orders-testing@riley.gg",
        subject: "Order Declined",
        html: "<h1>Order declined unlucky bro</h1>",
      }
      await sgMail.send(msg)

      return {
        statusCode: 200,
        body: "great job you finally did it",
      }
    }

    // catch all
    return {
      statusCode: 400,
      body: "something broke gg",
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 400,
      body: "something fucked up",
    }
  }
}
