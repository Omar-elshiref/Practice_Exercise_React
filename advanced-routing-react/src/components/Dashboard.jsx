import {
  Route,
  Routes,
  Link,
  useMatch
} from "react-router-dom";
import Profile from "./profile";
import Settings from "./settings";

// Dashboard component that contains nested routes
const Dashboard = () => {
    const match = useMatch("/dashboard/*");

    return (
      <>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to={`${match.pathnameBase}/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`${match.pathnameBase}/settings`}>Settings</Link>
          </li>
        </ul>
        <Routes>
          {/* Default route that displays a message */}
          <Route path="/" element={<h3>Please select an option.</h3>} />
          {/* Nested route for Profile */}
          <Route path="profile" element={<Profile />} />
          {/* Nested route for Settings */}
          <Route path="settings" element={<Settings />} />
        </Routes>
      </>
    );
  };
  

export default Dashboard;
