
import './App.css'
import {Route, Routes} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/Photoshop'></Route>
      </Routes>
    </>
  )
}

export default App
