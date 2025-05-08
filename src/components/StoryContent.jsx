import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function StoryContent() {
  const { stories, selectedStory, setSelectedStory } = useAppContext();
  const story = stories[selectedStory];
  const [showFurigana, setShowFurigana] = useState(true);

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

  const renderWithFurigana = (sentence, furigana) => {
    const words = sentence.split(/(\s+)/); // split by space while keeping them
    const readings = furigana.split(/(\s+)/);
    return words.map((word, i) => {
      // Only add ruby if the word includes kanji and has furigana
      const reading = readings[i] || '';
      const hasKanji = /[\u4e00-\u9faf]/.test(word);
      if (showFurigana && hasKanji && word !== reading) {
        return (
          <ruby key={i} className="mr-1">
            {word}<rt>{reading}</rt>
          </ruby>
        );
      }
      return <span key={i} className="mr-1">{word}</span>;
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{story.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span
            className={`px-2 py-1 rounded ${story.level === 'Beginner'
                ? 'bg-green-100 text-green-800'
                : story.level === 'Intermediate'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
          >
            {story.level}
          </span>
          <span>{story.duration} min read</span>
          <label htmlFor="furigana-toggle" className="relative inline-block w-10 h-6 cursor-pointer">
            <input
              type="checkbox"
              id="furigana-toggle"
              className="sr-only"
              checked={showFurigana}
              onChange={() => setShowFurigana(!showFurigana)}
            />
            <span
              className={`absolute inset-0 rounded-full bg-gray-300 transition-all duration-300 ease-in-out ${showFurigana ? 'bg-green-600' : 'bg-gray-300'
                }`}
            ></span>
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${showFurigana ? 'transform translate-x-4' : ''
                }`}
            ></span>
          </label>
          <span className="text-sm text-gray-600 flex items-center">
            <div className="relative group ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-3a1 1 0 100 2 1 1 0 000-2zm1 4a1 1 0 00-2 0v3a1 1 0 002 0v-3z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Toggle to show or hide furigana for Japanese text.
              </div>
            </div>
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {story.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg">
            {renderWithFurigana(paragraph.japanese, paragraph.furigana)}
          </p>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          className={`px-4 py-2 rounded transition-colors ${selectedStory > 0
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          onClick={goToPreviousStory}
          disabled={selectedStory === 0}
        >
          Previous Story
        </button>
        <button
          className={`px-4 py-2 rounded transition-colors ${selectedStory < stories.length - 1
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
