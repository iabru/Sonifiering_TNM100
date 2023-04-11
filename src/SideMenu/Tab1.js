// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState } from 'react';
import './SideMenu.css';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';

function Tab1() {
  const [option, setOption] = useState(0);
  const [option2, setOption2] = useState(0);

  return (
    <div>
      
        <article className="Tab1">
          {Rubrik(Data[0].title[0])}

          {option === 0 && Valt(Data[0].alt[0][0], Data[0].image[0][0])}
          <div onClick={() => setOption(0)}>{option !== 0 && Val(Data[0].alt[0][0], Data[0].image[0][0])}</div>

          {option === 1 && Valt(Data[0].alt[0][1], Data[0].image[0][1])}
          <div onClick={() => setOption(1)}>{option !== 1 && Val(Data[0].alt[0][1], Data[0].image[0][1])}</div>

          {option === 2 && Valt(Data[0].alt[0][2], Data[0].image[0][2])}
          <div onClick={() => setOption(2)}>{option !== 2 && Val(Data[0].alt[0][2], Data[0].image[0][2])}</div>

          {option === 3 && Valt(Data[0].alt[0][3], Data[0].image[0][3])}
          <div onClick={() => setOption(3)}>{option !== 3 && Val(Data[0].alt[0][3], Data[0].image[0][3])}</div>

          {Rubrik(Data[0].title[1])}

          {option2 === 0 && Valt(Data[0].alt[1][0], Data[0].image[1][0])}
          <div onClick={() => setOption2(0)}>{option2 !== 0 && Val(Data[0].alt[1][0], Data[0].image[1][0])}</div>

          {option2 === 1 && Valt(Data[0].alt[1][1], Data[0].image[1][1])}
          <div onClick={() => setOption2(1)}>{option2 !== 1 && Val(Data[0].alt[1][1], Data[0].image[1][1])}</div>
        </article>
    </div>
  );
}

export default Tab1;
