import React from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";


function UserProfile() {
    const { id } = useParams();

    return (
        <div className="inner">
            <h2>User Profile</h2>
            <p>This is the profile page for user ID: <strong>{id}</strong></p>
        </div>
    );
}

export default UserProfile;





// Use it on App.jsx 
// import React from "react"
// import UserProfile from "./ITVedant/UserProfile";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// inside the return

{/* <Router>
      <div className="out">
        <div className="in">
          <h1>User Profiles</h1>

          <nav>
            <Link to="/user/1" className="link">User 1</Link> | {" "}
            <Link to="/user/2" className="link">User 2</Link> | {" "}
            <Link to="/user/3" className="link">User 3</Link>
          </nav>

          <Routes>
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router> */}