class Question {
  constructor(question, possibleAnswers, answerHasBeenSelected, correctAnswer) {
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.answerHasBeenSelected = answerHasBeenSelected;
    this.correctAnswer = correctAnswer;
  }
}

const questions = [
  new Question("56 + 11", [1, 2, 3, 67, 5], false, 67),
  new Question("49 - 32", [2, 17, 4, 67, 6], false, 17),
  new Question("70 - 14", [3, 4, 5, 6, 56], false, 56),
  new Question("20 + 10", [30, 5, 6, 7, 8], false, 30),
  new Question("16 - 16", [5, 6, 7, 8, 0], false, 0),
  new Question("100 - 88", [7, 8, 9, 10, 12], false, 12),
];

export default questions;