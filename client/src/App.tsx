import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/auth/Login'
import Register from './pages/auth/register'
import Dashboard from './pages/Dashboard/Dashbaord'
function App() {


  return (
    <>

   <Router basename='/'>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Register />} />
      <Route path='/' element={<Dashboard />}></Route>
    </Routes>
    </Router> 
   
{/* <LandingPage /> */}
    </>
 
    
  )
}

export default App
