import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import StoryList from './StoryList';
import useWindowSize from '../hooks/useWindowSize';

export default function Sidebar() {
  const { sidebarExpanded, toggleSidebar, stories, selectedStory, setSelectedStory } = useAppContext();
  const { width } = useWindowSize();
  
  if (width < 640) {
    return null; // On mobile, we use MobileMenu instead
  }
  
  return (
    <aside 
      className={`bg-white shadow-lg flex flex-col ${
        sidebarExpanded ? 'w-64' : 'w-16'
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-end p-2">
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded text-gray-600 hover:bg-gray-200 transition-colors"
          aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      
      {sidebarExpanded ? (
        <StoryList />
      ) : (
        <div className="flex flex-col items-center space-y-6 pt-4">
          {stories.map((story, index) => (
            <button
              key={index}
              onClick={() => setSelectedStory(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedStory === index ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-200'
              }`}
              aria-label={story.title}
            >
              {story.title.charAt(0)}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}