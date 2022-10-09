import React from "react";
import Logo from "../img/Logo.svg";
import { PopupButton } from "@typeform/embed-react";
import gsap from "gsap";
function Navbar() {
  let navRef = React.useRef(null);
  let tl = React.useRef(null);
  React.useEffect(()=>{
    gsap.context(()=>{
      tl.current = gsap
      .timeline()
      .fromTo(navRef, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0, duration: 1, delay: .5})
      .fromTo(navRef, {css: {justifyContent: "center", background: "none"}}, {
         css: {
           justifyContent: "space-between",
           background: "#232323",
         },
         duration: 1,
         scrollTrigger: {
           trigger: navRef,
           start: "center top",
           toggleActions: "play none reverse none",
         }
      })
      .fromTo(".logo", {css:{display: "none"}}, {
       css:{display: "block"},
       scrollTrigger: {
         trigger: navRef,
         start: "center top",
         toggleActions: "play none reverse none",
      }
      })
    })
  })
  return (
    <nav ref={el => navRef=el}>
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
