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

  handleReset = () => {
    console.log('Reset please');
    //gauti busena kuri yra counters kopija kurioje visi value: 0
    const nunulinta = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    console.log(nunulinta);
    // gave nustatom busena // patikrinam ar veikia
    this.setState({ counters: nunulinta });
  };

  // arrow funkcija nekuria savo this
  handleIncrement = (plusOrMinus, counter) => {
    console.log('plusOrMinus', plusOrMinus);
    console.log('counter', counter);
    // niekada nekeiciam state tiesiogiai !!!!!!
    // this.state.count++;

    // let diff = btnId === 'btn_1' ? 1 : -1;

    // this.setState({ value: this.state.value + diff });
  };

  render() {
    return (
      <div>
        <h2>Counters component</h2>
        <button onClick={this.handleReset} className="btn btn-sm btn-warning">
          Reset counters
        </button>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
