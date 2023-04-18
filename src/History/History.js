// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState, useEffect } from 'react';
import './History.css';
import Icon from './Icon.js';
import IconNoCross from './IconNoCross.js';
import Data from '../SideMenu/OptionData.json';

const localOptions1 = JSON.parse(localStorage.getItem("tab1Option")) || [];
const localOptions2 = JSON.parse(localStorage.getItem("tab2Option")) || [];
const localOptions3 = JSON.parse(localStorage.getItem("tab3Option")) || [];
const localOptions4 = JSON.parse(localStorage.getItem("tab4Option")) || [];

function History() {
  // Get current options from the local storage for each tab
  const [options1, setOptions1] = useState(localOptions1);
  const [options2, setOptions2] = useState(localOptions2);
  const [options3, setOptions3] = useState(localOptions3);
  const [options4, setOptions4] = useState(localOptions4);

  // Update options when local storage updates
  useEffect(() => {
    const handleStorage = () => {
      setOptions1(JSON.parse(localStorage.getItem("tab1Option")));
      setOptions2(JSON.parse(localStorage.getItem("tab2Option")));
      setOptions3(JSON.parse(localStorage.getItem("tab3Option")));
      setOptions4(JSON.parse(localStorage.getItem("tab4Option")));
    }
  
    window.addEventListener('storage', handleStorage())
    return () => window.removeEventListener('storage', handleStorage())
  }, [options1, options2, options3, options4]) // mata in options

  // I AM SO SORRY FOR THIS MONSTER
  const removeIcon = () => {
    localStorage.setItem("tab1Option", JSON.stringify([0 , options1[1]]));
    setOptions1(JSON.parse(localStorage.getItem("tab1Option")));
  };

  const removeIcon2 = () => {
    localStorage.setItem("tab1Option", JSON.stringify([options1[0], 0]));
    setOptions1(JSON.parse(localStorage.getItem("tab1Option")));
  };

  const removeIcon3 = () => {
    localStorage.setItem("tab2Option", JSON.stringify([0, options2[1], options2[2]]));
    setOptions1(JSON.parse(localStorage.getItem("tab2Option")));
  };

  const removeIcon4 = () => {
    localStorage.setItem("tab2Option", JSON.stringify([options2[0], 0, options2[2]]));
    setOptions1(JSON.parse(localStorage.getItem("tab2Option")));
  };

  const removeIcon5 = () => {
    localStorage.setItem("tab2Option", JSON.stringify([options2[0], options2[1], 0]));
    setOptions1(JSON.parse(localStorage.getItem("tab2Option")));
  };

  const removeIcon6 = () => {
    localStorage.setItem("tab3Option", JSON.stringify([0, options3[1]]));
    setOptions1(JSON.parse(localStorage.getItem("tab3Option")));
  };

  const removeIcon7 = () => {
    localStorage.setItem("tab3Option", JSON.stringify([options3[0], 0]));
    setOptions1(JSON.parse(localStorage.getItem("tab3Option")));
  };

  const removeIcon8 = () => {
    localStorage.setItem("tab4Option", JSON.stringify([0, options4[1]]));
    setOptions1(JSON.parse(localStorage.getItem("tab4Option")));
  };

  const removeIcon9 = () => {
    localStorage.setItem("tab4Option", JSON.stringify([options4[0], 0]));
    setOptions1(JSON.parse(localStorage.getItem("tab4Option")));
  };

  return (
    <div className="History-box">
      {// Ful lösning för jag får det inte att fungera annars
       // Tab 1
       options1[0] === 0 && IconNoCross(Data[0].alt[0][0], Data[0].image[0][0], "Option1")}
      {options1[0] === 1 && Icon(Data[0].alt[0][1], Data[0].image[0][1], removeIcon, "Option1")}
      {options1[0] === 2 && Icon(Data[0].alt[0][2], Data[0].image[0][2], removeIcon, "Option1")}
      {options1[0] === 3 && Icon(Data[0].alt[0][3], Data[0].image[0][3], removeIcon, "Option1")}

      {options1[1] === 0 && IconNoCross(Data[0].alt[1][0], Data[0].image[1][0], "Option1")}
      {options1[1] === 1 && Icon(Data[0].alt[1][1], Data[0].image[1][1], removeIcon2, "Option1")}


      {// Tab 2
       options2[0] === 0 && IconNoCross(Data[1].alt[0][0], Data[1].image[0][0], "Option2")}
      {options2[0] === 1 && Icon(Data[1].alt[0][1], Data[1].image[0][1], removeIcon3, "Option2")}

      {options2[1] === 0 && IconNoCross(Data[1].alt[1][0], Data[1].image[1][0], "Option2")}
      {options2[1] === 1 && Icon(Data[1].alt[1][1], Data[1].image[1][1], removeIcon4, "Option2")}
      {options2[1] === 2 && Icon(Data[1].alt[1][2], Data[1].image[1][2], removeIcon4, "Option2")}

      {options2[2] === 0 && IconNoCross(Data[1].alt[2][0], Data[1].image[2][0], "Option2")}
      {options2[2] === 1 && Icon(Data[1].alt[2][1], Data[1].image[2][1], removeIcon5, "Option2")}
      {options2[2] === 2 && Icon(Data[1].alt[2][2], Data[1].image[2][2], removeIcon5, "Option2")}


      {// Tab 3
       options3[0] === 0 && IconNoCross(Data[2].alt[0][0], Data[2].image[0][0], "Option3")}
      {options3[0] === 1 && Icon(Data[2].alt[0][1], Data[2].image[0][1], removeIcon6, "Option3")}
      {options3[0] === 2 && Icon(Data[2].alt[0][2], Data[2].image[0][2], removeIcon6, "Option3")}

      {options3[1] === 0 && IconNoCross(Data[2].alt[1][0], Data[2].image[1][0], "Option3")}
      {options3[1] === 1 && Icon(Data[2].alt[1][1], Data[2].image[1][1], removeIcon7, "Option3")}
      {options3[1] === 2 && Icon(Data[2].alt[1][2], Data[2].image[1][2], removeIcon7, "Option3")}


      {// Tab 4
       options4[0] === 0 && IconNoCross(Data[3].alt[0][0], Data[3].image[0][0], "Option4")}
      {options4[0] === 1 && Icon(Data[3].alt[0][1], Data[3].image[0][1], removeIcon8, "Option4")}

      {options4[1] === 0 && IconNoCross(Data[3].alt[1][0], Data[3].image[1][0], "Option4")}
      {options4[1] === 1 && Icon(Data[3].alt[1][1], Data[3].image[1][1], removeIcon9, "Option4")}
    </div>
  );
}

export default History;
