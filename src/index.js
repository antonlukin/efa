import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Fight from './pages/Fight';
import Join from './pages/Join';
import Kit from './pages/Kit';
import Error from './pages/Error';

import AppContext from './context';
import './i18n';

import './styles/fonts.scss';
import './styles/variables.scss';
import './styles/animations.scss';

import './index.scss';

const enemies = [6, 7, 3];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext.Provider value={{enemies: enemies}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fight/" element={<Fight />} />
          <Route path="/fight/:id" element={<Fight />} />
          <Route path="/join/" element={<Join />} />
          <Route path="/kit/" element={<Kit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  </React.StrictMode>
);