import React, { Component } from 'react';

class Counter extends Component {
  // locali componento busena
  state = {
    count: 1,
    imgUrl: 'https://placeimg.com/200/200/tech',
    colors: [],
  };

  h2ElStyles = {
    background: 'tomato',
    color: 'snow',
    textAlign: 'center',
  };

  renderColors() {
    // if (this.state.colors.length === 0)
    //   return <p className="alert alert-warning">There are no colors left</p>;
      
    return this.state.colors.map((color) => (
      <li key={color} style={{ background: color }} className="list-group-item">
        {color}
      </li>
    ));
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 style={{ fontSize: '2em' }}>I am React counter component</h2>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-warning"> Press me</button>

        <ul className="list-group mt-4">
            {/* Jei kaire salyga true grazinam kas po desine && ... */}
            {this.state.colors.length === 0 && <p className="alert alert-warning">There are no colors left</p>}
            {this.renderColors()}
            </ul>

        <div className="mt-5">
          <img src={this.state.imgUrl} alt="tech" />
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let badgeClasses = 'badge mr-3 badge-';
    badgeClasses += this.state.count === 0 ? 'danger' : 'info';
    return badgeClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Out of stock' : count;
  }
}

export default Counter;
