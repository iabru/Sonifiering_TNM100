// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './SideMenu.css';
import * as ALL from "../icons/icons.js"

function Val(name, link) {
  return (
    <aside className="SideMenu-option">
      <img draggable="false" src={ALL[link]} className="SideMenu-logo" alt={name} />
      <p>{name}</p>
    </aside>
  );
}

export default Val;
