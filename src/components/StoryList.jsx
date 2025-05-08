import { useAppContext } from '../context/AppContext';

export default function StoryList({ onSelectStory }) {
  const { stories, selectedStory, setSelectedStory } = useAppContext();
  
  const handleStorySelect = (index) => {
    setSelectedStory(index);
    if (onSelectStory) {
      onSelectStory();
    }
  };
  
  return (
    <div className="overflow-y-auto h-full">
      <h2 className="px-4 py-2 text-lg font-semibold text-gray-700">Stories</h2>
      <div className="space-y-1">
        {stories.map((story, index) => (
          <button
            key={index}
            onClick={() => handleStorySelect(index)}
            className={`w-full text-left px-4 py-2 flex items-center ${
              selectedStory === index 
                ? 'bg-indigo-100 text-indigo-600 border-r-4 border-indigo-600' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="mr-3 text-lg font-medium">{index + 1}.</div>
            <div>
              <div className="font-medium">{story.title}</div>
              <div className="text-sm text-gray-500">{story.level}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}