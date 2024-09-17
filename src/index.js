import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoF from './TodoF';
import TodoC from './TodoC';
import TodoFLocal from './TodoFLocal';
import TodoCLocal from './TodoCLocal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoF /> */}
    <TodoFLocal/>
    {/* <TodoC /> */}
    {/* <TodoCLocal/> */}
  </React.StrictMode>
);

reportWebVitals();


