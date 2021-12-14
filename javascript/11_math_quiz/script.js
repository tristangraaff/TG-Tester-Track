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
      new Quiz(questions.question1, answers.answers1, 1);
    });
  }
}

class Quiz {
  constructor(question, answersParam, quizCounter) {
    this.appContainer = document.querySelector(".app-container");
    this.quizContainer = document.createElement("div");
    this.questionAnswerContainer = document.createElement("div");

    this.quizIsRunnig = false;
    this.startBtn = null;
    this.title = "Math Problem";
    this.question = question;
    this.answers = answersParam;

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
      let questionProp
      let answersProp

      for (let prop in questions) {
        const propCount = prop.charAt(prop.length-1);
        if (quizNumberToBeOpenend == propCount) {
          questionProp = prop;
          console.log(questions.questionProp);
          new Quiz(questions.questionProp, answers.answers2, quizNumberToBeOpenend);
        }
      }

      // for (let prop in answers) {
      //   const propCount = prop.charAt(prop.length-1);
      //   if (quizNumberToBeOpenend == propCount) {
      //     answersProp = prop;
      //     console.log(answers.answersProp);
      //     new Quiz(questions.question2, answers.answersProp, quizNumberToBeOpenend);
      //   }
      // }     
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
    console.log(this.answers)
    for (let answer of this.answers) {
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
  constructor() {}
}

const questions = {
  question1: "56 + 11",
  question2: "70 - 14",
  question3: "80 - 15",
  question5: "10 + 15",
  question6: "21  -16",
};

const answers = {
  answers1: [1, 2, 3, 67, 5],
  answers2: [2, 3, 4, 5, 6],
  answers3: [3, 4, 5, 6, 7],
  answers4: [4, 5, 6, 7, 8],
  answers5: [5, 6, 7, 8, 9],
  answers6: [6, 7, 8, 9, 10],
};

new Start();
