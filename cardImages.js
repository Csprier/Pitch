const deckOfCards = require('./deckOfCards');

// class CardImages {
//   constructor() {
//     this.deck = deckOfCards,
//     this.images = [],
//     this.suits = Object.values(this.deck)[0]
//   };

//   _createImagesArray(suits = this.suits) {
//     for (let suit in suits) {
//       let values = Object.values(suits[suit]);
//       for (let i = 0; i < values.length; i++) {
//         this.images.push(values[i].image);
//       }
//     }
//   };

//   createImageTags() {
//     console.log(this.images.map(img => `<img src="${img}" alt="${img}" class="card" />`).join(''));
//     return this.images.map(img => `<img src="${img}" alt="${img}" class="card" />`).join('');
//   };
// };

// module.exports = CardImages;

let suits = Object.values(deckOfCards)[0],
    images = [];

for (let suit in suits) {
  let values = Object.values(suits[suit]);
  for (let i = 0; i < values.length; i++) {
    images.push(values[i].image);
  }
}
console.log(images);

function createImageTags(images) {
  return images.map(img => `<img src="${img}" alt="${img}" class="card" />`).join('');
};

let imgElements = createImageTags(images);
console.log(imgElements);

module.exports = imgElements;