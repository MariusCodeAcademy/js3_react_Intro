import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Navbar />
        <main className="container mt-3">
          <Counters />
        </main>
      </div>
    );
  }
}

export default App;
