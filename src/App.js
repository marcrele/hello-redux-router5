import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loaded);
  const dispatchIt = useDispatch();

  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => dispatchIt(increment(5))}>+</button>
      <button onClick={() => dispatchIt(decrement())}>-</button>
      {loggedIn ? <h3>Schouldn't see</h3> : ''}
    </div>
  );
}

export default App;
