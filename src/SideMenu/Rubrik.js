// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import React, { useState } from 'react';
import Popup from "./Popup.js";
import questionMark from '../icons/question-mark.svg';
import './SideMenu.css';

function Rubrik(name, information) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="SideMenu-header">
      <p>{name}</p>
      <div onClick={togglePopup} className="SideMenu-question">
        <img className="question-image" src={questionMark} alt="question-mark"/>
        {showPopup && <Popup title={name} info={information} closePopup={togglePopup} />}
      </div>
    </header>
  );
}

export default Rubrik;
