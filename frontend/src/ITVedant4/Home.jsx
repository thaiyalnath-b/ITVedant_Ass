import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="out">
            <div className="co">
                <h2>Welcome to the Home Page</h2>

                <div className="in">
                    <Link to="/login" className="li">Login</Link> | {" "}
                    <Link to="/dashboard" className="lis">Dashboard</Link>
                </div>
            </div>
        </div>
    );
}

export default Home


// Use this in App.jsx

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./ITVedant4/Home";
// import Login from "./ITVedant4/Login";
// import Dashboard from "./ITVedant4/Dashboard";
// import "./ITVedant4/Styles.css"

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <nav className="navbar">
//                     <Link to="/" className="l">Home</Link> | {" "}
//                     <Link to="/login" className="l">Login</Link> | {" "}
//                     <Link to="/dashboard" className="l">Dashboard</Link>
//                 </nav>

//                 <Routes>
//                     <Route path="/" element={<Home />}></Route>
//                     <Route path="/login" element={<Login />}></Route>
//                     <Route path="/dashboard" element={<Dashboard />}></Route>
//                 </Routes>
//             </div>
//         </Router>
//     )
// }


// export default App