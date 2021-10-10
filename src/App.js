import './App.css';
import React from "react";
import BuildSomething from './component/BuildSomething';
import BuildMouse from './component/BuildMouse';
import BuildKeyboard from './component/BuildKeyboard';
import BuildHeadset from './component/BuildHeadset';
import BuildMousepad from './component/BuildMousepad';
import BuildMicrophone from './component/BuildMicrophone';
import { Switch, Route} from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/BuildSomething">
          <BuildSomething />
        </Route>
        <Route path="/BuildSomethingMouse">
          <BuildMouse />
        </Route>
        <Route path="/BuildSomethingKeyboard">
          <BuildKeyboard/>
        </Route>
        <Route path="/BuildSomethingHeadset">
          <BuildHeadset/>
        </Route>
        <Route path="/BuildSomethingMousepad">
          <BuildMousepad/>
        </Route>
        <Route path="/BuildSomethingMicrophone">
          <BuildMicrophone/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
