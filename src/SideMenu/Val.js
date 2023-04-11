// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './SideMenu.css';

function Val(name, link, setOption) {
  return (
    <aside className="SideMenu-option">
      <img src={link} className="SideMenu-logo" alt={name} /> 
      <p>{name}</p>
    </aside>
  );
}

export default Val;
