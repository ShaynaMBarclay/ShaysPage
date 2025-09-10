import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainScreen from './MainPage';
import MediaPage from './MediaPage';
import WelcomeScreen from './WelcomeScreen';

function App() {
  const [entered, setEntered] = useState(false);
  const [fadeInMain, setFadeInMain] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => setFadeInMain(true), 100); 
  };

  return (
    <>
      {!entered ? (
        <WelcomeScreen onEnter={handleEnter} />
      ) : (
        <div className={`main-container ${fadeInMain ? 'fade-in' : ''}`}>
          <Router>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="/media" element={<MediaPage />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
