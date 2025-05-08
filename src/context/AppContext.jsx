import { createContext, useState, useContext } from 'react';
import { stories } from '../data/stories';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(0);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppContext.Provider 
      value={{
        sidebarExpanded,
        setSidebarExpanded,
        toggleSidebar,
        mobileMenuOpen,
        setMobileMenuOpen,
        toggleMobileMenu,
        showAboutModal,
        setShowAboutModal,
        selectedStory,
        setSelectedStory,
        stories
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}