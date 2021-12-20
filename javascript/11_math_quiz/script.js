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
    this.correctAnswers = [];
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
    this.quizContainer.appendChild(counter);
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

  getNextQuizQuestionOnClick() {
    this.nextBtn.addEventListener("click", () => {
      let quizNumberToBeOpenend = ++this.quizCounter;
      for (let i = 0; i < questions.length; i++) {
        if (quizNumberToBeOpenend === i) {
          this.questionAnswerContainer.innerHTML = "";
          this.answersList.innerHTML = "";
          document.querySelector(".page-counter").remove();

          this.addPageCounterToQuizContainer(this.quizCounter);
          this.addQuestionToQaContainer(this.questionArray[i]);
          this.addAnswersToList(this.questionArray[i]);
          this.addAnswersListToQaContainer();
          this.selectAnswer(this.questionArray[i]);
        }
      }

      if (quizNumberToBeOpenend === questions.length) {
        if (this.givenAnswers.includes(null)) {
          alert(new Error("You haven't answered all questions yet. Please return."));
          throw Error("You haven't answered all questions yet. Please return.");
        }
        this.quizContainer.remove();
        this.btnsContainer.remove();
        const finish = true;
        new Button("restart", new Button("start", new Quiz(questions, 0)), finish).init();
      }
    });
  }

  getPrevQuizQuestionOnClick() {
    this.prevBtn.addEventListener("click", () => {
      if (this.quizCounter === 0) {
        alert(new Error("Can't move past the first question."));
        throw Error("Can't move past the first question.");
      }

      let quizNumberToBeOpenend = --this.quizCounter;
      for (let i = 0; i < questions.length; i++) {
        if (quizNumberToBeOpenend === i) {
          this.questionAnswerContainer.innerHTML = "";
          this.answersList.innerHTML = "";
          document.querySelector(".page-counter").remove();

          this.addPageCounterToQuizContainer(this.quizCounter);
          this.addQuestionToQaContainer(this.questionArray[i]);
          this.addAnswersToList(this.questionArray[i]);
          this.addAnswersListToQaContainer();
          this.selectAnswer(this.questionArray[i])
        }
      }
    });
  }

  colorCorrectAnswerGreen(questionObj) {
    const answerValues = document.querySelectorAll(".answer-value");
    for (let answerValue of answerValues) {
      if (answerValue.innerText === questionObj.correctAnswer.toString()) {
        console.log(answerValue.innerText);
        console.log(questionObj.correctAnswer.toString());
        answerValue.style.background = "green";
      }
    }
  }

  colorWrongAnswerRed(element, questionObj) {
    if (element.innerText !== questionObj.correctAnswer.toString()) {
      element.style.background = "red";
    }
  }

  colorPrevAnswers(questionObj) {
    if (this.answerHasBeenSelected[this.quizCounter] === true) {
      const answerValues = document.querySelectorAll(".answer-value");
      for (let answerValue of answerValues) {
        if (answerValue.innerText === this.givenAnswers[this.quizCounter]) {
          this.colorCorrectAnswerGreen(questionObj);
          this.colorWrongAnswerRed(answerValue, questionObj);
        }
      }
    };
  }

  saveCorrectAnswer() {

  }

  selectAnswer(questionObj) {
    this.colorPrevAnswers(questionObj);
    const handleListener = () => {
      listenerFunction(event);
    }
    const listenerFunction = event => {
      if (event.target.classList[0] === "answer-value") {
        if (this.answerHasBeenSelected[this.quizCounter] === false) {
          this.givenAnswers[this.quizCounter] = event.target.innerText;
          this.answerHasBeenSelected[this.quizCounter] = true;
          this.colorCorrectAnswerGreen(questionObj);
          this.colorWrongAnswerRed(event.target, questionObj);     
          
          window.removeEventListener("click", handleListener);
          return; 
        }
      }
    }
    window.addEventListener("click", handleListener); 
  }
}

class Button {
  constructor(btnName, instanceToBeCreated, finishCondition) {
    this.appContainer = document.querySelector(".app-container");
    this.btnName = btnName;
    this.btn = document.createElement(btnName);
    this.instanceToBeCreated = instanceToBeCreated;
    this.finish = finishCondition;
  }

  init() {
    this.addFinishTextToDOM();
    this.addBtnToDOM();
    this.runNewInstanceOnClick();
  }

  addBtnToDOM() {
    this.appContainer.innerHTML = "";
    this.btn.classList.add(this.btnName);
    this.btn.setAttribute("type", "button");
    this.btn.innerText = this.btnName;
    this.appContainer.appendChild(this.btn);
  }

  addFinishTextToDOM() {
    if (this.finish === true) {
      const finishText = document.createElement("p");
      finishText.innerHTML = "Congrats! One out of six answers are correct!"
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

class Question {
  constructor(question, possibleAnswers, answerHasBeenSelected, correctAnswer) {
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.answerHasBeenSelected = answerHasBeenSelected;
    this.correctAnswer = correctAnswer;
  }
}

const question0 = new Question("56 + 11", [1, 2, 3, 67, 5], false, 67);
const question1 = new Question("49 - 32", [2, 17, 4, 67, 6], false, 17);
const question2 = new Question("70 - 14", [3, 4, 5, 6, 56], false, 56);
const question3 = new Question("20 + 10", [30, 5, 6, 7, 8], false, 30);
const question4 = new Question("16 - 16", [5, 6, 7, 8, 0], false, 0);
const question5 = new Question("100 - 88", [7, 8, 9, 10, 12], false, 12);

const questions = [
  question0,
  question1,
  question2,
  question3,
  question4,
  question5,
];

const startQuiz = new Button("start", new Quiz(questions, 0)).init();