import React, { useState, useEffect } from 'react';
import './App.css';

import Red from './components/red/red';
import Green from './components/green/green';
import Blue from './components/blue/blue';
import DarkBlue from './components/darkBlue/darkBlue';
import White1 from './components/white/white1/white1';
import White2 from './components/white/white2/white2';
import White3 from './components/white/white3/white3';
import White4 from './components/white/white4/white4';

function App() {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setPosY(window.pageYOffset);
      console.log(window.pageYOffset);
    });
  }, [])

  return (
    <div className="App">
      <Red posY={posY} />
      <Blue posY={posY} />
      <Green posY={posY} />
      <DarkBlue posY={posY}>
        <White1 posY={posY} />
        <White2 posY={posY} />
        <White3 posY={posY} />
        <White4 posY={posY} />
      </DarkBlue>
    </div>
  );
}

export default App;
