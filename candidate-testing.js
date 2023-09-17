const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Dark Orange is also know as what?';
let correctAnswer = 'brown';
let candidateAnswer;


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    let name = input.question("What is your name?:");
    return name;
}

function askQuestion(string) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
     let answer = input.question(`${question}:`)
     return answer;

}

function gradeQuiz(candidateAnswer, correctAnswer) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswer != correctAnswer){
    console.log(`Sorry, the correct answer is ${correctAnswer}!`)
  }else console.log(`${candidateAnswer} is correct!`);


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
 candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Greetings ${candidateName}, Let's get quizzin`);
  candidateAnswer = askQuestion(question);
  gradeQuiz(candidateAnswer, correctAnswer);
}

runProgram();

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};