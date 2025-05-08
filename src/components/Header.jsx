import { Menu, Book, Info, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import useWindowSize from '../hooks/useWindowSize';
import { useState } from 'react';

export default function Header() {
  const { toggleMobileMenu, setShowAboutModal, mobileMenuOpen } = useAppContext();
  const { width } = useWindowSize();
  const [rating, setRating] = useState(0);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendFeedback = () => {
    const subject = encodeURIComponent('Furi-Tales Feedback');
    const body = encodeURIComponent(`Rating: ${rating}/5\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:choudharinikita96@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
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

          <button 
            onClick={() => setShowFeedbackModal(true)}
            className="flex items-center space-x-1 hover:bg-indigo-700 px-3 py-1 rounded transition-colors"
          >
            <Star size={18} />
            <span className="hidden sm:inline">Feedback</span>
          </button>
        </div>
      </header>

      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4 text-center">Rate Us</h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  className={`cursor-pointer transition-colors ${
                    rating >= star ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                  onClick={() => setRating(star)}
                  fill={rating >= star ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <textarea
              className="w-full p-2 border rounded mb-4"
              rows="4"
              placeholder="Write your feedback here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              onClick={handleSendFeedback}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors w-full mb-2"
            >
              Send Feedback
            </button>
            <button
              onClick={() => setShowFeedbackModal(false)}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}