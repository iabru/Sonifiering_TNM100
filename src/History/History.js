// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import './History.css';
import Icon from './Icon.js';
import Data from '../SideMenu/OptionData.json';

function History() {
  // Get current options from the local storage for each tab
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [options3, setOptions3] = useState([]);
  const [options4, setOptions4] = useState([]);

  return (
    <div className="History-box">
      {
        useEffect(() => {
          const handleStorage = () => {
            // Update options when local storage updates
            setOptions1(JSON.parse(localStorage.getItem('tab1Option')));
            setOptions2(JSON.parse(localStorage.getItem("tab2Option")));
            setOptions3(JSON.parse(localStorage.getItem("tab3Option")));
            setOptions4(JSON.parse(localStorage.getItem("tab4Option")));
          }
        
          window.addEventListener('storage', handleStorage())
          return () => window.removeEventListener('storage', handleStorage())
        }, [options1, options2, options3, options4])
      }
      
      {// Ful lösning för jag får det inte att fungera annars
       // Tab 1
       options1[0] === 0 && Icon(Data[0].alt[0][0], Data[0].image[0][0])}
      {options1[0] === 1 && Icon(Data[0].alt[0][1], Data[0].image[0][1])}
      {options1[0] === 2 && Icon(Data[0].alt[0][2], Data[0].image[0][2])}
      {options1[0] === 3 && Icon(Data[0].alt[0][3], Data[0].image[0][3])}

      {options1[1] === 0 && Icon(Data[0].alt[1][0], Data[0].image[1][0])}
      {options1[1] === 1 && Icon(Data[0].alt[1][1], Data[0].image[1][1])}


      {// Tab 2
       options2[0] === 0 && Icon(Data[1].alt[0][0], Data[1].image[0][0])}
      {options2[0] === 1 && Icon(Data[1].alt[0][1], Data[1].image[0][1])}

      {options2[1] === 0 && Icon(Data[1].alt[1][0], Data[1].image[1][0])}
      {options2[1] === 1 && Icon(Data[1].alt[1][1], Data[1].image[1][1])}
      {options2[1] === 2 && Icon(Data[1].alt[1][2], Data[1].image[1][2])}

      {options2[2] === 0 && Icon(Data[1].alt[2][0], Data[1].image[2][0])}
      {options2[2] === 1 && Icon(Data[1].alt[2][1], Data[1].image[2][1])}
      {options2[2] === 2 && Icon(Data[1].alt[2][2], Data[1].image[2][2])}


      {// Tab 3
       options3[0] === 0 && Icon(Data[2].alt[0][0], Data[2].image[0][0])}
      {options3[0] === 1 && Icon(Data[2].alt[0][1], Data[2].image[0][1])}
      {options3[0] === 2 && Icon(Data[2].alt[0][2], Data[2].image[0][2])}

      {options3[1] === 0 && Icon(Data[2].alt[1][0], Data[2].image[1][0])}
      {options3[1] === 1 && Icon(Data[2].alt[1][1], Data[2].image[1][1])}
      {options3[1] === 2 && Icon(Data[2].alt[1][2], Data[2].image[1][2])}


      {// Tab 4
       options4[0] === 0 && Icon(Data[3].alt[0][0], Data[3].image[0][0])}
      {options4[0] === 1 && Icon(Data[3].alt[0][1], Data[3].image[0][1])}

      {options4[1] === 0 && Icon(Data[3].alt[1][0], Data[3].image[1][0])}
      {options4[1] === 1 && Icon(Data[3].alt[1][1], Data[3].image[1][1])}
    </div>
  );
}

export default History;
