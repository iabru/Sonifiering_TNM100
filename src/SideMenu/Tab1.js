// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import './SideMenu.css';
import Rubrik from './Rubrik.js'
import Val from './Val.js'
import Valt from './Valt.js'
import Data from './OptionData.json';

//let options = JSON.parse(localStorage.getItem("tab1Option")) || [];

const Tab1 = ({history, updateHistory}) =>{
  
  let option = history.tab1Option;

  return (
    <div>
        <article className="Tab1">
          {Rubrik(Data[0].title[0], "Med vågform avses den grafiska formen hos en periodisk, med jämna mellanrum lika återkommande, förändring i ett fysiskt medium.")}

          {option[0] === 0 && Valt(Data[0].alt[0][0], Data[0].image[0][0])}
          <div onClick={() => { 
            let temp = [...history.tab1Option];
            temp[0] = 0;
            updateHistory({...history, tab1Option: temp}); 
            /*options[0] = 0; localStorage.setItem("tab1Option", JSON.stringify(options));*/
            }}>
            {option[0] !== 0 && Val(Data[0].alt[0][0], Data[0].image[0][0])}
          </div>

          {option[0] === 1 && Valt(Data[0].alt[0][1], Data[0].image[0][1])}
          <div onClick={() => {
            let temp = [...history.tab1Option];
            temp[0] = 1;
            updateHistory({...history, tab1Option: temp}); 
            /*options[0] = 1; localStorage.setItem("tab1Option", JSON.stringify(options));*/
            
            }}>
            {option[0] !== 1 && Val(Data[0].alt[0][1], Data[0].image[0][1])}
          </div>

          {option[0] === 2 && Valt(Data[0].alt[0][2], Data[0].image[0][2])}
          <div onClick={() => { 
            let temp = [...history.tab1Option];
            temp[0] = 2;
            updateHistory({...history, tab1Option: temp}); 
            /* options[0] = 2; localStorage.setItem("tab1Option", JSON.stringify(options));*/}}>
            {option[0] !== 2 && Val(Data[0].alt[0][2], Data[0].image[0][2])}
          </div>

          {option[0] === 3 && Valt(Data[0].alt[0][3], Data[0].image[0][3])}
          <div onClick={() => { 
            let temp = [...history.tab1Option];
            temp[0] = 3;
            //console.log(option);
            updateHistory({...history, tab1Option: temp});  
            /*options[0] = 3; localStorage.setItem("tab1Option", JSON.stringify(options));*/}}>
            {option[0] !== 3 && Val(Data[0].alt[0][3], Data[0].image[0][3])}
          </div>

          {Rubrik(Data[0].title[1], `Frekvens: Varje datavärde är direkt mappat till en frekvens \nToner: Varje datavärde har interpolerats till närmaste ton`)}

          {option[1] === 0 && Valt(Data[0].alt[1][0], Data[0].image[1][0])}
          <div onClick={() => { 
            let temp = [...history.tab1Option];
            temp[1] = 0;
            //console.log(option);
            updateHistory({...history, tab1Option: temp});  
            /*options[0] = 3; localStorage.setItem("tab1Option", JSON.stringify(options));*/}}>
            {option[1] !== 0 && Val(Data[0].alt[1][0], Data[0].image[1][0])}
          </div>

          {option[1] === 1 && Valt(Data[0].alt[1][1], Data[0].image[1][1])}
          <div onClick={() => { 
            let temp = [...history.tab1Option];
            temp[1] = 1;
            //console.log(option);
            updateHistory({...history, tab1Option: temp});  
            /*options[0] = 3; localStorage.setItem("tab1Option", JSON.stringify(options));*/}}>
            {option[1] !== 1 && Val(Data[0].alt[1][1], Data[0].image[1][1])}
          </div>
        </article>
    </div>
  );
}

export default Tab1;
