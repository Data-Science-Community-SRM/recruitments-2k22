import React from "react";
import Logo from "../img/Logo.svg";
import { PopupButton } from "@typeform/embed-react";
import gsap from "gsap";
function Navbar() {
  let navRef = React.useRef(null);
  let tl = React.useRef(null);
  React.useEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(
          navRef,
          { css: { justifyContent: "center", background: "transparent" } },
          {
            css: {
              justifyContent: "space-between",
              background: "#232323",
            },
            scrollTrigger: {
              trigger: navRef,
              start: "top top",
              toggleActions: "play complete reverse reverse",
            },
          }
        )
        .fromTo(
          ".logo",
          { css: { display: "none" } },
          {
            css: { display: "block" },
            scrollTrigger: {
              trigger: navRef,
              start: "top top",
              toggleActions: "play complete reverse reverse",
            },
          }
        );
    });
  });
  return (
    <nav ref={(el) => (navRef = el)}>
      <a href="https://www.dscommunity.in" className="logo">
        <img src={Logo} alt="Data Science Community" />
      </a>
      <ul>
        <li>
          <a href="#focus">Focus</a>
        </li>
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
            className="my-button nav-typform-btn nav-btn"
          >
            Apply 🚀
          </PopupButton>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
