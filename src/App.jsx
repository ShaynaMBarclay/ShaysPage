import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './MainPage';
import MediaPage from './MediaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
