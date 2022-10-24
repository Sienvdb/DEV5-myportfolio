//import bingo
import Bingo from "./bingo.js";
export default class Card {
    constructor(title) {
      // the constructor is called when you create a new instance of the class
      this.title = title;
    }
  
    markDone(target) {
      // 🔥🔥🔥 TODO 5: mark or unmark (toggle) a bingo card when clicked
      console.log("Marking card as done");
      console.log(target);
        target.classList.toggle("bingo__card--done");
    }
  
    render(counter) {
      let card = document.createElement("div");
      card.dataset.number = counter + 1;
        card.classList.add("bingo__card");
        card.innerHTML = `<h2 class="bingo__card-title">${this.title}</h2>`;
        document.querySelector(".bingo__board").appendChild(card);
  
      // 🔥🔥🔥 TODO4
      card.addEventListener("click", (e) => {
        this.markDone(e.target);
        Bingo.checkWinner();
        Bingo.save();
      
        })
    }
  }
  