import { useState } from 'react';

const LoveChallenge = () => {
  const [round, setRound] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const challenges = [
    {
      category: "Drawing Challenge",
      description: "Draw a picture of our first date! 🎨",
      type: "draw", // Can later add functionality to upload images or draw within the page
    },
    {
      category: "Acting Challenge",
      description: "Record a video of you acting out a funny memory of us! 🎥",
      type: "act", // Can prompt to upload a video or record on the spot
    },
    {
      category: "Sweet Question",
      description: "Tell me in 30 seconds why you love me! 💖",
      type: "talk", // Can be a timer challenge
    },
    {
      category: "Memory Lane",
      description: "Share a memory you will never forget about us! 💭",
      type: "text", // Text input challenge
    },
  ];

  const handleCompleteChallenge = (roundIndex) => {
    setCompletedChallenges([...completedChallenges, roundIndex]);
    if (round < challenges.length - 1) {
      setRound(round + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-teal-500 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        💕 Our Love Challenge 💕
      </h1>

      {!gameOver ? (
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            Round {round + 1}: {challenges[round].category}
          </h2>
          <p className="text-lg mb-6 text-center">{challenges[round].description}</p>

          <div className="space-y-4">
            {challenges[round].type === "text" && (
              <input
                type="text"
                placeholder="Share your memory here..."
                className="w-full p-4 bg-gray-100 rounded-lg"
              />
            )}
            {challenges[round].type === "draw" && (
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p>Use your creativity! 🖍️ (This could be a drawing challenge!)</p>
              </div>
            )}
            {challenges[round].type === "act" && (
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p>Act out your memory and record it! 🎬</p>
              </div>
            )}
            {challenges[round].type === "talk" && (
              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p>Record your voice or type your answer: Why do you love me? 💬</p>
              </div>
            )}

            <button
              onClick={() => handleCompleteChallenge(round)}
              className="w-full py-3 bg-teal-500 rounded-full hover:bg-teal-700 transition-all text-white font-semibold"
            >
              Complete Challenge
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 You Completed All Challenges! 🎉</h2>
          <p className="text-xl">You completed {completedChallenges.length} out of {challenges.length} challenges! 🎯</p>
          <p className="mt-4 text-lg">You're my hero! 💪</p>
          <button
            onClick={() => {
              setCompletedChallenges([]);
              setRound(0);
              setGameOver(false);
            }}
            className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-800"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default LoveChallenge;
