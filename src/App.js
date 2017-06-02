import React, { Component } from 'react'
import update from 'immutability-helper'
import ab from 'autobind-decorator'

const operators = ['+', '-', '*', '%', '/']

@ab
class App extends Component {

  constructor() {
    super();
    this.state = {
      values: ['', ''],
      operatorIndex: 0,
    }
  }

  updateValue(index, {target: { value }}) {
    this.setState(update(this.state, {
      values: {
        [index]: {$set: value}
      }
    }))
  }

  renderOperators(ops) {
    return ops.map((op, index) => {
      return <option value={index} key={index}>{op}</option>
    })
  }

  handleOperatorChange({target: {value: index}}) {
    this.setState({operatorIndex: Number(index)})
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.values[0]} onChange={this.updateValue.bind(this, 0)} />
        <input value={this.state.values[1]} onChange={this.updateValue.bind(this, 1)} />

        <select value={this.state.operatorIndex} onChange={this.handleOperatorChange}>
          {this.renderOperators(operators)}
        </select>
      </div>
    );
  }
}

export default App
