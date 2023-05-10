// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import './History.css';
import Icon from './Icon.js';
import IconNoCross from './IconNoCross.js';
import Data from '../SideMenu/OptionData.json';


function History({history, updateHistory}) {

  //TODO Merge removeIcons men palla göra det nu

  const removeIcon = (index,option) => {
    let temp = [...history.tab1Option];
    temp[index] = 0;
    updateHistory({...history, tab1Option: temp})
  };

  const removeIcon2 = (index) => {
    let temp = [...history.tab2Option];
    temp[index] = 0;
    updateHistory({...history, tab2Option: temp})
  };

  const removeIcon3 = (index) => {
    let temp = [...history.tab3Option];
    temp[index] = 0;
    updateHistory({...history, tab3Option: temp});
  };

  const removeIcon4 = (index) => {
    let temp = [...history.tab4Option];
    temp[index] = 0;
    updateHistory({...history, tab4Option: temp});
  };

  return (
    <div className="History-box">

      {history.tab1Option.map((option,index) => {
        if(option !== 0) {
          return Icon(Data[0].alt[index][option],Data[0].image[index][option], ()=>removeIcon(index,option), "Option1", `Tab1${option}${index}`)
        }
        else {
          return IconNoCross(Data[0].alt[index][0], Data[0].image[index][0], "Option1", `Tab1${option}${index}`)
        }
      })
      }

      {history.tab2Option.map((option,index) => {
        if(option !== 0) {
          option -= 1; //* Fix because we have shifted all option one step to have a empty option
          return Icon(Data[1].alt[index][option],Data[1].image[index][option], ()=>removeIcon2(index), "Option2", `Tab2${option}${index}`)
        }
        else {
          //return IconNoCross(Data[1].alt[index][0], Data[1].image[index][0], "Option2", `Tab2${option}${index}`)
        }
      })
      }

      {history.tab3Option.map((option,index) => {
        if(option !== 0) {
          option -= 1; //* Fix because we have shifted all option one step to have a empty option
          return Icon(Data[2].alt[index][option],Data[2].image[index][option], ()=>removeIcon3(index), "Option3", `Tab3${option}${index}`)
        }
        else {
          //return IconNoCross(Data[2].alt[index][0], Data[2].image[index][0], "Option3", `Tab3${option}${index}`)
        }
      })
      }

      {history.tab4Option.map((option,index) => {
        if(option !== 0) {
          option -= 1; //* Fix because we have shifted all option one step to have a empty option
          return Icon(Data[3].alt[index][option],Data[3].image[index][option], ()=>removeIcon4(index), "Option4", `Tab4${option}${index}`)
        }
        else {
          //return IconNoCross(Data[3].alt[index][0], Data[3].image[index][0], "Option4", `Tab4${option}${index}`)
        }
      })
      }
    </div>
  );
}

export default History;
