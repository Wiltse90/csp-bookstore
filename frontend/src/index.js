import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';


ReactDOM.render(

  
  <Provider store={store}>
  <BrowserRouter>
  <Header />
    <App />
    <Footer/>
  </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);

