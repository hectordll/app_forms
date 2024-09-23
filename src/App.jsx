import "./App.css";
import LoginBtn from "./components/LoginBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div>
        <Navbar />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <LoginBtn />
        )}
      </div>
    </Router>
  );
};

export default App;