import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

const root = document.getElementById('root');
const rootInstance = createRoot(root);
console.log("working")
rootInstance.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
