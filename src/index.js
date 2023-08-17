import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './context/Context';
import { ItemProvider } from './context/IitemContext/UseItemContext';
import SearchProvider from './context/searchContext/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <ItemProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ItemProvider>
    </Context>
  </React.StrictMode>
);

