import React, {Component} from "react";

// components
import {connect} from "react-redux";
import {increment} from "./actions/index";
import {decrement} from "./actions/index";

class Counter extends Component {
  incrementByOne = () => {
    // console.log("incrementing");
    this.props.increment();
  };

  decrementByOne = () => {
    // console.log("decrementing");
    this.props.decrement();
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <div>
          <button onClick={this.incrementByOne}>+</button>
        </div>
        <div>{this.props.value}</div>
        <div>
          <button onClick={this.decrementByOne}>-</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {value: state.value};
};

export default connect(mapStateToProps, {increment, decrement})(Counter);
