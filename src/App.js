import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super();
    this.state = {
      values: []
    }
  }

  updateValue(index, {target: { value }}) {
    console.log(value)
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.values[0]} onChange={this.updateValue.bind(null, 0)} />
        <input value={this.state.values[1]} onChange={this.updateValue.bind(null, 1)} />
      </div>
    );
  }
}

export default App
