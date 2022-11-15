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

const context = {
  enemies: [5, 6, 5, 6, 3, 7, 7, 6, 7, 2, 8]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext.Provider value={context}>
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
);