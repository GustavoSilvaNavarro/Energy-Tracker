import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import { ProductionState } from './context/Production/ProductionState';
import { GenerationState } from './context/Generation/GenerationState';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

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

serviceWorkerRegistration.register({
  onUpdate: async registration => {
    /**
     * ? Re run code if there is an update in our app
     * ? Details at https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
     */
    if (registration && registration.waiting) {
      /**
       * ? un-register the SW to reload the page and get newest version.
       * ? Allows browser to download the new app and delete old cache
       */
      await registration.unregister();
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
