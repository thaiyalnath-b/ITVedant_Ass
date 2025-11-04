import React from "react";

function Home() {
    return (
        <div className="out">
            <h2>Welcome to the Home Page</h2>
        </div>
    );
}

export default Home;



// use in App.jsx

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./ITVedant5/Home";
// import About from "./ITVedant5/About";
// import Contact from "./ITVedant5/Contact";
// import "./ITVedant5/Styles.css"

// function App() {
//     return (
//         <Router>
//             <div className="in">
//                 <h1>Router configuration</h1>
//                 <nav>
//                     <Link to="/" className="li">Home</Link> | {" "}
//                     <Link to="/about" className="li">About</Link> | {" "}
//                     <Link to="/contact" className="li">Contact</Link>
//                 </nav>

//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                 </Routes>
//             </div>
//         </Router>
//     )
// }

// export default App