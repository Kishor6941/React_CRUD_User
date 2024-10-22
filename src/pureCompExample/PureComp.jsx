import { Component } from "react";
import PureCompChild from "./PureCompChild";

class PureComp extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      name: "Kishor",
    };
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeName() {
    this.setState({
      name: "Kishor phawade",
    });
  }

  render() {
    return (
      <div
        className="col-md-6 w-50 m-auto mt-5 text-center pb-5 pt-2"
        style={{ border: "1px solid lightgray" }}
      >
        <div>
          <h1>Pure Component Counter {this.state.counter}</h1>
          <button
            className="btn btn-primary"
            onClick={() => this.increaseCounter()}
          >
            Set Counter
          </button>{" "}
          <button className="btn btn-dark" onClick={() => this.changeName()}>
            Set Name
          </button>
        </div>
        <div>
          <PureCompChild name={this.state.name} />
        </div>
      </div>
    );
  }
}

export default PureComp;
