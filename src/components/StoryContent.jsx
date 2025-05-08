import { useAppContext } from '../context/AppContext';

export default function StoryContent() {
  const { stories, selectedStory, setSelectedStory } = useAppContext();
  const story = stories[selectedStory];
  
  const goToNextStory = () => {
    if (selectedStory < stories.length - 1) {
      setSelectedStory(selectedStory + 1);
    }
  };
  
  const goToPreviousStory = () => {
    if (selectedStory > 0) {
      setSelectedStory(selectedStory - 1);
    }
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{story.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">{story.level}</span>
          <span>{story.duration} min read</span>
        </div>
      </div>

      <div className="space-y-6">
        {story.paragraphs.map((paragraph, index) => (
          <div key={index} className="space-y-2">
            <p className="text-lg">{paragraph.japanese}</p>
            <p className="text-md text-indigo-700">{paragraph.furigana}</p>
            <p className="text-md text-gray-600">{paragraph.english}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button 
          className={`px-4 py-2 rounded transition-colors ${
            selectedStory > 0 
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          onClick={goToPreviousStory}
          disabled={selectedStory === 0}
        >
          Previous Story
        </button>
        <button 
          className={`px-4 py-2 rounded transition-colors ${
            selectedStory < stories.length - 1 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-indigo-300 text-white cursor-not-allowed'
          }`}
          onClick={goToNextStory}
          disabled={selectedStory === stories.length - 1}
        >
          Next Story
        </button>
      </div>
    </div>
  );
}