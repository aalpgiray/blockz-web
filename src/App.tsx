import history from './history';
import logo from './logo.svg';
import React from 'react';
import StatefulComponent from './StatefulComponent';
import { ConnectedRouter } from 'connected-react-router';
import { NavLink, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default hot(module)(App);
