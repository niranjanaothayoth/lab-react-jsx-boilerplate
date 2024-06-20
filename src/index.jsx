import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppClass from "./AppClass";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />   
    {/* Uncomment the below line and comment the above line to switch to AppClass */}
    {/* <AppClass /> */}
  </React.StrictMode>
);
