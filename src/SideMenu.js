// How to start react: https://www.youtube.com/watch?v=Rs2BT6HrwMw
import logo from './logo.svg';
import questionMark from './question-mark.svg';
import './SideMenu.css';

function SideMenu() {
  return (
    <div>
      <nav>
        <section className="Option1"></section>
        <section className="Option2"></section>
        <section className="Option3"></section>
        <section className="Option4"></section>
      </nav>
      <article className="SideMenu">
      <header className="SideMenu-header">
        <p>Vågform</p>
        <a href="https://bongo.cat" className="SideMenu-question"><img className="question-image" src={questionMark} alt="question-mark"/></a>
      </header>
      <aside className="SideMenu-option">
        <img src={logo} className="SideMenu-logo" alt="logo" />
        <p>Sinus</p>
      </aside>
      <aside className="SideMenu-option">
        <img src={logo} className="SideMenu-logo" alt="logo" />
        <p>Sågtand</p>
      </aside>
      <aside className="SideMenu-option">
        <img src={logo} className="SideMenu-logo" alt="logo" />
        <p>Triangel</p>
      </aside>
      <aside className="SideMenu-option">
        <img src={logo} className="SideMenu-logo" alt="logo" />
        <p>Fyrkant</p>
      </aside>
    </article>
    </div>
  );
}

export default SideMenu;
