import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import { ProductionState } from './context/Production/ProductionState';
import { GenerationState } from './context/Generation/GenerationState';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ProductionState>
      <GenerationState>
        <App />
      </GenerationState>
    </ProductionState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
