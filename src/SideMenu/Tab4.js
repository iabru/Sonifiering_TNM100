// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';
import './SideMenu.css';

const Tab4 = ({history, updateHistory}) =>{

  let option = history.tab4Option;

  return (
    <div>
        <article className="Tab4">
          {Rubrik(Data[3].title[0], "Lorem ipsum 8")}

          {option[0] === 0 && Valt(Data[3].alt[0][0], Data[3].image[0][0])}
          <div onClick={() => { 
            let temp = [...history.tab4Option];
            temp[0] = 0;
            updateHistory({...history, tab4Option: temp}); 
            }}>
            {option[0] !== 0 && Val(Data[3].alt[0][0], Data[3].image[0][0])}
          </div>

          {option[0] === 1 && Valt(Data[3].alt[0][1], Data[3].image[0][1])}
          <div onClick={() => { 
            let temp = [...history.tab4Option];
            temp[0] = 1;
            updateHistory({...history, tab4Option: temp}); 
            }}>
            {option[0] !== 1 && Val(Data[3].alt[0][1], Data[3].image[0][1])}
          </div>

          {Rubrik(Data[3].title[1], "Lorem ipsum 9")}

          {option[1] === 0 && Valt(Data[3].alt[1][0], Data[3].image[1][0])}
          <div onClick={() => { 
            let temp = [...history.tab4Option];
            temp[1] = 0;
            updateHistory({...history, tab4Option: temp}); 
            }}>
            {option[1] !== 0 && Val(Data[3].alt[1][0], Data[3].image[1][0])}
          </div>

          {option[1] === 1 && Valt(Data[3].alt[1][1], Data[3].image[1][1])}
          <div onClick={() => { 
            let temp = [...history.tab4Option];
            temp[1] = 1;
            updateHistory({...history, tab4Option: temp}); 
            }}>
            {option[1] !== 1 && Val(Data[3].alt[1][1], Data[3].image[1][1])}
          </div>
        </article>
    </div>
  );
}

export default Tab4;
