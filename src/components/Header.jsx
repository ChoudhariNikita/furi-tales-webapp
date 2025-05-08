import { Menu, Book, Info, Settings, LogOut } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import useWindowSize from '../hooks/useWindowSize';

export default function Header() {
  const { toggleMobileMenu, setShowAboutModal, mobileMenuOpen } = useAppContext();
  const { width } = useWindowSize();
  
  return (
    <header className="bg-indigo-600 text-white p-4 flex items-center justify-between shadow-md z-10">
      <div className="flex items-center">
        {width < 640 && (
          <button 
            onClick={toggleMobileMenu} 
            className="mr-4 p-1 rounded hover:bg-indigo-700 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={24} />
          </button>
        )}
        <div className="flex items-center space-x-2">
          <Book size={24} />
          <h1 className="text-xl font-bold">Furi-Tales</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setShowAboutModal(true)}
          className="flex items-center space-x-1 hover:bg-indigo-700 px-3 py-1 rounded transition-colors"
        >
          <Info size={18} />
          <span className="hidden sm:inline">About Us</span>
        </button>
        
        <button className="flex items-center space-x-1 hover:bg-indigo-700 px-3 py-1 rounded transition-colors">
          <Settings size={18} />
          <span className="hidden sm:inline">Settings</span>
        </button>
        
        <button className="flex items-center space-x-1 hover:bg-indigo-700 px-3 py-1 rounded transition-colors">
          <LogOut size={18} />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>
    </header>
  );
}