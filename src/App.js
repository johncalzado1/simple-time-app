import React from 'react';
import logo from './logo.svg';
import './App.css';
import './views/home';
import { Home } from './views/home';
import { TimeProvider } from './context/time_store';

function App() {
  return (
    <div className="App">
      <TimeProvider>
        <Home></Home>
      </TimeProvider>
    </div>
  );
}

export default App;
