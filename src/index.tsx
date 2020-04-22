import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import './index.css';
require('react-hot-loader/patch');

type NodeModuleWithHot = NodeModule & {
  hot: { accept: (path?: string, callback?: () => void) => void };
  dispose: { accept: (path?: string, callback?: () => void) => void };
};

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if ((module as NodeModuleWithHot).hot) {
  console.log((module as NodeModuleWithHot).hot);
  (module as NodeModuleWithHot).hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
