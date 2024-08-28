import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Listas from './components/listas';
import Arboles from './components/arboles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ textAlign: 'center' }}>
      <Listas />
      <Arboles />
    </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


