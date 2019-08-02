import React from 'react';
import {connect} from "react-redux";
import {decrement, increment} from "./actions";

const App = props => {
  const {counter, decrement, increment} = props;
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => increment(5)}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

function mapState(state) {
  return {counter: state.counter};
}

const actionCreators = {
  decrement: decrement,
  increment: increment
};

const connectedApp = connect(mapState, actionCreators)(App);
export {connectedApp as App};
