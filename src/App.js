import React from 'react';
import './App.css';
import {FcAlarmClock, FcBusinessman, FcBiomass} from 'react-icons/fc';
import Header from './component/head/Header';
import Hero from './component/hero/Hero.jsx';
import Features from './component/features/Features';

const App = () => {
  return (
    <>
      <Header/>
      <Hero />
      <Features />
    </>
  );
};

export default App;