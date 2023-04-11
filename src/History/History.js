// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './History.css';
import Icon from './Icon.js';

function History(name, link) {
  return (
    <div className="History-box">
      {Icon("Sinus", "https://drive.google.com/uc?export=view&id=1u4OQRqRFBMwDeSjbQ_WVQx3EdUe3SYne")}
      {Icon("Sinus", "https://drive.google.com/uc?export=view&id=1u4OQRqRFBMwDeSjbQ_WVQx3EdUe3SYne")}
      {Icon("Sinus", "https://drive.google.com/uc?export=view&id=1u4OQRqRFBMwDeSjbQ_WVQx3EdUe3SYne")}
    </div>
  );
}

export default History;
