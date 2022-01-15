import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import "pages" component here
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  return (
    // define <BrowserRouter> as parent element
    <Router>
      <div>
        {/* Setup navigation here */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* code <Routes> and <Route> below, according to path and component */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
