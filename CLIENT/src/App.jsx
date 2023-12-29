
import './App.css'
import {Route, Routes} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';

function App() {

  return (
    <>
     <h1>Hola</h1>
    <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
    </Routes>
    </>
  )
}

export default App
