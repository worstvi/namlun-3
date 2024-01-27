// script.js
const fetch = require('node-fetch'); // Если используете Node.js

function moveNoButton() {
  // ... (как было ранее)
}

function sendTelegramNotification(activity) {
  const telegramToken = 6977179265:AAGkVmDJAWTdxfo6CpS-l4meLTBA4YVZAPg;
  const chatId = -4105241844;

  const message = `Пользователь выбрал: ${activity}`;

  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
  .then(response => response.json())
  .then(data => console.log('Ответ от Telegram API:', data))
  .catch(error => console.error('Ошибка:', error));
}

function selectActivity(activity) {
  alert(`Выбрано: ${activity}`);
  sendTelegramNotification(activity);

  // Здесь вы можете добавить код для дополнительных действий, связанных с выбором деятельности.
}
