import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <ul className="header-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blog</Link>
                </li>
            </ul>
        </>
    )
}

export default Header;