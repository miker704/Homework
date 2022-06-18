import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // your code here
        this.state = { num1: "", num2: "", result: 0 };
        this.getNum1 = this.getNum1.bind(this);
        this.getNum2 = this.getNum2.bind(this);

        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.mult = this.mult.bind(this);
        this.divs = this.divs.bind(this);
        this.modu = this.modu.bind(this);
        this.power = this.power.bind(this);
        this.clear = this.clear.bind(this);


    }

    getNum1(event) {
        event.preventDefault();

        // const num1 = this.state.num1;
        const num1 = event.target.value ? parseInt(event.target.value) : "";
        this.setState({ num1 });
    }
    getNum2(event) {
        event.preventDefault();
        const num2 = event.target.value ? parseInt(event.target.value) : "";
        this.setState({ num2 });

    }

    add(event) {
        event.preventDefault();
        const result = this.state.num1 + this.state.num2;
        this.setState({ result });
    }
    sub(event) {
        event.preventDefault();
        const result = this.state.num1 - this.state.num2;
        this.setState({ result });
    }
    mult(event) {
        event.preventDefault();
        const result = this.state.num1 * this.state.num2;
        this.setState({ result });
    }
    divs(event) {
        event.preventDefault();
        const result = this.state.num1 / this.state.num2;
        this.setState({ result });
    }

    modu(event) {
        event.preventDefault();
        const result = this.state.num1 % this.state.num2;
        this.setState({ result });
    }

    power(event) {
        event.preventDefault();
        const result = this.state.num1 ** this.state.num2;
        this.setState({ result });
    }

    clear(event) {
        event.preventDefault();
        this.setState({ num1: "", num2: "", result: 0 });
    }

    // your code here

    render() {
        const { num1, num2, result } = this.state;
        return (
            <div>
                <h1>Hello World</h1>
                <h1>{this.state.result}</h1>
                <br />
                <input onChange={this.getNum1} value={num1} />
                <input onChange={this.getNum2} value={num2} />
                <button onClick={this.clear}>clear</button>
                <br />
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mult}>*</button>
                <button onClick={this.divs}>/</button>
                <button onClick={this.modu}>x%y</button>
                <button onClick={this.power}>x^y</button>

            </div>
        );
    }
}

export default Calculator;