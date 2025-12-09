// Quiz questions array: each item is { question: '...', answer: '...' }
// You can add/remove questions or make the answers arrays if you want multiple correct forms.
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Which language runs in a web browser?", answer: "javascript" },
  { question: "What color do you get by mixing red and blue (one-word)?", answer: "purple" },
  { question: "Name the planet known as the Red Planet.", answer: "mars" }
];

function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  for (let i = 0; i < total; i++) {
    const qObj = quizQuestions[i];
    // show question number and the question text
    const promptText = `Question ${i + 1} of ${total}:\n${qObj.question}`;
    const rawAnswer = prompt(promptText);

    // if user pressed Cancel, prompt returns null — stop the quiz and show current score
    if (rawAnswer === null) {
      alert(`Quiz cancelled.\nYour score: ${score} / ${total}`);
      return;
    }

    // normalize input: remove leading/trailing spaces and make lowercase
    const userAnswer = rawAnswer.trim().toLowerCase();
    const correctAnswer = String(qObj.answer).trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      score++;
      alert("Correct! ✅");
    } else {
      alert(`Incorrect. ❌\nCorrect answer: ${qObj.answer}`);
    }
  }

  // final result
  alert(`Quiz complete!\nYour final score: ${score} / ${total}`);
}

// Run the quiz immediately when pasted into the console:
runQuiz();
