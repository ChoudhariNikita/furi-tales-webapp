import { X, Book } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function AboutModal() {
  const { showAboutModal, setShowAboutModal } = useAppContext();
  
  if (!showAboutModal) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">About Furi-Tales</h2>
          <button 
            onClick={() => setShowAboutModal(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-full">
              <Book size={48} className="text-indigo-600" />
            </div>
          </div>
          
          <p className="mb-4">
            Furi-Tales is a Japanese language learning app that helps you improve your reading 
            skills through engaging stories with furigana and English translations.
          </p>
          
          <p className="mb-4">
            Our stories range from beginner to advanced levels, covering various topics 
            and genres to keep your learning journey interesting and enjoyable.
          </p>
          
          <h3 className="font-bold text-lg mt-6 mb-2">Features:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Progressive difficulty levels</li>
            <li>Furigana for all kanji</li>
            <li>English translations</li>
            <li>Cultural notes and explanations</li>
            <li>Track your reading progress</li>
          </ul>
        </div>
        
        <div className="p-4 border-t bg-gray-50 flex justify-end">
          <button 
            onClick={() => setShowAboutModal(false)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}