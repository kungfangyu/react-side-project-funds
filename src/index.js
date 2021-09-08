/*
 * @Date: 2021-07-04 18:23:39
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-07 20:02:24
 * @FilePath: /website-funds/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);