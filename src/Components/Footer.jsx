import React from "react";
import logo from "../img/Logo.svg";
import { PopupButton } from "@typeform/embed-react";

function Footer() {
  return (
    <footer>
      <section>
        <a href="https://www.dscommunity.in">
          <img src={logo} alt="Data Science Community" />
        </a>
        <h3>
          <p>Data Science</p>Community SRM
        </h3>
      </section>
      <PopupButton
        id="gSkbTCDo"
        style={{ fontSize: 15 }}
        className="my-button footer-button"
      >
        Apply 🚀
      </PopupButton>
    </footer>
  );
}
export default Footer;
