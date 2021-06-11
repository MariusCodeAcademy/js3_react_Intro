import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  componentDidMount() {
    console.log('CounterSSS - did mount');
  }

  render() {
    console.log('CounterSSS - render');
    const { onDelete, onIncrement, onReset, counters } = this.props;

    return (
      <div>
        <h2>Counters component</h2>
        <button onClick={onReset} className="btn btn-sm btn-warning">
          Reset counters
        </button>
        {counters.map((c) => (
          <Counter key={c.id} counter={c} onIncrement={onIncrement} onDelete={onDelete}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
