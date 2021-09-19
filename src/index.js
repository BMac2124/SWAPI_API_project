import React from 'react';
import ReactDOM from 'react-dom';
// BrowserRouter has HTML5 History API with methods to keep our application in sync with the URL
// Developers use "as" to declare an ALIAS for BrowserRouter - why? because who wants to out the whole thing? :P
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  // React.Strictmode is there to look for potential errors
  <React.StrictMode>
    <Provider store={store}>
    <Router>
       <App />
    </Router>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();