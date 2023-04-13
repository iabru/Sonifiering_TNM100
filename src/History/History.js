// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import './History.css';
import Icon from './Icon.js';
import Data from '../SideMenu/OptionData.json';

function History() {
  // Get current options from the local storage for each tab
  const options1 = JSON.parse(localStorage.getItem("tab1Option"));
  const options2 = JSON.parse(localStorage.getItem("tab2Option"));
  const options3 = JSON.parse(localStorage.getItem("tab3Option"));
  const options4 = JSON.parse(localStorage.getItem("tab4Option"));

  return (
    <div className="History-box">
      {Icon(Data[0].alt[0][options1[0]], Data[0].image[0][options1[0]])}
      {Icon(Data[0].alt[1][options1[1]], Data[0].image[1][options1[1]])}

      {Icon(Data[1].alt[0][options2[0]], Data[1].image[0][options2[0]])}
      {Icon(Data[1].alt[1][options2[1]], Data[1].image[1][options2[1]])}
      {Icon(Data[1].alt[2][options2[2]], Data[1].image[2][options2[2]])}

      {Icon(Data[2].alt[0][options3[0]], Data[2].image[0][options3[0]])}
      {Icon(Data[2].alt[1][options3[1]], Data[2].image[1][options3[1]])}

      {Icon(Data[3].alt[0][options4[0]], Data[3].image[0][options4[0]])}
      {Icon(Data[3].alt[1][options4[1]], Data[3].image[1][options4[1]])}
    </div>
  );
}

export default History;
