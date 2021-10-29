import './App.css';
import React from "react";
import BuildSomething from './component/BuildSomething';
// import BuildMouse from './component/BuildMouse';
// import BuildKeyboard from './component/BuildKeyboard';
// import BuildHeadset from './component/BuildHeadset';
// import BuildMousepad from './component/BuildMousepad';
// import BuildMicrophone from './component/BuildMicrophone';
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
          <BuildSomething cate="Mouse" url="Mouse"/>
        </Route>
        <Route path="/Build/Keyboard">
          <BuildSomething cate="Keyboard" url="Keyboard"/>
        </Route>
        <Route path="/Build/Headset">
          <BuildSomething cate="Headset" url="Headset"/>
        </Route>
        <Route path="/Build/Mousepad">
          <BuildSomething cate="Mousepad" url="Mousepad"/>
        </Route>
        <Route path="/Build/Microphone">
          <BuildSomething cate="Microphone" url="Microphone"/>
        </Route>
        
        <Route path="/MyBuild">
          <MyBuild/>
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
