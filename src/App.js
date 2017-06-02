import React, { Component } from 'react'
import update from 'immutability-helper'
import ab from 'autobind-decorator'

@ab
class App extends Component {

  constructor() {
    super();
    this.state = {
      values: ['', '']
    }
  }

  updateValue(index, {target: { value }}) {
    this.setState(update(this.state, {
      values: {
        [index]: {$set: value}
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.values[0]} onChange={this.updateValue.bind(this, 0)} />
        <input value={this.state.values[1]} onChange={this.updateValue.bind(this, 1)} />
      </div>
    );
  }
}

export default App
