import React, { useState, useEffect } from 'react';
import './App.css';

import Red from './components/red/red';
import Green from './components/green/green';
import Blue from './components/blue/blue';
import DarkBlue from './components/darkBlue/darkBlue';
import WTL from './components/white/white-top-left/white-top-left';
import WTR from './components/white/white-top-right/white-top-right';
import WBL from './components/white/white-bottom-left/white-bottom-left';
import WBR from './components/white/white-bottom-right/white-bottom-right';
import X from './components/x/x';
import X2 from './components/x2/x2';

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
        <WTL posY={posY}>
          <X />
        </WTL>
        <WTR posY={posY}>
          <X2 />
        </WTR>
        <WBL posY={posY}>

        </WBL>
        <WBR posY={posY}>

        </WBR>
      </DarkBlue>
    </div>
  );
}

export default App;
