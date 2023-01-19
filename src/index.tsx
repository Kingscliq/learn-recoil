import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import CurrencyConverter from './CurrencyConverter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <App /> */}
      <CurrencyConverter />
    </RecoilRoot>
  </React.StrictMode>
);

