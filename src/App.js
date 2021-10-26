import './App.css';
import React from "react";
import BuildSomething from './component/BuildSomething';
import BuildMouse from './component/BuildMouse';
import BuildKeyboard from './component/BuildKeyboard';
import BuildHeadset from './component/BuildHeadset';
import BuildMousepad from './component/BuildMousepad';
import BuildMicrophone from './component/BuildMicrophone';
import MyBuild from './component/MyBuild';
import { Switch, Route} from "react-router";
import AppBanner from './component/AppBanner';
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <AppBanner/>
      <Switch>
        <Route path="/BuildSomething">
          <BuildSomething />
        </Route>
        <Route path="/Build/Mouse" exact>
          <BuildMouse cate="Mouse" url="Mouse" page="1"/>
        </Route>
        <Route path="/Build/Keyboard" exact>
          <BuildMouse cate="Keyboard" url="Keyboard" page="1"/>
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
