const sgMail = require("@sendgrid/mail")

exports.handler = async function(event, context, callback) {
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

  const msg = {
    to: event.user_email,
    from: "orders-testing@riley.gg",
    subject: "New online order placed",
    html: event.html,
  }

  if (event.user_email) {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: "success",
    }
  } else {
    return {
      statusCode: 400,
      body: "something went wrong gg im switching to heroku",
    }
  }
}
