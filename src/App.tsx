import * as React from 'react';
import './App.css';

import * as logo from './images/woolverine.jpg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          STICH MY BITCH UP, MOTHAFUKKAAAS.
        </p>
      </div>
    );
  }
}

export default App;
