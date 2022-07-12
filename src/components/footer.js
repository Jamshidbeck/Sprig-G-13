import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
} from "react-router-dom";
import logoF from "../asets/Azimjon/logo1.png";
import facebook from "../asets/Azimjon/Vector (2).png";
import linkedin from "../asets/Azimjon/Vector (3).png";
import twitter from "../asets/Azimjon/Vector (4).png";
export function Footer() {
    return (
        <Router>
            <footer>
                <div className="box-container">
                    <div className="logoF">
                        <img src={logoF} alt="" />
                    </div>
                    <div className="box">

                        <p>Product</p>
                        <NavLink to="/">Microsurveys</NavLink>
                        <NavLink to="/">Video Questions</NavLink>
                        <NavLink to="/">Concept Testing</NavLink>
                        <NavLink to="/">Contextual Targeting</NavLink>
                        <NavLink to="/">Text Analysis</NavLink>
                        <NavLink to="/">Integrations</NavLink>
                        <NavLink to="/">Plans</NavLink>
                    </div>

                    <div className="box">
                        <p>Customer Stories</p>
                        <NavLink to="/">Square</NavLink>
                        <NavLink to="/">Codecademy</NavLink>
                        <NavLink to="/">Nova Credit</NavLink>
                        <NavLink to="/">Chipper</NavLink>
                        <NavLink to="/">Plann</NavLink>
                        <NavLink to="/">ProGuides</NavLink>
                        <NavLink to="/">Shift</NavLink>
                    </div>

                    <div className="box">
                        <p></p>
                        <NavLink to="/"></NavLink>
                        <NavLink to="/"></NavLink>
                        <NavLink to="/"></NavLink>
                        <NavLink to="/"></NavLink>
                        <NavLink to="/"></NavLink>
                        <NavLink to="/"></NavLink>
                        <NavLink to="/"></NavLink>
                    </div>

                    <div className="box">
                        <p>Company</p>
                        <NavLink to="/">About Us</NavLink>
                        <NavLink to="/">Careers</NavLink>
                        <NavLink to="/">Terms of Service</NavLink>
                        <NavLink to="/">Privacy Policy</NavLink>
                        <NavLink to="/">Data Processing Addendum</NavLink>
                    </div>

                    <div className="box">
                        <p>Resources</p>
                        <NavLink to="/">Blog</NavLink>
                        <NavLink to="/">Template Gallery</NavLink>
                        <NavLink to="/">Podcast</NavLink>
                        <NavLink to="/">Documentation</NavLink>
                        <NavLink to="/">Security</NavLink>
                    </div>

                </div>

                <div className="bottom">
                    <div className="left">
                        <p>Copyright © 2022 Sprig. All Rights Reserved.</p>
                    </div>
                    <div className="right">

                        <div className="icon">
                            <img src={facebook} alt="" />
                        </div>

                        <div className="icon">
                            <img src={linkedin} alt="" />

                        </div>

                        <div className="icon">
                            <img src={twitter} alt="" />

                        </div>

                    </div>
                </div>
            </footer>
        </Router>
    )
}