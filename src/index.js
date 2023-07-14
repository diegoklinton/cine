import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Footer from './components/footer/footer';
import Home from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Details/:id' element={<Details/>}/>  
      </Routes>
    <Footer/>       
  </BrowserRouter>
);


