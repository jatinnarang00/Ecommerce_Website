import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Context/productcontext';
import { FilterContextProvider } from './Context/filter_context';
import { CartProvider } from './Context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <FilterContextProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
