import React from 'react';
import { Topic } from '../data/problems';

interface TopicSelectorProps {
  topics: Topic[];
  selectedTopic: Topic | null;
  onSelectTopic: (topic: Topic) => void;
  progress: Record<string, { correct: number, total: number }>;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ 
  topics, 
  selectedTopic, 
  onSelectTopic,
  progress 
}) => {
  const getTopicProgress = (topicId: string) => {
    const topicProgress = progress[topicId];
    if (!topicProgress) return null;
    
    const percentage = Math.round((topicProgress.correct / topicProgress.total) * 100);
    return { 
      percentage,
      correct: topicProgress.correct,
      total: topicProgress.total
    };
  };

  return (
    <div className="space-y-4">
      {topics.map((topic) => {
        const topicProgress = getTopicProgress(topic.id);
        
        return (
          <div key={topic.id} className="space-y-2">
            <h3 className="font-medium text-lg text-indigo-700">{topic.title}</h3>
            
            <div className="space-y-1">
              {topic.subtopics.map((subtopic) => {
                const isSelected = selectedTopic?.id === subtopic.id;
                const subtopicProgress = getTopicProgress(subtopic.id);
                
                return (
                  <button
                    key={subtopic.id}
                    onClick={() => onSelectTopic(subtopic)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors flex justify-between items-center ${
                      isSelected 
                        ? 'bg-indigo-100 text-indigo-800' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{subtopic.title}</span>
                    
                    {subtopicProgress && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
                        {subtopicProgress.correct}/{subtopicProgress.total}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopicSelector;