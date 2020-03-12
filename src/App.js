import React, { useState, useEffect } from 'react';
import './App.css';

import Red from './components/red/red';
import Green from './components/green/green';
import Blue from './components/blue/blue';
import DarkBlue from './components/darkBlue/darkBlue';

function App() {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setPosY(window.pageYOffset);
    });
  }, [])

  return (
    <div className="App">  
      <Red posY={posY} />
      <Blue posY={posY} />
      <Green posY={posY} />
      <DarkBlue posY={posY} />
    </div>
  );
}

export default App;
