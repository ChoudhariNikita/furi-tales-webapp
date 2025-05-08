import { useAppContext } from '../context/AppContext';
import StoryList from './StoryList';
import { X, Book } from 'lucide-react';

export default function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useAppContext();
  
  if (!mobileMenuOpen) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 z-40">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      
      {/* Menu */}
      <aside className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-lg z-50 flex flex-col">
        <div className="flex items-center p-4 border-b">
          <div className="flex items-center space-x-2">
            <Book size={24} />
            <h1 className="text-xl font-bold">Furi-Tales</h1>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="ml-auto p-1 rounded text-gray-600 hover:bg-gray-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <StoryList onSelectStory={() => setMobileMenuOpen(false)} />
        </div>
      </aside>
    </div>
  );
}