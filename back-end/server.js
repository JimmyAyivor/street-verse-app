// DEPENDENCIES
const app = require("./app.js");
// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");
// CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`🎧 Listening on port ${PORT} 🎧 `);
});

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "streetverseteam@gmail.com",
//     pass: "qqvqycikrbzpcxan",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: "streetverseteam@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });
