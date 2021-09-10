import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ResetStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
