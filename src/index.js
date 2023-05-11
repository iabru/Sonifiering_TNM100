import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideMenuOptions from './SideMenu/SideMenuOptions';
import SideMenu from './SideMenu/SideMenu';
import App from './App';
import reportWebVitals from './reportWebVitals';
import History from './History/History.js';
import Play from './Play.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    {/* <SideMenuOptions />
    <History /> */}
    <SideMenu/>
    <Play />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
