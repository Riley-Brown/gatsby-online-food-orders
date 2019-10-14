const sgMail = require("@sendgrid/mail")
// const apiKey = process.env.SEND_GRID_API_KEY

exports.handler = function(event, context, callback) {
  const { SEND_GRID_API_KEY } = process.env
  sgMail.setApiKey(SEND_GRID_API_KEY)
  const data = JSON.parse(event.body)
  // console.log(data)

  console.log(process.env.NODE_ENV)

  const msg = {
    to: data.user_email,
    from: "orders-testing@riley.gg",
    subject: "New online order placed",
    html: data.html,
  }

  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify({ success: true }),
  // })

  if (data.user_email) {
    // sgMail.send(msg)
    return callback(null, {
      statusCode: 200,
      body: "success",
    })
  } else {
    return callback(null, {
      statusCode: 400,
      body: "something went wrong gg im switching to heroku",
    })
  }
}
