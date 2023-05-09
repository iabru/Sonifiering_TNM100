// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './Icon.css';
import * as ALL from "../icons/icons.js"

function Icon(name, link, removeIcon, color,key) {
  return (
    <div className="chosenOption" key={key}>
      <div className="Icon-cross" onClick={removeIcon}>
        <img draggable="false" className="cross-image" src={ALL["cross"]} alt="cross" />
      </div>
      <img draggable="false" src={ALL[link]} className="Icon-logo" id={color} alt={name} />
    </div>
  );
}

export default Icon;
