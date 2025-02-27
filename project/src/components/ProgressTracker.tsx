import React from 'react';
import { ArrowLeft, Trophy, Award } from 'lucide-react';
import { Topic } from '../data/problems';

interface ProgressTrackerProps {
  progress: Record<string, { correct: number, total: number }>;
  topics: Topic[];
  onBack: () => void;
  totalProblems: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress, topics, onBack, totalProblems }) => {
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
  
  const allSubtopics = topics.flatMap(topic => 
    topic.subtopics.map(subtopic => ({
      ...subtopic,
      parentTitle: topic.title
    }))
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-indigo-700" />
        </button>
        <h2 className="text-2xl font-bold text-indigo-800">Your Progress</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-50 rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Trophy className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-indigo-800">Total Correct</h3>
            <p className="text-2xl font-bold text-indigo-900">{totalProgress.correct}</p>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Award className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-indigo-800">Accuracy</h3>
            <p className="text-2xl font-bold text-indigo-900">
              {totalProgress.percentage}%
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-indigo-800 mb-2">Overall Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-indigo-600 h-4 rounded-full" 
              style={{ width: `${(totalProgress.correct / totalProblems) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-right mt-1 text-indigo-800">
            {totalProgress.correct}/{totalProblems} problems
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-indigo-800 mb-4">Topic Breakdown</h3>
      
      <div className="space-y-6">
        {topics.map(topic => (
          <div key={topic.id} className="border-b pb-4 last:border-b-0">
            <h4 className="font-medium text-lg text-indigo-700 mb-3">{topic.title}</h4>
            
            <div className="space-y-4">
              {topic.subtopics.map(subtopic => {
                const subtopicProgress = progress[subtopic.id];
                const percentage = subtopicProgress 
                  ? Math.round((subtopicProgress.correct / subtopicProgress.total) * 100) 
                  : 0;
                
                return (
                  <div key={subtopic.id} className="bg-gray-50 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium">{subtopic.title}</h5>
                      <span className="text-sm font-medium">
                        {subtopicProgress ? `${subtopicProgress.correct}/${subtopicProgress.total}` : '0/0'}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          percentage >= 80 ? 'bg-green-500' : 
                          percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${percentage || 0}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;