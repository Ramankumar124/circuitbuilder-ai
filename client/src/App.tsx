import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/auth/Login'
import Register from './pages/auth/register'
import Dashboard from './pages/Dashboard/Dashbaord'
import PromptPage from './pages/Main/PromptPage'
function App() {


  return (
    <>


    <Router basename='/'>

    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Register />} />
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/prompt' element ={<PromptPage />}></Route>
    </Routes>

    </Router>

    </>
 
    
  )
}

export default App
