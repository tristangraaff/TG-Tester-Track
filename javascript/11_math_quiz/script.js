class Quiz {
  constructor(questionAndAnswers) {
    this.appContainer = document.querySelector(".app-container");
    this.quizContainer = document.createElement("div");
    this.questionAnswerContainer = document.createElement("div");

    this.startBtn = null;
    this.title = "Math Problem";
    this.questionAndAnswers = questionAndAnswers;

    this.init();
  }

  init() {
    this.addStartBtnToDOM();
    this.questionAnswerContainer.classList.add("question-answers-container");
    this.startQuiz();
    this.addQuestionToDOM();
  }

  addStartBtnToDOM() {
    const startBtn = document.createElement("button");
    startBtn.classList.add("start-button");
    startBtn.setAttribute("type", "button");
    startBtn.innerText = "START";
    this.startBtn = startBtn;
    this.appContainer.appendChild(this.startBtn);
  }

  startQuiz() {
    this.startBtn.addEventListener("click", () => {
      this.startBtn.remove()
      this.quizContainer.classList.add("quiz-container");

      const title = document.createElement("h1");
      title.innerText = "Math Problems";
      title.classList.add("quiz-title");
      this.quizContainer.appendChild(title);

      const counter = document.createElement("p");
      counter.innerText = "Coming soon..."
      counter.classList.add("quiz-counter");
      this.quizContainer.appendChild(counter);

      this.appContainer.appendChild(this.quizContainer);
      this.quizContainer.appendChild(this.questionAnswerContainer);
    })
  }

  addQuestionToDOM() {
    const questionElement = document.createElement("h2");
    questionElement.innerText = this.questionAndAnswers.question;
    questionElement.classList.add("question");
    this.questionAnswerContainer.appendChild(questionElement);

    const answers = document.createElement("ul");
    answers.classList.add("answers");
    this.questionAnswerContainer.appendChild(answers);

    for (let answer of this.questionAndAnswers.answers) {
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

class Question {
  constructor(question, answers) {
    this.question = `How much is ${question}?`;
    this.answers = answers;
  }
}

answers1 = [1, 2, 3, 4, 67, 5];
const questionAndAnswers1 = new Question(56 + 11, answers1);
const quiz = new Quiz(questionAndAnswers1); 


