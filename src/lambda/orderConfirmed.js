const MongoClient = require("mongodb").MongoClient
const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const client = new MongoClient(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

exports.handler = (event, context, callback) => {
  const params = event.queryStringParameters
  console.log(params.orderId)

  client.connect(err => {
    const collection = client.db("Rawberri").collection("orders")
    collection.findOne({ orderId: "test" }).then(res => {
      console.log(res)
      client.close()
    })
  })
  console.log(process.env.MONGO_DB_URI, process.env.NODE_ENV)
  try {
    return callback(null, {
      statusCode: 200,
      body: "success",
    })
  } catch (err) {
    console.log(err)
    return callback(null, {
      statusCode: 400,
      body: "something done fucked up",
    })
  }

  return callback(null, {
    statusCode: 200,
    body: "success",
  })
}
