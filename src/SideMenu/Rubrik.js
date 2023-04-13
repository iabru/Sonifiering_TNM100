// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState } from 'react';
import Popup from "./Popup.js";
import questionMark from '../icons/question-mark.svg';
import './SideMenu.css';

function Rubrik(name) {
  const [open, setOpen] = useState(false);

  return (
    <header className="SideMenu-header">
      <p>{name}</p>
      <div onClick={() => setOpen(true)} className="SideMenu-question">
        <img className="question-image" src={questionMark} alt="question-mark"/>
        {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
      </div>
    </header>
  );
}

export default Rubrik;
