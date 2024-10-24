import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Store from './components/redux/Store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')  
);