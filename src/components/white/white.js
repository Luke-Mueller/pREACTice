import React from 'react';

import WTL from './components/white/white-top-left/white-top-left';
import WTR from './components/white/white-top-right/white-top-right';
import WBL from './components/white/white-bottom-left/white-bottom-left';
import WBR from './components/white/white-bottom-right/white-bottom-right';

const White = () => {
  return (
    <div>
      <WTL></WTL>
      <WTR></WTR>
      <WBL></WBL>
      <WBR></WBR>
    </div>
  )
};

export default White