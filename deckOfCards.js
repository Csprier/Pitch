const deckOfCards = {
  "Spades": {
    "2": {
      "value": 1,
      "key": "Low",
      "images": "2S.png"
    },
    "3": {
      "value": 0,
      "key": "Game",
      "images": "3S.png"
    },
    "4": {
      "value": 0,
      "key": "Game",
      "images": "4S.png"
    },
    "5": {
      "value": 0,
      "key": "Game",
      "images": "5S.png"
    },
    "6": {
      "value": 0,
      "key": "Game",
      "images": "6S.png"
    },
    "7": {
      "value": 0,
      "key": "Game",
      "images": "7S.png"
    },
    "8": {
      "value": 0,
      "key": "Game",
      "images": "8S.png"
    },
    "9": {
      "value": 0,
      "key": "Game",
      "images": "9S.png"
    },
    "10": {
      "value": 10,
      "key": "Game",
      "images": "10S.png"
    },
    "Jack": {
      "value": 1,
      "key": "Jack",
      "images": "JS.png"
    },
    "Queen": {
      "value": 0,
      "key": "Game",
      "images": "QS.png"
    },
    "King": {
      "value": 0,
      "key": "Game",
      "images": "KS.png"
    },
    "Ace": {
      "value": 1,
      "key": "High",
      "images": "AS.png"
    }
  },
  "Hearts": {
    "2": {
      "value": 1,
      "key": "Low",
      "images": "2H.png"
    },
    "3": {
      "value": 0,
      "key": "Game",
      "images": "3H.png"
    },
    "4": {
      "value": 0,
      "key": "Game",
      "images": "4H.png"
    },
    "5": {
      "value": 0,
      "key": "Game",
      "images": "5H.png"
    },
    "6": {
      "value": 0,
      "key": "Game",
      "images": "6H.png"
    },
    "7": {
      "value": 0,
      "key": "Game",
      "images": "7H.png"
    },
    "8": {
      "value": 0,
      "key": "Game",
      "images": "8H.png"
    },
    "9": {
      "value": 0,
      "key": "Game",
      "images": "9H.png"
    },
    "10": {
      "value": 10,
      "key": "Game",
      "images": "10H.png"
    },
    "Jack": {
      "value": 1,
      "key": "Jack",
      "images": "JH.png"
    },
    "Queen": {
      "value": 0,
      "key": "Game",
      "images": "QH.png"
    },
    "King": {
      "value": 0,
      "key": "Game",
      "images": "KH.png"
    },
    "Ace": {
      "value": 1,
      "key": "High",
      "images": "AH.png"
    }
  },
  "Clubs": {
    "2": {
      "value": 1,
      "key": "Low",
      "images": "2C.png"
    },
    "3": {
      "value": 0,
      "key": "Game",
      "images": "3C.png"
    },
    "4": {
      "value": 0,
      "key": "Game",
      "images": "4C.png"
    },
    "5": {
      "value": 0,
      "key": "Game",
      "images": "5C.png"
    },
    "6": {
      "value": 0,
      "key": "Game",
      "images": "6C.png"
    },
    "7": {
      "value": 0,
      "key": "Game",
      "images": "7C.png"
    },
    "8": {
      "value": 0,
      "key": "Game",
      "images": "8C.png"
    },
    "9": {
      "value": 0,
      "key": "Game",
      "images": "9C.png"
    },
    "10": {
      "value": 10,
      "key": "Game",
      "images": "10C.png"
    },
    "Jack": {
      "value": 1,
      "key": "Jack",
      "images": "JC.png"
    },
    "Queen": {
      "value": 0,
      "key": "Game",
      "images": "QC.png"
    },
    "King": {
      "value": 0,
      "key": "Game",
      "images": "KC.png"
    },
    "Ace": {
      "value": 1,
      "key": "High",
      "images": "AC.png"
    }
  },
  "Diamonds": {
   "2": {
      "value": 1,
      "key": "Low",
      "images": "2D.png"
    },
    "3": {
      "value": 0,
      "key": "Game",
      "images": "3D.png"
    },
    "4": {
      "value": 0,
      "key": "Game",
      "images": "4D.png"
    },
    "5": {
      "value": 0,
      "key": "Game",
      "images": "5D.png"
    },
    "6": {
      "value": 0,
      "key": "Game",
      "images": "6D.png"
    },
    "7": {
      "value": 0,
      "key": "Game",
      "images": "7D.png"
    },
    "8": {
      "value": 0,
      "key": "Game",
      "images": "8D.png"
    },
    "9": {
      "value": 0,
      "key": "Game",
      "images": "9D.png"
    },
    "10": {
      "value": 10,
      "key": "Game",
      "images": "10D.png"
    },
    "Jack": {
      "value": 1,
      "key": "Jack",
      "images": "JD.png"
    },
    "Queen": {
      "value": 0,
      "key": "Game",
      "images": "QD.png"
    },
    "King": {
      "value": 0,
      "key": "Game",
      "images": "KD.png"
    },
    "Ace": {
      "value": 1,
      "key": "High",
      "images": "AD.png"
    }
  }
};

module.exports = { deckOfCards };

/*
const deckOfCards = [
  'Ace of Hearts',    
  '2 of Hearts',      
  '3 of Hearts',
  '4 of Hearts',      
  '5 of Hearts',      
  '6 of Hearts',
  '7 of Hearts',      
  '8 of Hearts',      
  '9 of Hearts',
  '10 of Hearts',     
  'Jack of Hearts',   
  'Queen of Hearts',
  'King of Hearts',   
  'Ace of Spades',    
  '2 of Spades',
  '3 of Spades',      
  '4 of Spades',      
  '5 of Spades',
  '6 of Spades',      
  '7 of Spades',      
  '8 of Spades',
  '9 of Spades',      
  '10 of Spades',     
  'Jack of Spades',
  'Queen of Spades',  
  'King of Spades',   
  'Ace of Clubs',
  '2 of Clubs',       
  '3 of Clubs',       
  '4 of Clubs',
  '5 of Clubs',       
  '6 of Clubs',       
  '7 of Clubs',
  '8 of Clubs',       
  '9 of Clubs',       
  '10 of Clubs',
  'Jack of Clubs',    
  'Queen of Clubs',   
  'King of Clubs',
  'Ace of Diamonds',  
  '2 of Diamonds',    
  '3 of Diamonds',
  '4 of Diamonds',    
  '5 of Diamonds',    
  '6 of Diamonds',
  '7 of Diamonds',    
  '8 of Diamonds',    
  '9 of Diamonds',
  '10 of Diamonds',   
  'Jack of Diamonds', 
  'Queen of Diamonds',
  'King of Diamonds'
];
*/