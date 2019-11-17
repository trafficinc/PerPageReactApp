import React, { Component } from "react";
import Counters from "./Counters.jsx";

class CounterApp extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    //console.log("App - contructor");
    //this.state = this.props.something;
  }

  componentDidMount() {
    // ajax calls
    //setState data from server
    //console.log("App - Mounted");
  }

  handleIncrement = counter => {
    // ... clone, array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    // get counters that are NOT the current counterId, .filter
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    //console.log("App - Rendered");

    return (
      <React.Fragment>
        <div>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CounterApp;
