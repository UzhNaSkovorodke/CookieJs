import React from "react";
import "./style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    this.dec = this.dec.bind(this);
    this.inc = this.inc.bind(this);
  }

  dec() {
    this.setState(({ count }) => {
      return {
        count: count - 1,
      };
    });
  }
  inc() {
    this.setState(({ count }) => {
      return {
        count: count + 1,
      };
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <div className="counter">{count}</div>
        <button className="btn dec" onClick={this.dec}>
          -
        </button>
        <button className="btn inc" onClick={this.inc}>
          +
        </button>
      </div>
    );
  }
}

export default Form;
