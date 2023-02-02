const nodemailer = require("nodemailer");

const main = async (req, res) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  console.log(req.body);
  const { fullName, emailAddress, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email, // generated ethereal user
      pass: password, // generated ethereal password
    },
  });
  let mailOptions = {
    from: `"${fullName}👻"<${emailAddress}>`,
    to: "odunolasamson@gmail.com",
    subject: `INQUIRY-${emailAddress}`,
    text: `${message}`,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send({ error, message: "Email Not Sent!", status: false });
    } else {
      res.send({ info, message: "Email Sent!", status: true });
    }
  });
};

module.exports = main;
