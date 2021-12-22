import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './providers/Auth';
import { AuthContextProvider } from './context/AuthContextProvider'
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);