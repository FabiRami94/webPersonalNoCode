
import './App.css'
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PhotoshopPage from './views/PhotoshopPage/PhotoshopPage.jsx';
import FigmaXDPage from './views/Figma-XDPage/Figma-XDPage.jsx';
import WordpressPage from './views/WordpressPage/WordpressPage.jsx';
import IllustratorPage from './views/IllustratorPage/IllustratorPage.jsx';
import Inicio from './views/Inicio/Inicio.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/figmaxd' element={<FigmaXDPage></FigmaXDPage>}></Route>
        <Route path='/wordpress' element={<WordpressPage></WordpressPage>}></Route>
        <Route path='/photoshop' element={<PhotoshopPage></PhotoshopPage>}></Route>
        <Route path='/illustrator' element={<IllustratorPage></IllustratorPage>}></Route>
      </Routes>
    </>
  )
}

export default App
