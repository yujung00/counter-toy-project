import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./containers/App";

//Redux관련 불러오기
import {createStore} from 'redux';
import reducers from './modules';
import {Provider} from "react-redux";

// store 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App/>
  </Provider>
);

