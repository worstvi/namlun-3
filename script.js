function moveNoButton() {
  const noButton = document.querySelector('.buttons button');
  const newPosition = {
    left: Math.random() * (window.innerWidth - noButton.clientWidth),
    top: Math.random() * (window.innerHeight - noButton.clientHeight),
  };

  const maxX = window.innerWidth - noButton.clientWidth;
  const maxY = window.innerHeight - noButton.clientHeight;

  noButton.style.left = Math.min(newPosition.left, maxX) + 'px';
  noButton.style.top = Math.min(newPosition.top, maxY) + 'px';
}
