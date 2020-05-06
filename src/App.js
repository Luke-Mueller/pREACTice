import React, { useEffect, useState } from 'react';

import PosYContext from './context/posY-context';

import Beach from './components/beach/beach';
import Blue from './components/blue/blue';
import DarkBlue from './components/darkBlue/darkBlue';
import Green from './components/green/green';
import Red from './components/red/red';

import './App.css';

function App() {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setPosY(window.pageYOffset);
    });
  }, [])

  return (
    <div className="App">
      <PosYContext.Provider value={{posY: posY}}>
        <Red />
        <Blue />
        <Green />
        <DarkBlue />
        <Beach />
      </PosYContext.Provider>
    </div>
  );
}

export default App;
