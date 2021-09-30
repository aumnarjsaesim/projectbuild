import './App.css';
import React from "react";
import BuildSomething from './component/BuildSomething';
import AppBanner from './component/AppBanner';

function App() {
  return (
    <div className="App">
      <AppBanner />
      <BuildSomething />
    </div>
  );
}

export default App;
