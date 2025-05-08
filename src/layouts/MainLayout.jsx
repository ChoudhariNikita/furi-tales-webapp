import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MobileMenu from '../components/MobileMenu';
import AboutModal from '../components/AboutModal';
import useWindowSize from '../hooks/useWindowSize';

export default function MainLayout({ children }) {
  const { width } = useWindowSize();
  
  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <Sidebar />
        
        {/* Mobile menu (shown/hidden based on state) */}
        {width < 640 && <MobileMenu />}
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      {/* Modal (shown/hidden based on state) */}
      <AboutModal />
    </div>
  );
}