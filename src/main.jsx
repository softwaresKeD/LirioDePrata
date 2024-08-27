import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Importa HashRouter
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HashRouter> {/* Substitui BrowserRouter por HashRouter */}
    <App />
  </HashRouter>
);
