// script2.js
function selectActivity(activity) {
  alert(`Выбрано: ${activity}`);
  
  // Отправляем уведомление на сервер
  sendNotificationToServer(activity);
}

function sendNotificationToServer(activity) {
  const serverEndpoint = 'http://localhost:3000/sendNotification'; // Адрес вашего сервера

  fetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      activity,
    }),
  })
    .then(response => response.json())
    .then(data => console.log('Ответ от сервера:', data))
    .catch(error => console.error('Ошибка:', error));
}
