import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import DetailUser from "./pages/DetailUser";
// import component here

function App() {
  return (
    <Router>
      <div>
        {/* Setup navigation element */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* define Route and component that will 
      render if the URL match by using Switch */}
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/about" element={About} />
        <Route exact path="/profile" element={Profile} />
        <Route exact path="/signin" element={SignIn} />
        {/* define new route */}
        <Route exact path="/users/:id" element={DetailUser} />
      </Routes>
    </Router>
  );
}

export default App;
