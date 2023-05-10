import './App.css';
import Main from './components/main'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AnimatedRoutes from './components/animated_routes'
import Bio from './components/bio'
import Bio_body from './components/bio_body'
import dp from './img/dp.jpg'
import BioIntro from './components/bio_intro';
import ScrollButton from './components/scroll_button';
import React, { useRef, useState, useEffect } from 'react';
import ScrollUpButton from './components/scroll_up_button';
import ReachOut from './components/reach_out';
import { Route, Routes } from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"

const Person = () => {
  return (
    <>
    <p className="text-center text-green-500">
    Hello World
    </p>
    </>

  )
}

function App() {
  
  const debug = false;
  const config = debug ? {primary: {bg: 'bg-slate-200', bg_2: 'bg-slate-400', bg_3: 'bg-darkRed', bg_4: 'bg-green-100'}} : {primary: {}}


  return <>
  <div className={`bg-lightRose`}>
    <Navbar bg={config} ></Navbar>
    <AnimatedRoutes bg={debug}></AnimatedRoutes>
  </div>
  </>
}

export default App;
