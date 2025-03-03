import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/Dashboard/Dashbaord";
import PromptPage from "./pages/Main/PromptPage";
import LandingPage from "./pages/Main/Landingpage";
import SavedProject from "./pages/Main/SavedProject";
import ProtectedRoute from "./protectedRoute/protectedRoute";
import { useAppSelector } from "./redux/hooks/store";
function App() {
  const token: string | null = useAppSelector((state) => state?.auth?.token);
  const isAuthenticated = token ? true : false;

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />

          <Route
            path="*"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<PromptPage />} />
            <Route path="myprojects" element={<SavedProject />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
