import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logged from './Logged';
import Specified from './Specified';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route  path="" element={<App/>}/>
      <Route  path="logged" element={<Logged/>}/>
      <Route  path="specified" element={<Specified/>}/>
  </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
