import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Game from "./Game";  
import PrivateRoute from "./PrivateRoute";

function App() {
  return(
    <Container className="d-flex align-items-center justify-content-center"
    style={{mineHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/update-profile' element={<UpdateProfile />} />
                <Route path='/game' element={<Game />} />
              </Routes>
          </AuthProvider>
        </Router>
     </div>
    </Container>
  )
}

export default App;