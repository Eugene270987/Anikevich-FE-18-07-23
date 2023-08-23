/*
  У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
  Вивести зображення з цієї папки отримане випадковим чином (Math.random)
*/

const imagePiece = document.querySelector('.random');
const imageCount = 9;

const randomImage = Math.floor(Math.random() * imageCount) + 1;
const imageUrl = `images/${randomImage}.png`;

imagePiece.src = imageUrl;