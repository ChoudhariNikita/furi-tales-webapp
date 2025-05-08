import { AppProvider } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import StoryContent from './components/StoryContent';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <StoryContent />
      </MainLayout>
    </AppProvider>
  );
}

export default App;