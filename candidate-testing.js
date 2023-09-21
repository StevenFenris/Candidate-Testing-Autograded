const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = 'Sally Ride';
let candidateAnswer;


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space?", "True or False: 5 kilometer == 5000 meters?", '(5 + 3)/2 * 10 =?', "Given the array [8, \"Orbit\", \"Trajectory\", 45], what entry is at index 2?", "What is the minimum crew size for the International Space Station (ISS)?"];
let correctAnswers= ['Sally Ride', 'true', 40, 'Trajectory', 3];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    let name = input.question("What is your name?:");
    return name;
}

function askQuestion(questions) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let guesses = [];
  for (let i = 0; i <questions.length; i++ ){
     guesses[i] = input.question(`${i + 1})${questions[i]}: `);
  }

     return guesses;

}

function gradeQuiz(candidateAnswers, correctAnswers, questions) {
  let grade=0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`Okay ${candidateName} let's grade your quiz!`);
  console.log(`---------------------------------------------------------`);
  for (i=0; i<correctAnswers.length; i++){
    console.log(`Question ${i+1}) ${questions[i]}.`);
    if (candidateAnswers[i].toString().toLowerCase() != correctAnswers[i].toString().toLowerCase()){
      console.log(`Sorry, the correct answer is ${correctAnswers[i]}!`);
    
    }else{ 
      console.log(`${correctAnswers[i]} is correct!`);
      grade++;
    }
  }


    //TODO 3.2 use this variable to calculate the candidates score.
  //grade = (100/questions.length)*grade;
  //console.log(grade)

  return grade;
}

function runProgram() {
 candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Greetings ${candidateName}, Let's get quizzin`);
  candidateAnswers = askQuestion(questions, questions.length);
  gradeQuiz(candidateAnswers, correctAnswers, questions);
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