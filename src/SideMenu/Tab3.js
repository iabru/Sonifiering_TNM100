// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';
import './SideMenu.css';

const options = JSON.parse(localStorage.getItem("tab3Option")) || [];

const Tab3 = ({childToParent}) =>{
  const [option, setOption] = useState(options[0]);
  const [option2, setOption2] = useState(options[1]);

  // Update options when local storage updates
  useEffect(() => {
    const handleStorage = () => {
        // Update options when local storage updates
        var data = JSON.parse(localStorage.getItem("tab3Option"));
        setOption(data[0]);
        setOption2(data[1]);
      }
    
      window.addEventListener('storage', handleStorage())
      return () => window.removeEventListener('storage', handleStorage())
    }, [option, option2])

  return (
    <div>
        <article className="Tab3">
          {Rubrik(Data[2].title[0], "Lorem ipsum 6")}

          {option === 0 && Valt(Data[2].alt[0][0], Data[2].image[0][0])}
          <div onClick={() => {childToParent(Data[2].alt[0][0]);setOption(0); options[0] = 0; localStorage.setItem("tab3Option", JSON.stringify(options));}}>{option !== 0 && Val(Data[2].alt[0][0], Data[2].image[0][0])}</div>

          {option === 1 && Valt(Data[2].alt[0][1], Data[2].image[0][1])}
          <div onClick={() => {childToParent(Data[2].alt[0][1]);setOption(1); options[0] = 1; localStorage.setItem("tab3Option", JSON.stringify(options));}}>{option !== 1 && Val(Data[2].alt[0][1], Data[2].image[0][1])}</div>

          {option === 2 && Valt(Data[2].alt[0][2], Data[2].image[0][2])}
          <div onClick={() => {childToParent(Data[2].alt[0][2]);setOption(2); options[0] = 2; localStorage.setItem("tab3Option", JSON.stringify(options));}}>{option !== 2 && Val(Data[2].alt[0][2], Data[2].image[0][2])}</div>

          {Rubrik(Data[2].title[1], "Lorem ipsum 7")}

          {option2 === 0 && Valt(Data[2].alt[1][0], Data[2].image[1][0])}
          <div onClick={() => {childToParent(Data[2].alt[1][0]);setOption2(0); options[1] = 0; localStorage.setItem("tab3Option", JSON.stringify(options));}}>{option2 !== 0 && Val(Data[2].alt[1][0], Data[2].image[1][0])}</div>

          {option2 === 1 && Valt(Data[2].alt[1][1], Data[2].image[1][1])}
          <div onClick={() => {childToParent(Data[2].alt[1][1]);setOption2(1); options[1] = 1; localStorage.setItem("tab3Option", JSON.stringify(options));}}>{option2 !== 1 && Val(Data[2].alt[1][1], Data[2].image[1][1])}</div>

          {option2 === 2 && Valt(Data[2].alt[1][2], Data[2].image[1][2])}
          <div onClick={() => {childToParent(Data[2].alt[1][1]);setOption2(2); options[1] = 2; localStorage.setItem("tab3Option", JSON.stringify(options));}}>{option2 !== 2 && Val(Data[2].alt[1][2], Data[2].image[1][2])}</div>
        </article>
    </div>
  );
}

export default Tab3;
