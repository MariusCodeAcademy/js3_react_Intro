import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const { countersCount, activeCount } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0">
          <strong>Counter</strong>Anywhere{' '}
          <span className="badge badge-pill badge-primary">
            {countersCount}/{activeCount}
          </span>
        </span>
      </nav>
    );
  }
}
