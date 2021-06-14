import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter > 
      <Home/>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
