// {
//     "name": "taylor",
//     "email": "taylorlange95@gmail.com",
//     "subject": "send",
//     "message": "help efefhughfr9hgu9hge9"
// }
const AWS = require("aws-sdk");
const { Client } = require("pg");
export async function handler(event, context, callback) {
    try {
      const data = JSON.parse(event.body);
      console.log(data);
      const timestamp = new Date().toISOString();
      console.log(timestamp);
      const client = new Client({
        user: process.env.USERNAME,
        host: process.env.POSTGRESQL_HOST,
        database: process.env.DB_NAME,
        password: process.env.PASSWORD,
        port: process.env.POSTGRESQL_PORT,
      });
      await client.connect();
      var newMessage =
    "INSERT INTO contact(name, email, subject, message, timestamp) VALUES ($1, $2, $3, $4, $5)";
  var newMessageValue = [data.name, data.email, data.subject, data.message, timestamp];
  var newMessageQuery = await client.query(
    newMessage,
    newMessageValue
  );
  console.log("newMessageQuery rows", newMessageQuery.rows);
  await client.end();
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Security-Policy": `frame-ancestors 'self' ${process.env.SITE_URL};`,
        "Strict-Transport-Security":
          "max-age=31536000; includeSubDomains; preload",
      },
      body: JSON.stringify({ message: "Success" }),
    };
    callback(null, response);
    return "success";
  } catch (error) {
    console.error("Error:", error);
    const response = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Security-Policy": `frame-ancestors 'self' ${process.env.SITE_URL};`,
        "Strict-Transport-Security":
          "max-age=31536000; includeSubDomains; preload",
      },
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
    callback(error, response);
    return "error";
  }
}