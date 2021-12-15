class Quiz {
  constructor(questionObj, quizCounter) {
    this.appContainer = document.querySelector(".app-container");
    this.quizContainer = document.createElement("div");
    this.quizContainer.classList.add("quiz-container");
    this.questionAnswerContainer = document.createElement("div");
    this.questionAnswerContainer.classList.add("question-answers-container");
    this.answersList = document.createElement("ul");

    this.title = "Math Problem";
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
    this.addQuizContentToDOM();
    this.addBtnsToDOM();
    this.addQuestionAndAnswersToDOM();
    this.getQuizQuestionOnClick();
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

  addAnswersListToQaContainer() {
    this.answersList.classList.add("answers");
    this.questionAnswerContainer.appendChild(this.answersList);
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

  addQuestionAndAnswersToDOM() {
    this.addQuestionToQaContainer();
    this.addAnswersToList();
    this.addAnswersListToQaContainer();
  }

  addQuizContentToDOM() {
    this.addTitleToQuizContainer();
    this.addPageCounterToQuizContainer();
    this.quizContainer.appendChild(this.questionAnswerContainer);
    this.appContainer.appendChild(this.quizContainer);    
  }

  addBtnsToDOM() {
    this.nextBtn.classList.add("next-btn");
    this.prevBtn.classList.add("prev-btn");
    this.nextBtn.innerText = "Next";
    this.prevBtn.innerText = "Prev";
    this.btnsContainer.appendChild(this.nextBtn);
    this.btnsContainer.appendChild(this.prevBtn);
    this.appContainer.appendChild(this.btnsContainer);
  }

  navigateToNewQuizQuestion(quizCounterChange, quizCondition, statement) {
    this.quizContainer.remove();
    this.btnsContainer.remove();
    let quizNumberToBeOpenend = quizCounterChange;
    console.log(quizCounterChange)
    for (let i = 0; i < questions.length; i++) {
      if (quizNumberToBeOpenend === i) {
        console.log("YO")
        new Quiz(questions[i], quizNumberToBeOpenend).init();
      }
    }

    if (quizNumberToBeOpenend === quizCondition) {
      statement();
    }
  }

  getQuizQuestionOnClick() {
    const prevQuizCounterChange = --this.quizCounter;
    const nextQuizCounterChange = ++this.quizCounter;
    const prevQuizCondition = -1;
    const nextQuizCondition = questions.length;
    const prevStatement = () => { throw Error("Can't move past the first question.") };
    const nextStatement = () => new Button("restart", new Button("start", new Quiz(questions[0], 0))).init();

    this.prevBtn.addEventListener("click", () => {
      this.navigateToNewQuizQuestion(prevQuizCounterChange, prevQuizCondition, prevStatement);
    })

    this.nextBtn.addEventListener("click", () => {
      console.log(nextQuizCounterChange);
      console.log(nextQuizCondition);
      console.log(nextStatement);
      this.navigateToNewQuizQuestion(nextQuizCounterChange, nextQuizCondition, nextStatement);
    })
  }

  // getNextQuizQuestionOnClick() {
  //   this.nextBtn.addEventListener("click", () => {
  //     this.quizContainer.remove();
  //     this.btnsContainer.remove();
  //     let quizNumberToBeOpenend = ++this.quizCounter;

  //     for (let i = 0; i < questions.length; i++) {
  //       if (quizNumberToBeOpenend === i) {
  //         new Quiz(questions[i], quizNumberToBeOpenend).init();
  //       }
  //     }

  //     if (quizNumberToBeOpenend === questions.length) {
  //       new Button(
  //         "restart",
  //         new Button("start", new Quiz(questions[0], 0))
  //       ).init();
  //     }
  //   });
  // }

  // getPrevQuizQuestionOnClick() {
  //   this.prevBtn.addEventListener("click", () => {
  //     this.quizContainer.remove();
  //     this.btnsContainer.remove();
  //     let quizNumberToBeOpenend = --this.quizCounter;

  //     for (let i = 0; i < questions.length; i++) {
  //       if (quizNumberToBeOpenend === i) {
  //         new Quiz(questions[i], quizNumberToBeOpenend).init();
  //       }
  //     }

  //     if (quizNumberToBeOpenend === -1) {
  //       throw Error("Can't move past the first question.");
  //     }
  //   });
  // }
}

const questions = [
  {
    name: "question1",
    question: "56 + 11",
    possibleAnswers: [1, 2, 3, 67, 5],
    answerHasBeenSelected: false,
    correctAnswer: 67,
  },
  {
    name: "question2",
    question: "1 + 2",
    possibleAnswers: [2, 3, 4, 5, 6],
    answerHasBeenSelected: false,
    correctAnswer: 67,
  },
  {
    name: "question3",
    question: "56 + 11111",
    possibleAnswers: [3, 4, 5, 6, 7],
    answerHasBeenSelected: false,
    correctAnswer: 67,
  },
  {
    name: "question4",
    question: "56000 + 11",
    possibleAnswers: [4, 5, 6, 7, 8],
    answerHasBeenSelected: false,
    correctAnswer: 67,
  },
  {
    name: "question5",
    question: "56xvc + 11",
    possibleAnswers: [5, 6, 7, 8, 9],
    answerHasBeenSelected: false,
    correctAnswer: 67,
  },
  {
    name: "question6",
    question: "aaa56 + 11",
    possibleAnswers: [7, 8, 9, 17, 12],
    answerHasBeenSelected: false,
    correctAnswer: 67,
  },
];

class Button {
  constructor(btnName, instanceToBeCreated) {
    this.btnName = btnName;
    this.instanceToBeCreated = instanceToBeCreated;
    this.appContainer = document.querySelector(".app-container");
    this.btn = document.createElement(btnName);
  }

  init() {
    this.addBtnToDOM();
  }

  addBtnToDOM() {
    this.btn.classList.add(this.btnName);
    this.btn.setAttribute("type", "button");
    this.btn.innerText = this.btnName;
    this.appContainer.appendChild(this.btn);
    this.runNewObjOnClick();
  }

  runNewObjOnClick() {
    this.btn.addEventListener("click", () => {
      this.btn.remove();
      this.instanceToBeCreated.init();
    });
  }
}

const startQuiz = new Button("start", new Quiz(questions[0], 0)).init();
