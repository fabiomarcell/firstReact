import React, { Component } from 'react';
import {Link}  from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>This is a Menu!</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </header>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
