import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Home />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
