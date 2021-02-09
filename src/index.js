import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import background from "./img/pexels-danny-meneses-943096.jpg";

library.add(fab)

ReactDOM.render(
  <React.StrictMode>
    <App style={{backgroundImage: `url(${background})`}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
