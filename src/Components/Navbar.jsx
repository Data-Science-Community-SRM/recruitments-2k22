import React from "react";
import Logo from "../img/Logo.svg"
function Navbar(){
    return (
        <nav>
            <a href="https://www.dscommunity.in"><img src={Logo} alt="Data Science Community" /></a>
            <ul>
                <li><a href="#domains">Domains</a></li>
                <li><a href="#domain">Events</a></li>
                <li><a href="#domain">Apply 🚀</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;