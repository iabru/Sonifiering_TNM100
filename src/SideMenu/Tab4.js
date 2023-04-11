// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState } from 'react';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';
import './SideMenu.css';


const Tab4 = () =>{
  const options = JSON.parse(localStorage.getItem("tab4Option"));
  const [option, setOption] = useState(options[0]);
  const [option2, setOption2] = useState(options[1]);

  return (
    <div>
        <article className="Tab4">
          {Rubrik(Data[3].title[0])}

          {option === 0 && Valt(Data[3].alt[0][0], Data[3].image[0][0])}
          <div onClick={() => {setOption(0); options[0] = 0; localStorage.setItem("tab4Option", JSON.stringify(options));}}>{option !== 0 && Val(Data[3].alt[0][0], Data[3].image[0][0])}</div>

          {option === 1 && Valt(Data[3].alt[0][1], Data[3].image[0][1])}
          <div onClick={() => {setOption(1); options[0] = 1; localStorage.setItem("tab4Option", JSON.stringify(options));}}>{option !== 1 && Val(Data[3].alt[0][1], Data[3].image[0][1])}</div>

          {Rubrik(Data[3].title[1])}

          {option2 === 0 && Valt(Data[3].alt[1][0], Data[3].image[1][0])}
          <div onClick={() => {setOption2(0); options[1] = 0; localStorage.setItem("tab4Option", JSON.stringify(options));}}>{option2 !== 0 && Val(Data[3].alt[1][0], Data[3].image[1][0])}</div>

          {option2 === 1 && Valt(Data[3].alt[1][1], Data[3].image[1][1])}
          <div onClick={() => {setOption2(1); options[1] = 1; localStorage.setItem("tab4Option", JSON.stringify(options));}}>{option2 !== 1 && Val(Data[3].alt[1][1], Data[3].image[1][1])}</div>
        </article>
    </div>
  );
}

export default Tab4;
