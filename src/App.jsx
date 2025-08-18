import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainScreen from './MainPage';
import MediaPage from './MediaPage';
import WelcomeScreen from './WelcomeScreen';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <WelcomeScreen onEnter={() => setEntered(true)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/media" element={<MediaPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
