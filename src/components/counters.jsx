import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters - Rendered');
    const { onAdd, onReset, counters, onRemove, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-warning btn-sm m-2">
          Reset All
        </button>
        <button
          onClick={() => this.props.onAdd(this.props.counters)}
          className="btn btn-primary btn-sm m-2"
        >
          Add Counter
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onRemove={onRemove}
            onIncrement={onIncrement}
            onAdd={onAdd}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
