// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';
import './SideMenu.css';

const Tab3 = ({history, updateHistory}) =>{
  
  let option = history.tab3Option;

  return (
    <div>
        <article className="Tab3">
          {Rubrik(Data[2].title[0], "Lorem ipsum 6")}

          {option[0] === 1 && Valt(Data[2].alt[0][0], Data[2].image[0][0])}
          <div onClick={() => { 
            let temp = [...history.tab3Option];
            temp[0] = 1;
            updateHistory({...history, tab3Option: temp}); 
            }}>
            {option[0] !== 1 && Val(Data[2].alt[0][0], Data[2].image[0][0])}
          </div>

          {option[0] === 2 && Valt(Data[2].alt[0][1], Data[2].image[0][1])}
          <div onClick={() => { 
            let temp = [...history.tab3Option];
            temp[0] = 2;
            updateHistory({...history, tab3Option: temp}); 
            }}>
            {option[0] !== 2 && Val(Data[2].alt[0][1], Data[2].image[0][1])}
          </div>

          {option[0] === 3 && Valt(Data[2].alt[0][2], Data[2].image[0][2])}
          <div onClick={() => { 
            let temp = [...history.tab3Option];
            temp[0] = 3;
            updateHistory({...history, tab3Option: temp}); 
            }}>
            {option[0] !== 3 && Val(Data[2].alt[0][2], Data[2].image[0][2])}
            </div>

          {Rubrik(Data[2].title[1], "Lorem ipsum 7")}

          {option[1] === 1 && Valt(Data[2].alt[1][0], Data[2].image[1][0])}
          <div onClick={() => { 
            let temp = [...history.tab3Option];
            temp[1] = 1;
            updateHistory({...history, tab3Option: temp}); 
            }}>
            {option[1] !== 1 && Val(Data[2].alt[1][0], Data[2].image[1][0])}
          </div>

          {option[1] === 2 && Valt(Data[2].alt[1][1], Data[2].image[1][1])}
          <div onClick={() => { 
            let temp = [...history.tab3Option];
            temp[1] = 2;
            updateHistory({...history, tab3Option: temp}); 
            }}>
            {option[1] !== 2 && Val(Data[2].alt[1][1], Data[2].image[1][1])}
          </div>

          {option[1] === 3 && Valt(Data[2].alt[1][2], Data[2].image[1][2])}
          <div onClick={() => { 
            let temp = [...history.tab3Option];
            temp[1] = 3;
            updateHistory({...history, tab3Option: temp}); 
            }}>
            {option[1] !== 3 && Val(Data[2].alt[1][2], Data[2].image[1][2])}
          </div>
        </article>
    </div>
  );
}

export default Tab3;
