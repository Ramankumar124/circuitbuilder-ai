import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/auth/Login'
import Register from './pages/auth/register'

function App() {


  return (
    <>
    <Router basename='/'>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Register />} />
    </Routes>
    </Router>
    </>
 
    
  )
}

export default App
