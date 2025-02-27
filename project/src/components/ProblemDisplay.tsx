import React from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Problem } from '../data/problems';

interface ProblemDisplayProps {
  problem: Problem;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
  isCorrect: boolean | null;
  showSolution: boolean;
  onSubmit: () => void;
  onShowSolution: () => void;
  onNext: () => void;
  problemNumber: number;
  totalProblems: number;
}

const ProblemDisplay: React.FC<ProblemDisplayProps> = ({
  problem,
  userAnswer,
  setUserAnswer,
  isCorrect,
  showSolution,
  onSubmit,
  onShowSolution,
  onNext,
  problemNumber,
  totalProblems
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-indigo-800">{problem.topic}</h2>
        <span className="text-sm font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
          Problem {problemNumber} of {totalProblems}
        </span>
      </div>

      <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
        <p className="text-lg font-medium">{problem.question}</p>
      </div>

      {isCorrect === null ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
              Your Answer:
            </label>
            <input
              type="text"
              id="answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your answer..."
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md transition-colors ${
              userAnswer.trim() 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-indigo-300 text-white cursor-not-allowed'
            }`}
            disabled={!userAnswer.trim()}
          >
            Submit Answer
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className={`p-4 rounded-lg flex items-start space-x-3 ${
            isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {isCorrect ? (
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-medium">
                {isCorrect ? 'Correct!' : 'Not quite right.'}
              </p>
              <p>
                Your answer: {userAnswer}
                {!isCorrect && (
                  <span> (Correct answer: {problem.answer})</span>
                )}
              </p>
            </div>
          </div>

          {!isCorrect && !showSolution && (
            <button
              onClick={onShowSolution}
              className="w-full bg-indigo-100 text-indigo-700 py-2 px-4 rounded-md hover:bg-indigo-200 transition-colors"
            >
              Show Solution
            </button>
          )}

          {showSolution && (
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-medium text-indigo-800 mb-2">Solution:</h3>
              <div className="whitespace-pre-line">
                {problem.solution.map((step, index) => (
                  <p key={index} className="mb-1">{step}</p>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={onNext}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Next Problem</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProblemDisplay;