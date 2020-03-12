import React, { useContext } from 'react';

import PosYContext from '../../context/posY-context';

import WTL from '../white/white-top-left/white-top-left';
import WTR from '../white/white-top-right/white-top-right';
import WBL from '../white/white-bottom-left/white-bottom-left';
import WBR from '../white/white-bottom-right/white-bottom-right';

import './darkBlue.css';

const DarkBlue = () => {
  const global = useContext(PosYContext);
  const height = global.posY * 2 - 2800 + 'px';
  const width = global.posY * 1.75 - 2875 + 'px';

  return (
    <div
      className="DarkBlue"
      style={{
        height: height,
        width: width
      }}>
      <WTL />
      <WTR />
      <WBL />
      <WBR />
    </div>

  )
};

export default DarkBlue;