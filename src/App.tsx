import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Observer } from 'mobx-react';
import UserStore from './state/stores/UserStore';

interface PropTypes {
  store: UserStore
}

const App = (props: PropTypes) => (
  <Observer>
    {() => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome {props.store.userName}!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )}
  </Observer>
);

export default App;
