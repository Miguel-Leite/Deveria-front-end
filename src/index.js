import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import About from './pages/About'
import Course from './pages/Course';
import Module from './pages/Module';
import Login from './pages/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/cursos" element={<Course />} />
      <Route path="/modulos" element={<Module />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);