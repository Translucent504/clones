import React from 'react';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import WorksWith from './components/WorksWith'
import NoiseLevel from './components/NoiseLevel'
import SwitchDevice from './components/SwitchDevice'
function App() {
  console.log('work smarter, not just harder. Kappa')
  return (
    <>
    <Header/>
    <Intro />
    <WorksWith/>
    <NoiseLevel/>
    <SwitchDevice/>
    </>
  );
}

export default App;
