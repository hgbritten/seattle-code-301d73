import React from 'react';
import Parent from './parent.js';
// import '.././states-and-props/src/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>State and Props</h1>
        <Parent />
      </div>
    );
  }
}

export default App;
