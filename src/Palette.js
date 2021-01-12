import React from 'react'
import './Palette.css';

function Palette() {
  return (
    <div>
      <div className="palette__buttons">
        <button className="palette__button1">D5E1F0</button>
        <button className="palette__button2">A5ACB3</button>
        <button className="palette__button3">808DA3</button>
        <button className="palette__button4">504C46</button>
        <button className="palette__button5">343B3E</button>
        <button className="palette__button6">0C0A08</button>
      </div>
      <h1 className="palette__title">color palette</h1>
      <hr className="separator"/>
    </div>
  );
  
  
}

export default Palette
