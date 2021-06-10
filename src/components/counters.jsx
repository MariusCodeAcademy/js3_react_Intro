import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 10 },
      { id: 3, value: 1 },
      { id: 4, value: 11 },
    ],
  };

  handleDelete = (idToDelete) => {
    // gauti state busena be to el kuris buvo paspaustas
    const countersWihtoutOne = this.state.counters.filter((c) => c.id !== idToDelete);
    // console.log(countersWihtoutOne);
    // nustatyti nauja busena su setState()
    this.setState({ counters: countersWihtoutOne });
    // console.log('whichOneClicked', idToDelete);
  };

  render() {
    return (
      <div>
        <h2>Counters component</h2>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            value={c.value}
            id={c.id}
            oId="blue"
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
