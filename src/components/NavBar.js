import React from "react"
import { FaGithub } from "react-icons/fa"
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav__bar">
            <FaGithub className="github-icon"/>
            <h1>My GitHub Portfolio</h1>
        </div>
    )
}

export default NavBar;