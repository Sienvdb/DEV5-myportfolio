import Card from "./card.js";

// 🔥🔥🔥 TODO 1 - make sure to export the class, if you want to be able to import the class elsewhere
export default class Bingo {
  constructor() {
    // the constructor is called when you create a new instance of the class
    console.log("Welcome to Bingo! 🎉");

    // an array including 25 cards (5x5)
    this.cards = [ 
      "Already made a website",
      "Already worked before they started studying",
      "Already designed a logo",
      "Doesn't live with their parents",
      "Doesn't have a Discord account",
      "Has to commute more than 1 hour to school",
      "Is a vegetarian",
      "Can play the guitar",
      "Has already visited the US of A",
      "Is older than 25",
      "Owns a goldfish",
      "Is afraid of snakes",
      "Speaks 3 different languages",
      "Has never been to a festival before",
      "Knows what CSS is",
      "Is a Marvel Comics fan",
      "Knows all the ingredients for a mojito",
      "Has a student job",
      "Plays a team sport",
      "Knows how to play chess",
      "Is a DJ",
      "Likes cilantro",
      "Is afraid of heights",
      "Loves heavy metal music",
      "Is famous on Instagram"
    ];

    // we start by rendering the cards to the screen
    this.renderCards();

    // then we load the saved bingo cards from localstorage to mark them as done
    Bingo.load();
  }

  renderCards() {
    for(let i = 0; i < this.cards.length; i++) {
      let card = new Card(this.cards[i]);
      card.render(i);
    }
  }

  static checkWinner() {
    console.log("Checking for a winner");

    // 🔥🔥🔥 TODO 6
    let cardsDone = document.querySelectorAll(".bingo__card--done");
    if (cardsDone.length === 5) {
        document.querySelector(".bingo__overlay").style.display = "block";
    }
  }

  static save() {
    // 🔥🔥🔥 TODO 7
    // save the cards that are done to localstorage
    // you can simply save an array with the card numbers like [1, 6, 8]
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    let cardsWon = [];
    let cards = document.querySelectorAll(".bingo__card--done");
    for (let i = 0; i < cards.length; i++) {
        cardsWon.push(cards[i].dataset.number);
    }

    localStorage.setItem("cardNumber", JSON.stringify(cardsWon));

    // if there are not done cards, remove localstorage
    if (cards.length === 0 || cards.length === 5) {
     localStorage.clear();
     localStorage.removeItem("cardNumber");
    }
  }

  static load() {
    // 🔥🔥🔥 TODO 8
    console.log("loading bingo selection from localstorage");

    // check if localstorage item exists
    if (localStorage.getItem("cardNumber")) {
      let cardsWon = JSON.parse(localStorage.getItem("cardNumber"));
        for (let i = 0; i < cardsWon.length; i++) {
            let card = document.querySelector(`[data-number="${cardsWon[i]}"]`);
            card.classList.add("bingo__card--done");
        }
    }
  }
}
