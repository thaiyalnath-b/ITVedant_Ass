import React from "react";
import { Navigate } from "react-router-dom";
import "./ProtectedRoute.css";

function ProtectedRoute({ children, isAuthenticated }) {

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

// Use this in app.jsx
// import React, { useState } from "react";
// import ProtectedRoute from "./ITVedant/ProtectedRoute";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// function Dashboard() {
//   return <h2>Welcome to Dashboard (Private Page)</h2>
// }

// function Login({ setAuth }) {
//   return (
//     <div>
//       <h2>Please Login</h2>
//       <button onClick={() => setAuth(true)} className="inner">Login</button>
//     </div>
//   );
// }
// function Logout({ setAuth }) {
//   return (
//     <div>
//       <h2>You are logged out</h2>
//       <button onClick={() => setAuth(false)} className="inner">Login Again</button>
//     </div>
//   );
// }

// function App() {
//   const [isAuthenticated, setAuth] = useState(false);
//   return (
//     <Router>
//       <div className="out">
//         <div className="in">
//           <h1>React Router - Protected Route Example</h1>

//           <nav>
//             <Link to="/login" className="link">Login</Link> | {" "}
//             <Link to="/dashboard" className="link">Dashboard</Link> | {" "}
//             <Link to="/logout" className="link">Logout</Link>
//           </nav>

//           <Routes>
//             <Route path="/login" element={<Login setAuth={setAuth} />}></Route>

//             <Route path="/dashboard"
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }>
//             </Route>

//             <Route path="/logout" element={<Logout setAuth={setAuth} />}></Route>

//             <Route path="*" element={<Navigate to="/login" />}></Route>

//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App