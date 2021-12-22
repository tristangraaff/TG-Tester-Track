import questions from "./Question.js";
import Button from "./Button.js";

class Quiz {
  constructor(questionArray, quizCounter, prevAnswers) {
    this.appContainer = document.querySelector(".app-container");
    this.quizContainer = document.createElement("div");
    this.quizContainer.classList.add("quiz-container");
    this.questionAnswerContainer = document.createElement("div");
    this.questionAnswerContainer.classList.add("question-answers-container");
    this.answersList = document.createElement("ul");

    this.questionArray = questionArray;
    this.quizCounter = quizCounter;

    this.nextBtn = document.createElement("button");
    this.prevBtn = document.createElement("button");
    this.btnsContainer = document.createElement("div");

    this.answerHasBeenSelected = [false, false, false, false, false, false];
    this.givenAnswers = [null, null, null, null, null, null];
    this.correctAnswerNumber = 0;
  }

  init() {
    this.addQuizContentToAppContainer();
    this.addBtnsToAppContainer();
    this.getNextQuizQuestionOnClick();
    this.getPrevQuizQuestionOnClick();
    this.selectAnswer(this.questionArray[0]);
  }

  addTitleToQuizContainer() {
    const title = document.createElement("h1");
    title.innerText = "Math Problems";
    title.classList.add("quiz-title");
    this.quizContainer.appendChild(title);
  }

  addPageCounterToQuizContainer() {
    const counter = document.createElement("p");
    counter.innerText = (this.quizCounter + 1) + " / 6";
    counter.classList.add("page-counter");
    this.quizContainer.insertBefore(counter, document.querySelector(".question-answers-container"));
  }

  addQuestionToQaContainer(questionObj) {
    const questionElement = document.createElement("h2");
    questionElement.innerText = questionObj.question;
    questionElement.classList.add("question");
    this.questionAnswerContainer.appendChild(questionElement);
  }

  addAnswersToList(questionObj) {
    for (let answer of questionObj.possibleAnswers) {
      const answerElement = document.createElement("li");
      const answerNumber = document.createElement("span");
      const answerValue = document.createElement("span");

      answerElement.classList.add("answer");
      answerNumber.classList.add("answer-number");
      answerValue.classList.add("answer-value");
      console.log(answerNumber);
      let counter = 1;
      answerNumber.innerText = counter;
      counter++;
      answerValue.innerText = answer;

      answerElement.appendChild(answerNumber);
      answerElement.appendChild(answerValue);
      this.answersList.appendChild(answerElement);
    }
  }

  addAnswersListToQaContainer() {
    this.answersList.classList.add("answers");
    this.questionAnswerContainer.appendChild(this.answersList);
  }

  addQuizContentToAppContainer() {
    this.addTitleToQuizContainer();
    this.addPageCounterToQuizContainer();
    this.addQuestionToQaContainer(this.questionArray[0]);
    this.addAnswersToList(this.questionArray[0]);
    this.addAnswersListToQaContainer();

    this.quizContainer.appendChild(this.questionAnswerContainer);
    this.appContainer.appendChild(this.quizContainer);
  }

  addBtnsToAppContainer() {
    this.nextBtn.classList.add("next-btn");
    this.prevBtn.classList.add("prev-btn");
    this.nextBtn.innerText = "Next";
    this.prevBtn.innerText = "Prev";
    this.btnsContainer.appendChild(this.prevBtn);
    this.btnsContainer.appendChild(this.nextBtn);
    this.appContainer.appendChild(this.btnsContainer);
  }

  performActionOnLastNextClick() {
    if (this.quizCounter + 1 >= questions.length) {
      if (this.givenAnswers.includes(null)) {
        alert(new Error("You haven't answered all questions yet. Please return."));
        throw Error("You haven't answered all questions yet. Please return.");
      }
      this.quizContainer.remove();
      this.btnsContainer.remove();
      new Button("restart", new Button("start", new Quiz(questions, 0)), this.correctAnswerNumber).init();
    }
  }

  addNewQuizQuestionToDOM(index) {
    this.questionAnswerContainer.innerHTML = "";
    this.answersList.innerHTML = "";
    document.querySelector(".page-counter").remove();

    this.addPageCounterToQuizContainer(this.quizCounter);
    this.addQuestionToQaContainer(this.questionArray[index]);
    this.addAnswersToList(this.questionArray[index]);
    this.addAnswersListToQaContainer();
    this.selectAnswer(this.questionArray[index]);   
  }

  performActionOnRegularNextClick() {
    let quizNumberToBeOpenend = ++this.quizCounter;
    for (let i = 0; i < questions.length; i++) {
      if (quizNumberToBeOpenend === i) {
        this.addNewQuizQuestionToDOM(i);
      }
    }
  }

  getNextQuizQuestionOnClick() {
    this.nextBtn.addEventListener("click", () => {
      this.performActionOnLastNextClick();
      this.performActionOnRegularNextClick();
    });
  }

  performActionOnLastPrevClick() {
    if (this.quizCounter === 0) {
      alert(new Error("Can't move past the first question."));
      throw Error("Can't move past the first question.");
    }
  }

  performActionOnRegularPrevClick() {
    let quizNumberToBeOpenend = --this.quizCounter;
    for (let i = 0; i < questions.length; i++) {
      if (quizNumberToBeOpenend === i) {
        this.addNewQuizQuestionToDOM(i);
      }
    }
  }

  getPrevQuizQuestionOnClick() {
    this.prevBtn.addEventListener("click", () => {
      this.performActionOnLastPrevClick();
      this.performActionOnRegularPrevClick();
    });
  }

  colorCorrectAnswerGreen(questionObj) {
    const answerValues = document.querySelectorAll(".answer-value");
    for (let answerValue of answerValues) {
      if (answerValue.innerText === questionObj.correctAnswer.toString()) {
        answerValue.style.background = "green";
      }
    }
  }

  colorWrongAnswerRed(element, questionObj) {
    if (element.innerText !== questionObj.correctAnswer.toString()) {
      element.style.background = "red";
    }
  }

  coloralreadyAnsweredAnswer(questionObj) {
    if (this.answerHasBeenSelected[this.quizCounter] === true) {
      const answerValues = document.querySelectorAll(".answer-value");
      for (let answerValue of answerValues) {
        if (answerValue.innerText === this.givenAnswers[this.quizCounter]) {
          this.colorCorrectAnswerGreen(questionObj);
          this.colorWrongAnswerRed(answerValue, questionObj);
        }
      }
    }
  }

  selectAnswer(questionObj) {
    this.coloralreadyAnsweredAnswer(questionObj);
    const answerValues = document.querySelectorAll(".answer-value");
    for (let answer of answerValues) {
      answer.addEventListener("click", () => {
        if (this.answerHasBeenSelected[this.quizCounter] === false) {
          this.givenAnswers[this.quizCounter] = answer.innerText;
          this.answerHasBeenSelected[this.quizCounter] = true;
          this.colorCorrectAnswerGreen(questionObj);
          this.colorWrongAnswerRed(answer, questionObj);    
          if (this.givenAnswers[this.quizCounter] === questionObj.correctAnswer.toString()) {
            this.correctAnswerNumber++;
          }
        }
      })
    }
  }
}

const startQuiz = new Button("start", new Quiz(questions, 0)).init();