import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import GameDetails from './components/pages/GameDetails/GameDetails';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game/:id" element={<GameDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
