import React from 'react';
import {useState} from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import  MainPage  from './pages/MainPage'
import AirportDetailsPage from './pages/AirportDetailsPage';
import AuthPage from './pages/AuthPage';
import Navigation from './components/Navigation';


function App() {


  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path='/' element= {<MainPage />} />
        <Route path='/auth' element= {<AuthPage />}/>
        <Route path='/airport/:id' element= {<AirportDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
