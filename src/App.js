import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import BacktrackingVisualizer from './BacktrackingVisualizer/BacktrackingVisualizer';
import Tab from './Tab/Tab';
import Home from './Home/Home';
import Theory from './Theory/Theory';
import Forum from './Forum/Forum';
import DynamicProgramVisualizer from './DynamicProgramVisualizer/DynamicProgramVisualizer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tab />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/theory' element={<Theory />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/path-visual' element={<PathfindingVisualizer />} />
          <Route path='/sort-visual' element={<SortingVisualizer />} />
          <Route path='/backtrack-visual' element={<BacktrackingVisualizer />} />
          <Route path='/dynamic-visual' element={<DynamicProgramVisualizer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
