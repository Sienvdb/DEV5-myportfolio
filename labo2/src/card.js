//import bingo
import Bingo from "./bingo.js";
export default class Card {
    constructor(title) {
      // the constructor is called when you create a new instance of the class
      this.title = title;
    }
  
    markDone(target) {
      // 🔥🔥🔥 TODO 5: mark or unmark (toggle) a bingo card when clicked
        target.classList.toggle("bingo__card--done");
    }
  
    render(counter) {
      let card = document.createElement("div");

      card.classList.add("bingo__card");
        card.innerHTML = this.title;
        card.dataset.number = counter + 1;
        document.querySelector(".bingo__board").appendChild(card);
  
      // 🔥🔥🔥 TODO4
      card.addEventListener("click", (e) => {
        this.markDone(e.target);
        Bingo.checkWinner();
        Bingo.save();
      
        })
    }
  }
  