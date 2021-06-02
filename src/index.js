import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap";
import './index.css';
import Home from "./Home"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
