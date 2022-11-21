import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Home from './pages/Home';
import Fight from './pages/Fight';
import Join from './pages/Join';
import Kit from './pages/Kit';
import Error from './pages/Error';
import Sources from './pages/Sources';

import AppContext from './context';
import './i18n';

import './styles/fonts.scss';
import './styles/variables.scss';
import './styles/animations.scss';

import './index.scss';

const App = function() {
  const [loaded, setLoaded] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    let language = 'en';

    if (i18n.resolvedLanguage === 'es') {
      language = 'es';
    }

    i18n.changeLanguage(language);
    document.body.dataset.language = language;

    setLoaded(true);
  }, [i18n]);

  const context = {
    enemies: [5, 6, 5, 6, 3, 7, 7, 6, 7, 2, 8]
  }

  return (
    <AppContext.Provider value={context}>
      {loaded &&
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fight/" element={<Fight />} />
            <Route path="/fight/:id" element={<Fight />} />
            <Route path="/join/" element={<Join />} />
            <Route path="/kit/" element={<Kit />} />
            <Route path="/sources/" element={<Sources />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
}
    </AppContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);