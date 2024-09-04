import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

// Function that checks if the user is authenticated
const isAuthenticated = () => {
    // Replace with your authentication logic, for instance, checking if a token exists in local storage
    return localStorage.getItem('authToken') !== null;
};

// Custom Route component that checks for authentication
const PrivateRoute = ( children ) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const ProtectedRoutesExample = () => (
    <Router>
        <div>
            <Routes>
                {/* Public route to Login component */}
                <Route path="/login" element={<Login />} />
                {/* Protected route to Dashboard component */}
                <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } 
                />
                {/* Default route to Home component */}
                <Route path="/" element={<h2>Home</h2>} />
            </Routes>
        </div>
    </Router>
);

export default ProtectedRoutesExample;