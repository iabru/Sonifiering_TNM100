import React from "react";
import "./Popup.css";

const Popup = ({ title, info, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <div className="cross" onClick={closePopup}>
          <img src="https://drive.google.com/uc?export=view&id=13YujSwDcp0K8RCFAHvR0YGYNrpPB1Seb" alt="cross" />
        </div>
      <h1>{title}</h1> 
      <p>{info}</p> 
     </div>
    </div>
  );
}

export default Popup;