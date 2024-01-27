const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/select-activity', (req, res) => {
  const { activity } = req.body;
  sendEmailNotification(activity);
  res.status(200).send('Activity selected successfully');
});

function sendEmailNotification(activity) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namlunsasha@gmail.com',
      pass: 'namsa99221710',
    },
  });

  const mailOptions = {
    from: 'namlunsasha@gmail.com',
    to: 'musasim@list.ru',
    subject: 'User Activity Choice',
    text: `User has chosen: ${activity}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
