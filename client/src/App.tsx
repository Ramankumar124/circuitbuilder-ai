import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/auth/Login'
import Register from './pages/auth/register'
import Dashboard from './pages/Dashboard/Dashbaord'
import PromptPage from './pages/Main/PromptPage'
import LandingPage from './pages/Main/Landingpage'
import SavedProject from './pages/Main/SavedProject'  
function App() {


  return (
    <>

    <Router basename='/' >

    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Register />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='home' element={<PromptPage />} />
      <Route path='myProjects'  element={<SavedProject/>}/>
    </Routes>

    </Router>


    </>
 
    
  )
}

export default App
