// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './SideMenu.css';

function Valt(name, link) {
  return (
    <aside className="SideMenu-option">
      <img src={link} className="SideMenu-logo-chosen" alt={name} /> 
      <p>{name}</p>
    </aside>
  );
}

export default Valt;
