import React from "react";
import "./Popup.css";
import * as ALL from "../icons/icons.js"

const Popup = ({ title, info, closePopup }) => {

  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }

  return (
    <div className="popup-container">
     <div className="popup-body">
      <div className="cross" onClick={closePopup}>
          <img draggable="false" src={ALL["cross"]} alt="cross" />
        </div>
      <h1>{title}</h1> 
      {/* <p>{info}</p> */}
      <NewlineText text={info} /> 
     </div>
    </div>
  );
}

export default Popup;