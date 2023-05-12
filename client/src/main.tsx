import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataContextProvider } from './context/DataContext';
import './index.css';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(app);