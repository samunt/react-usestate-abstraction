import React from 'react';
import Toggler from "./Toggler";
import CounterClass from './CounterClass';
import CounterHooks from './hooks/CounterHooks.js'
function App() {
  return (
    <div className="App">
        <CounterClass/>
        <CounterHooks/>
        <Toggler/>
    </div>
  );
}

export default App;
