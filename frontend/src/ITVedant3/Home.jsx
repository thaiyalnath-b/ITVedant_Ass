import React from "react";

function Home() {
    return (
        <div>
            <h2>Welcome to Home Page</h2>
        </div>
    );
}

export default Home

// use it on App.jsx
// import React from "react";
// import Home from "./ITVedant3/Home";
// import About from "./ITVedant3/About";
// import Services from "./ITVedant3/Services";
// import Contact from "./ITVedant3/Contact";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./ITVedant3/Styles.css"

// function App() {
//     return (
//         <Router>
//             <div>
//                 <nav className="navbar">
//                     <h1>Flash Website</h1>
//                     <ul>
//                         <li><Link to="/" className="li">Home</Link></li>
//                         <li><Link to="/about" className="li">About</Link></li>
//                         <li><Link to="/services" className="li">Services</Link></li>
//                         <li><Link to="/contact" className="li">Contact</Link></li>
//                     </ul>
//                 </nav>

//                 <div className="content">
//                     <Routes>
//                         <Route path="/" element={<Home />}></Route>
//                         <Route path="/about" element={<About />}></Route>
//                         <Route path="/services" element={<Services />}></Route>
//                         <Route path="/contact" element={<Contact />}></Route>
//                     </Routes>
//                 </div>
//             </div>
//         </Router>
//     );
// }

// export default App