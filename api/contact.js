const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your_email@example.com', // your email address
        pass: 'your_email_password'  // your email password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // sender address
      to: 'isaiahlafleur@example.com', // list of receivers
      subject: `Contact Form Submission from ${name}`, // Subject line
      text: message, // plain text body
      html: `<p>${message}</p>` // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccff-a89a-d1ca5cb3c4ab@example.com>

    res.status(200).json({ message: 'Email sent successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
