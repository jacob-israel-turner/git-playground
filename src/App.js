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
      result: null,
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

  equals() {
    const result = eval(`${Number(this.state.values[0])} ${operators[this.state.operatorIndex]} ${Number(this.state.values[1])}`)
    console.log('RESULT', result)
    this.setState({result})
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.values[0]} onChange={this.updateValue.bind(this, 0)} />
        <select value={this.state.operatorIndex} onChange={this.handleOperatorChange}>
          {this.renderOperators(operators)}
        </select>
        <input value={this.state.values[1]} onChange={this.updateValue.bind(this, 1)} />
        <button onClick={this.equals}> = </button>
        <br />
        {!!this.state.result && <p>{this.state.result}</p>}
      </div>
    );
  }
}

export default App
