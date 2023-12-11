import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App.js';
import Header from './components/header/Header.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
