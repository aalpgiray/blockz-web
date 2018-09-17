import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { history } from './store';
import { Route, NavLink } from 'react-router-dom';
import StatefulComponent from './StatefulComponent';
import store from './store';

import logo from './logo.svg';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <h3>Hey is Double Counter!!!</h3>
            <NavLink to="/">Home</NavLink>
            <span style={{ margin: '0 10px' }}>|</span>
            <NavLink to="/Counter">Counter</NavLink>
            <Route path="/Counter" component={StatefulComponent} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
