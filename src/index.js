import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Fight from './pages/Fight';
import Uniform from './pages/Uniform';

import './styles/fonts.scss';
import './styles/variables.scss';
import './styles/animations.scss';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fight/" element={<Fight />} />
        <Route path="/uniform/" element={<Uniform />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);