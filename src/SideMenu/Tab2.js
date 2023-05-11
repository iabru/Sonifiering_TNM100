// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';
import './SideMenu.css';


const Tab2 = ({history, updateHistory}) =>{

  let option = history.tab2Option;

  return (
    <div>
        <article className="Tab2">
          {/*{Rubrik(Data[1].title[0], "Lorem ipsum 3")} 

           {option[0] === 1 && Valt(Data[1].alt[0][0], Data[1].image[0][0])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[0] = 1;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[0] !== 1 && Val(Data[1].alt[0][0], Data[1].image[0][0])}
          </div> 

          {option[0] === 2 && Valt(Data[1].alt[0][1], Data[1].image[0][1])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[0] = 2;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[0] !== 2 && Val(Data[1].alt[0][1], Data[1].image[0][1])}
          </div>*/}

          {Rubrik(Data[1].title[1], "Lorem ipsum 4")}

          {option[1] === 1 && Valt(Data[1].alt[1][0], Data[1].image[1][0])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[1] = 1;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[1] !== 1 && Val(Data[1].alt[1][0], Data[1].image[1][0])}
          </div>

          {option[1] === 2 && Valt(Data[1].alt[1][1], Data[1].image[1][1])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[1] = 2;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[1] !== 2 && Val(Data[1].alt[1][1], Data[1].image[1][1])}
          </div>

          {option[1] === 3 && Valt(Data[1].alt[1][2], Data[1].image[1][2])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[1] = 3;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[1] !== 3 && Val(Data[1].alt[1][2], Data[1].image[1][2])}
          </div>

          {Rubrik(Data[1].title[2], "Lorem ipsum 5")}

          {option[2] === 1 && Valt(Data[1].alt[2][0], Data[1].image[2][0])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[2] = 1;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[2] !== 1 && Val(Data[1].alt[2][0], Data[1].image[2][0])}
          </div>

          {option[2] === 2 && Valt(Data[1].alt[2][1], Data[1].image[2][1])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[2] = 2;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[2] !== 2 && Val(Data[1].alt[2][1], Data[1].image[2][1])}
          </div>

          {option[2] === 3 && Valt(Data[1].alt[2][2], Data[1].image[2][2])}
          <div onClick={() => { 
            let temp = [...history.tab2Option];
            temp[2] = 3;
            updateHistory({...history, tab2Option: temp}); 
            }}>
            {option[2] !== 3 && Val(Data[1].alt[2][2], Data[1].image[2][2])}
          </div>
        </article>
    </div>
  );
}

export default Tab2;
