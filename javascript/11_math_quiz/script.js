class Start {
  constructor() {
    this.appContainer = document.querySelector(".app-container");
    this.startBtn = document.createElement("button");
    this.addStartBtnToDOM();
  }

  addStartBtnToDOM() {
    this.startBtn.classList.add("start-button");
    this.startBtn.setAttribute("type", "button");
    this.startBtn.innerText = "START";
    console.log(this.startBtn);
    this.appContainer.appendChild(this.startBtn);
    this.startQuiz();
  }

  startQuiz() {
    this.startBtn.addEventListener("click", () => {
      this.startBtn.remove();
      new Quiz(questions[0], 0);
    });
  }
}

class Quiz {
  constructor(questionObj, quizCounter) {
    this.appContainer = document.querySelector(".app-container");
    this.quizContainer = document.createElement("div");
    this.questionAnswerContainer = document.createElement("div");

    this.quizIsRunnig = false;
    this.startBtn = null;
    this.title = "Math Problem";

    this.question = questionObj.question;
    this.possibleAnswers = questionObj.possibleAnswers;
    this.answerHasBeenSelected = questionObj.answerHasBeenSelected;
    this.correctAnswer = questionObj.correctAnswer;

    this.nextBtn = document.createElement("button");
    this.prevBtn = document.createElement("button");
    this.btnsContainer = document.createElement("div");

    this.quizCounter = quizCounter;
    this.init();
  }

  init() {
    this.questionAnswerContainer.classList.add("question-answers-container");
    this.startQuiz();
    this.addQuestionToDOM();
  }

  startQuiz() {
    const addQuizContainer = () => {
      this.quizContainer.classList.add("quiz-container");

      const title = document.createElement("h1");
      title.innerText = "Math Problems";
      title.classList.add("quiz-title");
      this.quizContainer.appendChild(title);

      const counter = document.createElement("p");
      counter.innerText = "Coming soon...";
      counter.classList.add("quiz-counter");
      this.quizContainer.appendChild(counter);

      this.appContainer.appendChild(this.quizContainer);
      this.quizContainer.appendChild(this.questionAnswerContainer);

      this.addBtnsToDOM();
    };
    addQuizContainer();
  }

  addBtnsToDOM() {
    this.nextBtn.classList.add("next-btn");
    this.prevBtn.classList.add("prev-btn");
    this.nextBtn.innerText = "Next";
    this.prevBtn.innerText = "Prev";
    this.btnsContainer.appendChild(this.nextBtn);
    this.btnsContainer.appendChild(this.prevBtn);
    this.appContainer.appendChild(this.btnsContainer);

    this.nextBtn.addEventListener("click", () => {
      this.quizContainer.remove();
      this.btnsContainer.remove();
      let quizNumberToBeOpenend = ++this.quizCounter;

      for (let i = 0; i < questions.length; i++) {
        if (quizNumberToBeOpenend === i) {
          new Quiz(questions[i], quizNumberToBeOpenend)
        }
      }

      if (quizNumberToBeOpenend === questions.length) {
        new Restart()
      }
    });
  }

  addQuestionToDOM() {
    const questionElement = document.createElement("h2");
    questionElement.innerText = this.question;
    questionElement.classList.add("question");
    this.questionAnswerContainer.appendChild(questionElement);

    const answers = document.createElement("ul");
    answers.classList.add("answers");
    this.questionAnswerContainer.appendChild(answers);
    for (let answer of this.possibleAnswers) {
      let counter = 1;

      const answerElement = document.createElement("li");
      const answerNumber = document.createElement("span");
      const answerValue = document.createElement("span");
      answerNumber.innerText = counter;
      answerValue.innerText = answer;
      answerNumber.classList.add("answer-number");
      answerValue.classList.add("answer-value");

      answerElement.appendChild(answerNumber);
      answerElement.appendChild(answerValue);
      answerElement.classList.add("answer");
      answers.appendChild(answerElement);

      counter++;
    }
  }
}

class Restart {
  constructor() {
    this.appContainer = document.querySelector(".app-container");
    this.restartBtn = document.createElement("button");
    this.addRestartBtnToDOM();
  }

  addRestartBtnToDOM() {
    this.restartBtn.classList.add("restart-button");
    this.restartBtn.setAttribute("type", "button");
    this.restartBtn.innerText = "RESTART";
    this.appContainer.appendChild(this.restartBtn);
    this.restartAppOnClick()
  }

  restartAppOnClick() {
    this.restartBtn.addEventListener("click", () => {
      this.restartBtn.remove();
      new Start();
    });
  }
}

const questions = [
  {
    name: "question1",
    question: "56 + 11", 
    possibleAnswers: [1, 2, 3, 67, 5],
    answerHasBeenSelected: false,
    correctAnswer: 67 
  },
  {
    name: "question2",
    question: "1 + 2", 
    possibleAnswers: [2, 3, 4, 5, 6],
    answerHasBeenSelected: false,
    correctAnswer: 67 
  },
  {
    name: "question3",
    question: "56 + 11111", 
    possibleAnswers: [3, 4, 5, 6, 7],
    answerHasBeenSelected: false,
    correctAnswer: 67 
  },
  {
    name: "question4",
    question: "56000 + 11", 
    possibleAnswers: [4, 5, 6, 7, 8],
    answerHasBeenSelected: false,
    correctAnswer: 67 
  },
  {
    name: "question5",
    question: "56xvc + 11", 
    possibleAnswers: [5, 6, 7, 8, 9],
    answerHasBeenSelected: false,
    correctAnswer: 67 
  },
  {
    name: "question6",
    question: "aaa56 + 11", 
    possibleAnswers: [7, 8, 9, 17, 12],
    answerHasBeenSelected: false,
    correctAnswer: 67 
  }
]

new Start();
