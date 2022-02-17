import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logged from './Logged';
import Specified from './Specified';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  <Router>
    <Routes>
      <Route  path="" element={<App/>}/>
      <Route  path="logged" element={<Logged/>}/>
      <Route  path="specified" element={<Specified/>}/>
  </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
