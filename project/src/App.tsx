import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, BarChart } from 'lucide-react';
import TopicSelector from './components/TopicSelector';
import ProblemDisplay from './components/ProblemDisplay';
import ProgressTracker from './components/ProgressTracker';
import { topics, Topic, Problem } from './data/problems';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [progress, setProgress] = useState<Record<string, { correct: number, total: number }>>({});
  const [showProgress, setShowProgress] = useState(false);

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentProblemIndex(0);
    setUserAnswer('');
    setIsCorrect(null);
    setShowSolution(false);
  };

  const handleAnswerSubmit = () => {
    if (!selectedTopic || !userAnswer.trim()) return;
    
    const currentProblem = selectedTopic.problems[currentProblemIndex];
    const userAnswerNum = parseFloat(userAnswer.trim());
    const correctAnswer = parseFloat(currentProblem.answer);
    
    const correct = userAnswerNum === correctAnswer;
    setIsCorrect(correct);
    
    // Update progress
    const topicId = selectedTopic.id;
    setProgress(prev => {
      const topicProgress = prev[topicId] || { correct: 0, total: 0 };
      return {
        ...prev,
        [topicId]: {
          correct: topicProgress.correct + (correct ? 1 : 0),
          total: topicProgress.total + 1
        }
      };
    });
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  const handleNextProblem = () => {
    if (!selectedTopic) return;
    
    if (currentProblemIndex < selectedTopic.problems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
    } else {
      setCurrentProblemIndex(0);
    }
    
    setUserAnswer('');
    setIsCorrect(null);
    setShowSolution(false);
  };

  const toggleProgressView = () => {
    setShowProgress(!showProgress);
  };

  const getTotalProgress = () => {
    let totalCorrect = 0;
    let totalAttempted = 0;
    
    Object.values(progress).forEach(({ correct, total }) => {
      totalCorrect += correct;
      totalAttempted += total;
    });
    
    return {
      correct: totalCorrect,
      total: totalAttempted,
      percentage: totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0
    };
  };

  const totalProgress = getTotalProgress();
  const totalProblems = 60;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Math Practice</h1>
          </div>
          <button 
            onClick={toggleProgressView}
            className="flex items-center space-x-1 bg-indigo-700 hover:bg-indigo-800 px-3 py-1 rounded-md transition-colors"
          >
            <BarChart className="h-5 w-5" />
            <span>Progress</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {showProgress ? (
          <ProgressTracker 
            progress={progress} 
            topics={topics} 
            onBack={() => setShowProgress(false)} 
            totalProblems={totalProblems}
          />
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-4 text-indigo-800">Topics</h2>
              <TopicSelector 
                topics={topics} 
                selectedTopic={selectedTopic} 
                onSelectTopic={handleTopicSelect} 
                progress={progress}
              />
            </div>
            
            <div className="md:col-span-2">
              {selectedTopic ? (
                <ProblemDisplay 
                  problem={selectedTopic.problems[currentProblemIndex]}
                  userAnswer={userAnswer}
                  setUserAnswer={setUserAnswer}
                  isCorrect={isCorrect}
                  showSolution={showSolution}
                  onSubmit={handleAnswerSubmit}
                  onShowSolution={handleShowSolution}
                  onNext={handleNextProblem}
                  problemNumber={currentProblemIndex + 1}
                  totalProblems={selectedTopic.problems.length}
                />
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Welcome to Math Practice!</h2>
                  <p className="text-gray-600 mb-6">Select a topic from the left to start practicing.</p>
                  <div className="flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Math equations" 
                      className="rounded-lg max-w-full h-auto max-h-64"
                    />
                  </div>
                  
                  <div className="fixed bottom-0 left-0 right-0 bg-indigo-600 bg-opacity-90 text-white p-3 shadow-lg">
                    <div className="container mx-auto flex justify-between items-center">
                      <div>
                        <span className="font-medium">Overall Progress: </span>
                        <span>{totalProgress.correct} of {totalProblems} problems completed</span>
                      </div>
                      <div className="w-48 bg-indigo-800 rounded-full h-2.5">
                        <div 
                          className="bg-indigo-300 h-2.5 rounded-full" 
                          style={{ width: `${(totalProgress.correct / totalProblems) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;