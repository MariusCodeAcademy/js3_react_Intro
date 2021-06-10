import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navBar';
import './css/my.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 10 },
      { id: 3, value: 0 },
      { id: 4, value: 11 },
    ],
    navbarColors: {
      dark: 'navbar bg-dark navbar-dark',
      light: 'navbar navbar-light bg-light',
    },
    isNavbarLight: true,
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
    // console.log('plusOrMinus', plusOrMinus);
    // console.log('counter', counter);

    // pasidaryt state.counters kopija
    const countersCopy = [...this.state.counters];

    // surasti kuris counteris parase padinti
    const counterToIncrement = countersCopy.find((c) => c.id === counter.id);

    // kopijoj padidinti value 1
    counterToIncrement.value++;
    this.setState({ counters: countersCopy });

    // niekada nekeiciam state tiesiogiai !!!!!!
    // this.state.count++;

    // let diff = btnId === 'btn_1' ? 1 : -1;

    // this.setState({ value: this.state.value + diff });
  };

  handleNavColors = () => {
    console.log('colors nav');
    const isNavbarLight = !this.state.isNavbarLight;
    this.setState({ isNavbarLight });
  };

  render() {
    const { counters, navbarColors, isNavbarLight } = this.state;
    return (
      <div className="App ">
        <Navbar
          countersCount={counters.length}
          activeCount={counters.filter((c) => c.value > 0).length}
          navColors={isNavbarLight ? navbarColors.light : navbarColors.dark}
        />
        {/* mygtukas invertuoja navbar */}
        <button onClick={this.handleNavColors} className="btn btn-outline-dark">
          Night mode
        </button>
        <main className="container mt-3">
          <Counters
            counters={counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
