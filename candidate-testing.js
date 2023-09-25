const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName='';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let grade;


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers= ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("What is your name?:");
    return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let guesses = [];
  for (let i = 0; i <questions.length; i++ ){
     guesses[i] = input.question(`${i + 1})${questions[i]} `);
  }

     return guesses;

}

function gradeQuiz(candidateAnswers) {
  let grade=0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`Okay ${candidateName} let's grade your quiz!`);
  console.log(`---------------------------------------------------------`);
  for (i=0; i < questions.length; i++){
    console.log(`Question ${i+1}) ${questions[i]}`);
    if (candidateAnswers[i].toLowerCase() != correctAnswers[i].toLowerCase()){
      console.log(`Sorry, the correct answer is ${correctAnswers[i]}!`);
    
    }else{ 
      console.log(`${correctAnswers[i]} is correct!`);
      grade+=(100/candidateAnswers.length);
    }
  }


    //TODO 3.2 use this variable to calculate the candidates score.

  return grade;
}

function runProgram() {
 candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Greetings ${candidateName}, Let's get quizzin`);
  candidateAnswers = askQuestion();
  grade = gradeQuiz(candidateAnswers);
  console.log(grade)
}

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