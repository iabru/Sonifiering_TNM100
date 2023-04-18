// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './Icon.css';

function IconNoCross(name, link, color) {
  return (
    <div className="chosenOption">
      <img src={link} className="Icon-logo" id={color} alt={name} />
    </div>
  );
}

export default IconNoCross;
