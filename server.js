// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/sendNotification', (req, res) => {
  const { activity } = req.body;

  // Отправляем уведомление на почту
  sendEmailNotification(activity);

  console.log(`Получено уведомление: Пользователь выбрал: ${activity}`);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
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
    subject: 'Уведомление от сайта',
    text: `Пользователь выбрал: ${activity}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка отправки почты:', error);
    } else {
      console.log('Уведомление отправлено:', info.response);
    }
  });
}
