// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './Icon.css';

function Icon(name, link, removeIcon, color,key) {
  return (
    <div className="chosenOption" key={key}>
      <div className="Icon-cross" onClick={removeIcon}>
        <img className="cross-image" src="https://drive.google.com/uc?export=view&id=13YujSwDcp0K8RCFAHvR0YGYNrpPB1Seb" alt="cross" />
      </div>
      <img src={link} className="Icon-logo" id={color} alt={name} />
    </div>
  );
}

export default Icon;
