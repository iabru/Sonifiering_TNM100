import React, { useState } from 'react';
import './SideMenuOptions.css';
/* 
import Data from './OptionData.json';
*/
import Tab1 from './Tab1.js';
import Tab2 from './Tab2.js';
import Tab3 from './Tab3.js';
import Tab4 from './Tab4.js';

// Local storage magi
localStorage.setItem("tab1Option", JSON.stringify([0, 0]));
localStorage.setItem("tab2Option", JSON.stringify([0, 0, 0]));
localStorage.setItem("tab3Option", JSON.stringify([0, 0]));
localStorage.setItem("tab4Option", JSON.stringify([0, 0]));


// https://www.youtube.com/watch?v=eGaaw1Py2aY&t=335s

const SideMenuOptions = () => {
  const [active, setActive] = useState("Tab1");

  return (
    <div>
      <nav>
        <section className="Option1" onClick={() => setActive("Tab1")} />
        <section className="Option2" onClick={() => setActive("Tab2")} />
        <section className="Option3" onClick={() => setActive("Tab3")} />
        <section className="Option4" onClick={() => setActive("Tab4")} />
      </nav>
      <div>
        {active === "Tab1" && <Tab1 />}
        {active === "Tab2" && <Tab2 />}
        {active === "Tab3" && <Tab3 />}
        {active === "Tab4" && <Tab4 />}
      </div>
    </div>
  );
}

export default SideMenuOptions;