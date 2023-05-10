// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './Icon.css';
import * as ALL from "../icons/icons.js"

function IconNoCross(name, link, color,key) {
  return (
    <div className="chosenOption" key={key}>
      <img draggable="false" src={ALL[link]} className="Icon-logo" id={color} alt={name} />
    </div>
  );
}

export default IconNoCross;
