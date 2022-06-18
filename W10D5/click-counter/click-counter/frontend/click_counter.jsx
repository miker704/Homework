import React from 'react';
import Counts from './counts'
import MaxCounts from './maxCounts';


class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, previousCounts: [], max: 0 };

    this.click = this.click.bind(this);
    this.reset = this.reset.bind(this);
    this.maxCount = this.maxCount.bind(this);
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  reset(event) {
    event.preventDefault();
    const previousCounts = this.state.previousCounts;
    previousCounts.push(this.state.count);
    this.setState({ count: 0, previousCounts });
  }

  maxCount(event) {
    event.preventDefault();
    let previousCounts = this.state.previousCounts;
    let max = this.state.max;
    let x = Math.max(...previousCounts);
    max = x;
    console.log("max: "+ max);
    this.setState({ max });
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>CLICK ME!!!</button>
        <span>{this.state.count}</span>
        <br />
        <button onClick={this.reset}>Reset!</button>
        <Counts previousCounts={this.state.previousCounts} />
        <br />
        <button onClick={this.maxCount}>maxCount!</button>
        <MaxCounts max={this.state.max} />
        <br />
      </div>
    );
  }
}

export default ClickCounter;