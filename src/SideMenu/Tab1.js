// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import './SideMenu.css';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';

const options = JSON.parse(localStorage.getItem("tab1Option")) || [];

const Tab1 = ({childToParent}) =>{
  //const options = JSON.parse(localStorage.getItem("tab1Option")) || [];
  const [option, setOption] = useState(options[0]);
  const [option2, setOption2] = useState(options[1]);
  
  // It should update when history does but for some reason it doesn't
  useEffect(() => {
    const handleStorage = () => {
        var data = JSON.parse(localStorage.getItem("tab1Option"));
        setOption(data[0]);
        setOption2(data[1]);
      }
    
      window.addEventListener('storage', handleStorage())
      return () => window.removeEventListener('storage', handleStorage())
    }, [option, option2])

  return (
    <div>
        <article className="Tab1">
          {Rubrik(Data[0].title[0], "Lorem ipsum")}

          {option === 0 && Valt(Data[0].alt[0][0], Data[0].image[0][0])}
          <div onClick={() => {childToParent(Data[0].alt[0][0]);setOption(0); options[0] = 0; localStorage.setItem("tab1Option", JSON.stringify(options));}}>
            {option !== 0 && Val(Data[0].alt[0][0], Data[0].image[0][0])}
          </div>

          {option === 1 && Valt(Data[0].alt[0][1], Data[0].image[0][1])}
          <div onClick={() => {childToParent(Data[0].alt[0][1]);setOption(1); options[0] = 1; localStorage.setItem("tab1Option", JSON.stringify(options));}}>
            {option !== 1 && Val(Data[0].alt[0][1], Data[0].image[0][1])}
          </div>

          {option === 2 && Valt(Data[0].alt[0][2], Data[0].image[0][2])}
          <div onClick={() => {childToParent(Data[0].alt[0][2]);setOption(2); options[0] = 2; localStorage.setItem("tab1Option", JSON.stringify(options));}}>
            {option !== 2 && Val(Data[0].alt[0][2], Data[0].image[0][2])}
          </div>

          {option === 3 && Valt(Data[0].alt[0][3], Data[0].image[0][3])}
          <div onClick={() => {childToParent(Data[0].alt[0][3]);setOption(3); options[0] = 3; localStorage.setItem("tab1Option", JSON.stringify(options));}}>
            {option !== 3 && Val(Data[0].alt[0][3], Data[0].image[0][3])}
          </div>

          {Rubrik(Data[0].title[1], "Lorem ipsum 2")}

          {option2 === 0 && Valt(Data[0].alt[1][0], Data[0].image[1][0])}
          <div onClick={() => {childToParent(Data[0].alt[1][0]);setOption2(0); options[1] = 0; localStorage.setItem("tab1Option", JSON.stringify(options));}}>
            {option2 !== 0 && Val(Data[0].alt[1][0], Data[0].image[1][0])}
          </div>

          {option2 === 1 && Valt(Data[0].alt[1][1], Data[0].image[1][1])}
          <div onClick={() => {childToParent(Data[0].alt[1][1]);setOption2(1); options[1] = 1; localStorage.setItem("tab1Option", JSON.stringify(options));}}>
            {option2 !== 1 && Val(Data[0].alt[1][1], Data[0].image[1][1])}
          </div>
        </article>
    </div>
  );
}

export default Tab1;
