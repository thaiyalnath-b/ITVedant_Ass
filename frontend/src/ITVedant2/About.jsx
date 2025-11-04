import React from "react";

function About() {
    return (
        <div>
            <h2>About Page</h2>
            <p>This is the About page.</p>
        </div>
    );
}

export default About

// Use it on App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
// import About from "./ITVedant2/About";
// import Team from "./ITVedant2/Team";

// function App() {
//   return (
//     <Router>
//       <div className="out">
//         <div className="in">
//           <h1>React Router Switch Example</h1>

//           <nav>
//             <Link to="/about" className="link">About</Link> | {" "}
//             <Link to="/about/team" className="link">Team</Link>
//           </nav>

//           <hr />

//           <Switch>
//             <Route path="/about/team" Component={Team}></Route>
//             <Route path="/about" Component={About}></Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App
