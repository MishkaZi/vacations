import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './store/store';

import './index.css';
import App from './Components/Layout/App/App';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <App />,
  document.getElementById('root')
);
