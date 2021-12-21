class Button {
  constructor(btnName, instanceToBeCreated, correctAnswerNumber) {
    this.appContainer = document.querySelector(".app-container");
    this.btnName = btnName;
    this.btn = document.createElement(btnName);
    this.instanceToBeCreated = instanceToBeCreated;
    this.correctAnswerNumber = correctAnswerNumber;
    console.log(this.correctAnswerNumber)
  }

  init() {
    this.appContainer.innerHTML = "";
    this.addFinishTextToDOM();
    this.addBtnToDOM();
    this.runNewInstanceOnClick();
  }

  addBtnToDOM() {
    this.btn.classList.add(this.btnName);
    this.btn.setAttribute("type", "button");
    this.btn.innerText = this.btnName;
    this.appContainer.appendChild(this.btn);
  }

  addFinishTextToDOM() {
    if (this.btnName === "restart") {
      const finishText = document.createElement("p");
      finishText.classList.add("finish-text");
      if (this.correctAnswerNumber >= 4) {
        finishText.innerHTML = `Congrats! ${this.correctAnswerNumber} out of 6 answers are correct!`
      } else {
        finishText.innerHTML = `Too bad.. ${this.correctAnswerNumber} out of 6 answers are correct. Better luck next time.`
      }
      this.appContainer.appendChild(finishText);
    }
  }

  runNewInstanceOnClick() {
    this.btn.addEventListener("click", () => {
      this.btn.remove();
      this.instanceToBeCreated.init();
    });
  }
}

export default Button;