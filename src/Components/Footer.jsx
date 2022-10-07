import React from "react";
import logo from "../img/Logo.svg";
function Footer(){
    return (
        <footer>
            <section>
                <a href="https://www.dscommunity.in"><img src={logo} alt="Data Science Community" /></a>
                <h3><p>Data Science</p>Community SRM</h3>
            </section>
            <a href="#Apply" className="footer-button">Apply 🚀</a>
        </footer>
    );
}
export default Footer;