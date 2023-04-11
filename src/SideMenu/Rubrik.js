// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import questionMark from '../icons/question-mark.svg';
import './SideMenu.css';

function Rubrik(name) {
  return (
    <header className="SideMenu-header">
      <p>{name}</p>
      <a href="https://bongo.cat" className="SideMenu-question"><img className="question-image" src={questionMark} alt="question-mark"/></a>
    </header>
  );
}

export default Rubrik;
