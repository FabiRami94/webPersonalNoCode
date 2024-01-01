
import './App.css'
import {Route, Routes} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';
import PhotoshopPage from './views/PhotoshopPage/PhotoshopPage.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/photoshop' element={<PhotoshopPage></PhotoshopPage>}></Route>
      </Routes>
    </>
  )
}

export default App
