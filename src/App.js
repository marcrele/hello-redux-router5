import React from 'react';
import {connect} from "react-redux";
import {decrement, increment} from "./actions";
import {Link} from "react-router5";

const App = props => {
  const {counter, decrement, increment} = props;
  console.log('app', props);
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => increment(5)}>+</button>
      <button onClick={() => decrement()}>-</button>
      <Link routeName="hello">hello</Link>
      <Link routeName="home">home</Link>
      {/*<button onClick={router.navigate('hello')}>hello</button>*/}
      {/*<button onClick={router.navigate('home')}>home</button>*/}
    </div>
  );
};

function mapState(state) {
  return {counter: state.counter, router: state.router};
}

const actionCreators = {
  decrement: decrement,
  increment: increment
};

const connectedApp = connect(mapState, actionCreators)(App);
export {connectedApp as App};
