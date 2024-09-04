import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
// import Login from "./Login";

const NestedRoutesExample = () => (
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
      <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
        {/* Default route to Home component */}
        <Route path='/' element={<h2>Home</h2>} />
        {/* Route to Dashboard component */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
);

export default NestedRoutesExample;
