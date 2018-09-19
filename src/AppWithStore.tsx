import App from './App';
import history from './history';
import React, { Component } from 'react';
import reducers from './store/reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';

const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  )
);

if ((module as any).hot) {
  (module as any).hot.accept('./store/reducers', () => {
    const nextRootReducer = require('./store/reducers/index').default;
    store.replaceReducer(connectRouter(history)(nextRootReducer));
  });
}

export default class AppWithStore extends Component {
  public render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
