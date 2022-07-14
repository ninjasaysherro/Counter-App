import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmounted');
  }

  render() {
    console.log('Counter - Rendered');
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onRemove(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'success';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? '0' : value;
  }
}

export default Counter;
