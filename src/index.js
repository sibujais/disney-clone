import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import store from "./app/store";
import { Provider } from "react-redux";

const root=document.getElementById('root');
ReactDOM.render(
  
  <React.StrictMode>
    {/* this is the part of redux */}
    <Provider store={store}> 
      <App/>
    </Provider>
  </React.StrictMode>
  ,root
  
)