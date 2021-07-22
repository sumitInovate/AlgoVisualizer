import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Tab from './Tab/Tab';

function App() {
  return (
    <div className="App">
      <Tab></Tab>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
