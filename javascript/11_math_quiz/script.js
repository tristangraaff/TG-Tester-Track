class Quiz {
  constructor(questionObj, quizCounter, prevAnswers) {
    this.appContainer = document.querySelector(".app-container");
    this.quizContainer = document.createElement("div");
    this.quizContainer.classList.add("quiz-container");
    this.questionAnswerContainer = document.createElement("div");
    this.questionAnswerContainer.classList.add("question-answers-container");
    this.answersList = document.createElement("ul");

    this.quizCounter = quizCounter;
    this.question = questionObj.question;
    this.possibleAnswers = questionObj.possibleAnswers;
    this.answerHasBeenSelected = questionObj.answerHasBeenSelected;
    this.correctAnswer = questionObj.correctAnswer;

    this.nextBtn = document.createElement("button");
    this.prevBtn = document.createElement("button");
    this.btnsContainer = document.createElement("div");
  }

  init() {  
    this.addQuizContentToAppContainer();
    this.addBtnsToAppContainer();
    this.getNextQuizQuestionOnClick();
    this.getPrevQuizQuestionOnClick();
    this.selectAnswer();
  }

  addTitleToQuizContainer() {
    const title = document.createElement("h1");
    title.innerText = "Math Problems";
    title.classList.add("quiz-title");
    this.quizContainer.appendChild(title);
  }

  addPageCounterToQuizContainer() {
    const counter = document.createElement("p");
    counter.innerText = "Coming soon...";
    counter.classList.add("quiz-counter");
    this.quizContainer.appendChild(counter);
  }

  addQuestionToQaContainer() {
    const questionElement = document.createElement("h2");
    questionElement.innerText = this.question;
    questionElement.classList.add("question");
    this.questionAnswerContainer.appendChild(questionElement);
  }

  addAnswersToList() {
    for (let answer of this.possibleAnswers) {
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
    this.addQuestionToQaContainer();
    this.addAnswersToList();
    this.addAnswersListToQaContainer();
    this.quizContainer.appendChild(this.questionAnswerContainer);
    this.appContainer.appendChild(this.quizContainer);    
  }

  addBtnsToAppContainer() {
    this.nextBtn.classList.add("next-btn");
    this.prevBtn.classList.add("prev-btn");
    this.nextBtn.innerText = "Next";
    this.prevBtn.innerText = "Prev";
    this.btnsContainer.appendChild(this.nextBtn);
    this.btnsContainer.appendChild(this.prevBtn);
    this.appContainer.appendChild(this.btnsContainer);
  }

  getNextQuizQuestionOnClick() {
    this.nextBtn.addEventListener("click", () => {
      this.quizContainer.remove();
      this.btnsContainer.remove();
      let quizNumberToBeOpenend = ++this.quizCounter;

      for (let i = 0; i < questions.length; i++) {
        if (quizNumberToBeOpenend === i) {
          new Quiz(questions[i], quizNumberToBeOpenend).init();
        }
      }

      if (quizNumberToBeOpenend === questions.length) {
        new Button(
          "restart",
          new Button("start", new Quiz(questions[0], 0))
        ).init();
      }
    });
  }

  getPrevQuizQuestionOnClick() {
    this.prevBtn.addEventListener("click", () => {
      if (this.quizCounter === 0) {
        alert(new Error("Can't move past the first question."));
        throw Error("Can't move past the first question.");
      }

      this.quizContainer.remove();
      this.btnsContainer.remove();

      let quizNumberToBeOpenend = --this.quizCounter;
      for (let i = 0; i < questions.length; i++) {
        if (quizNumberToBeOpenend === i) {
          new Quiz(questions[i], quizNumberToBeOpenend).init();
        }
      }
    });
  }

  colorCorrectAnswerGreen() {
    const answerValues = document.querySelectorAll(".answer-value");
    for (let answerValue of answerValues) {
        if (answerValue.innerText === this.correctAnswer.toString()) {
          answerValue.style.background = "green";
        }
    }
  }

  colorWrongAnswerRed(element) {
    if (element.innerText !== this.correctAnswer.toString()) {
      element.style.background = "red";
    }
  }

  selectAnswer() {
    window.addEventListener("click", (event) => {
      if (event.target.classList[0] === "answer-value") {
        this.colorCorrectAnswerGreen();
        this.colorWrongAnswerRed(event.target)
      }
    })
  }
}

class Button {
  constructor(btnName, instanceToBeCreated) {
    this.appContainer = document.querySelector(".app-container");  
    this.btnName = btnName;
    this.btn = document.createElement(btnName);
    this.instanceToBeCreated = instanceToBeCreated;
  }

  init() {
    this.addBtnToDOM();
    this.runNewInstanceOnClick();
  }

  addBtnToDOM() {
    this.btn.classList.add(this.btnName);
    this.btn.setAttribute("type", "button");
    this.btn.innerText = this.btnName;
    this.appContainer.appendChild(this.btn);
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

class GivenAnswers {
  constructor() {
    
  }
}

const question0 = new Question("56 + 11", [1, 2, 3, 67, 5], false, 67);
const question1 = new Question("56 + 11", [2, 3, 4, 5, 6], false, 67);
const question2 = new Question("56 + 11", [3, 4, 5, 6, 7], false, 67);
const question3 = new Question("56 + 11", [4, 5, 6, 7, 8], false, 67);
const question4 = new Question("56 + 11", [5, 6, 7, 8, 9], false, 67);
const question5 = new Question("56 + 11", [7, 8, 9, 17, 12], false, 67);

const questions = [question0, question1, question2, question3, question4, question5];

const startQuiz = new Button("start", new Quiz(questions[0], 0)).init();
