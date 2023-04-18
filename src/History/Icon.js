// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './Icon.css';

function Icon(name, link, removeIcon) {
  return (
    <div className="chosenOption">
      <div className="Icon-cross" onClick={removeIcon}>
        <img src="https://drive.google.com/uc?export=view&id=13YujSwDcp0K8RCFAHvR0YGYNrpPB1Seb" alt="cross" />
      </div>
      <img src={link} className="Icon-logo" alt={name} />
    </div>
  );
}

export default Icon;
