import './App.css';
import React from "react";
import BuildSomething from './component/BuildSomething';
import BuildMouse from './component/BuildMouse';
import BuildKeyboard from './component/BuildKeyboard';
import BuildHeadset from './component/BuildHeadset';
import BuildMousepad from './component/BuildMousepad';
import BuildMicrophone from './component/BuildMicrophone';
import MyBuild from './component/MyBuild';
import { Link, Switch, Route, onChange } from "react-router";
import AppBanner from './component/AppBanner';
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <AppBanner/>
      <Switch>
        <Route path="/BuildSomething">
          <BuildSomething/>
        </Route>
        <Route path="/Build/Mouse">
          <BuildSomething cate="Mouse" url5="Mouse"/>
        </Route>
        <Route path="/Build/Keyboard">
          <BuildSomething cate="Keyboard" url5="Keyboard"/>
        </Route>
        
        {/* <Route path="/BuildSomethingKeyboard">
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
        </Route> */}
        <Route path="/MyBuild">
          <MyBuild/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
