import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Web3 from "web3/dist/web3.min.js";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "./hooks/useMetaMask";


function getLibrary(provider, connector) {
  return new Web3(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
