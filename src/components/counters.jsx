import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Counters component</h2>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;
