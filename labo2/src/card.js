//import bingo
import Bingo from "./bingo.js";
export default class Card {
    constructor(title) {
      // the constructor is called when you create a new instance of the class
      this.title = title;
    }
  
    markDone(target) {
      // to mark a card as done, we add a class .bingo__card--done to it
      // 🔥🔥🔥 TODO 5: mark or unmark (toggle) a bingo card when clicked
      console.log("Marking card as done");
      console.log(target);
      // hint: use class .bingo__card--done
    }
  
    render(counter) {
      let card = document.createElement("div");
      card.dataset.number = counter + 1;
        card.classList.add("bingo__card");
        card.innerHTML = `<h2 class="bingo__card-title">${this.title}</h2>`;
        document.querySelector(".bingo__board").appendChild(card);
  
      // 🔥🔥🔥 TODO4: when we click an item, we want to check for winners and we want to save the selection to storage
      //card.addEventListener("click", (e) => {
        // this.markDone(e.target);
        // call checkWinner() on the Bingo class
        // try to call the save() method on the Bingo class
      //});
      card.addEventListener("click", (e) => {
        this.markDone(e.target);
        Bingo.checkWinner();
        Bingo.save();
      
        })
    }
  }
  