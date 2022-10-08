import React from "react";
import Logo from "../img/Logo.svg";
import { PopupButton } from "@typeform/embed-react";

function Navbar() {
  return (
    <nav>
      <a href="https://www.dscommunity.in" className="logo">
        <img src={Logo} alt="Data Science Community" />
      </a>
      <ul>
        <li>
          <a href="#domains">Domains</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <PopupButton
            id="gSkbTCDo"
            style={{ fontSize: 15 }}
            className="my-button nav-typform-btn"
          >
            Apply 🚀
          </PopupButton>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
