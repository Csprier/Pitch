const { deckOfCards } = require('./deckOfCards.js');
// import deckOfCards from './deckOfCards.js';
console.log(deckOfCards);
let suits = Object.values(deckOfCards)[0],
    images = [];

for (let suit in suits) {
  let values = Object.values(suits[suit]);
  for (let i = 0; i < values.length; i++) {
    images.push(values[i].image);
  }
}
console.log('IMAGES: ', images);

function createImageTags(images) {
  return images.map(img => `<img src="${img}" alt="${img}" class="card" />`);
};

let imgElements = createImageTags(images),
    container = document.getElementById('cards');

container.innerHTML = imgElements;