import React from 'react';
import {connect} from "react-redux";
import {decrement, increment} from "./actions";
import {routeTo} from "./actions/routing";

const App = props => {
  const {counter, decrement, increment} = props;
  console.log('app', props);
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => increment(5)}>+</button>
      <button onClick={() => decrement()}>-</button>
      <span onClick={props.onRouteToHome}>Home</span>
      <span onClick={props.onRouteToHello}>Hello</span>
    </div>
  );
};

function mapState(state) {
  return {counter: state.counter, router: state.router};
}

const actionCreators = dispatch => ({
  decrement: () => dispatch(decrement()),
  increment: (num) => dispatch(increment(num)),
  onRouteToHome: () => dispatch(routeTo('home')),
  onRouteToHello: () => dispatch(routeTo('hello')),
});

const connectedApp = connect(mapState, actionCreators)(App);
export {connectedApp as App};
