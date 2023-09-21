const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = 'Dark Orange is also known as what?';
//let correctAnswer = 'brown';
let candidateAnswer;


//TODO: Variables for Part 2
let questions = ["True or false: 5000 meters = 5 kilometers", "(5 + 3)/2 * 10 = ?", "Given the array [8, \"Orbit\", \"Trajectory\", 45], what entry is at index 2?", "Who was the first American woman in space?", "What is the minimum crew size for the International Space Station (ISS)?"];
let correctAnswers= [true, 40, "Trajectory", "Sally Ride", 3];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    let name = input.question("What is your name?:");
    return name;
}

function askQuestion(questions, counter) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
     let answer = input.question(`${counter + 1})${questions[counter]}: `);
     return answer;

}

function gradeQuiz(candidateAnswers, correctAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswers != correctAnswers){
    console.log(`Sorry, the correct answer is ${correctAnswers}!`);
  }else console.log(`${candidateAnswers} is correct!`);


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
 candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Greetings ${candidateName}, Let's get quizzin`);
  candidateAnswers = askQuestion(question);
  gradeQuiz(candidateAnswers, correctAnswers);
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