import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/auth/Login'
import Register from './pages/auth/register'
import LandingPage from './pages/Main/Landing'
import PromptPage from './pages/Main/PromptPage'

function App() {


  return (
    <>

    {/* <Router basename='/'>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Register />} />
    </Routes>
    </Router> */}
   
<LandingPage />
    </>
 
    
  )
}

export default App
