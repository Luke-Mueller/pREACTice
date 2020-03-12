import React from 'react';

import WTL from '../white/white-top-left/white-top-left';
import WTR from '../white/white-top-right/white-top-right';
import WBL from '../white/white-bottom-left/white-bottom-left';
import WBR from '../white/white-bottom-right/white-bottom-right';

import './darkBlue.css';

const DarkBlue = props => {
  const height = props.posY * 2 - 2800 + 'px';
  const width = props.posY * 1.75 - 2875 + 'px';

  return (
    <div
      className="DarkBlue"
      style={{
        height: height,
        width: width
      }}>
      <WTL posY={props.posY} />
      <WTR posY={props.posY} />
      <WBL posY={props.posY} />
      <WBR posY={props.posY} />
    </div>

  )
};

export default DarkBlue;