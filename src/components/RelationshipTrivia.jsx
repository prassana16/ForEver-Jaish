import { useState } from 'react';

const RelationshipTrivia = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const questions = [
    {
      question: "Where did we have our first date?",
      options: ["Cafe", "Park", "Restaurant", "Beach"],
      correctAnswer: "Cafe",
    },
    {
      question: "What’s the name of my favorite pet?",
      options: ["Buddy", "Bella", "Max", "Charlie"],
      correctAnswer: "Buddy",
    },
    {
      question: "What song do we call 'our song'?",
      options: ["Perfect - Ed Sheeran", "All of Me - John Legend", "Shape of You - Ed Sheeran", "Something Just Like This - The Chainsmokers"],
      correctAnswer: "Perfect - Ed Sheeran",
    },
    {
      question: "What’s my favorite movie to watch with you?",
      options: ["The Notebook", "Titanic", "Marvel Movies", "The Lion King"],
      correctAnswer: "The Notebook",
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-300 to-pink-500 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        💖 Relationship Trivia 💖
      </h1>
      {!gameOver ? (
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">{questions[questionIndex].question}</h2>
          <div className="space-y-4">
            {questions[questionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full py-3 bg-purple-500 rounded-full hover:bg-purple-700 transition-all text-white font-semibold"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Game Over! 🎉</h2>
          <p className="text-xl">You scored {score} out of {questions.length}!</p>
          <p className="mt-4 text-lg">You know me better than anyone! 💖</p>
          <button
            onClick={() => {
              setScore(0);
              setQuestionIndex(0);
              setGameOver(false);
            }}
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-800"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default RelationshipTrivia;
