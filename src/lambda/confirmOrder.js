const sgMail = require("@sendgrid/mail")
const MongoClient = require("mongodb").MongoClient
const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const client = new MongoClient(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body)

  if (!data.user_email && data.order_id) {
    return callback(null, {
      statusCode: 400,
      body: "You done goofed up",
    })
  }

  const dbData = {
    userEmail: data.user_email,
    userName: data.user_name,
    userPhone: data.user_phone,
    userMessage: data.user_message,
    orderId: data.order_id,
    confirmed: false,
    declined: false,
    confirmedOrderHtml: data.confirmed_order_html,
  }

  const msg = {
    to: "riley@riley.gg",
    from: "orders-testing@riley.gg",
    subject: "New online order placed",
    html: data.merchant_html,
  }

  const customerMsg = {
    to: data.user_email,
    from: "orders-testing@riley.gg",
    subject: "Order placed on Rawberri!",
    html: data.customer_html,
  }

  // save data to db
  client.connect(err => {
    const collection = client.db("Rawberri").collection("orders")
    collection.insertOne(dbData).then(res => {
      if (res.insertedCount) {
        client.close()
        sgMail.send(msg)
        sgMail.send(customerMsg)
        return callback(null, {
          statusCode: 200,
          body: "success",
        })
      }
    })
  })
}
