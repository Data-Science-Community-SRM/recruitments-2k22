import React from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import logo from "../img/Logo.svg";
gsap.registerPlugin(ScrollTrigger);
function Landing() {
    let landingRef = React.useRef(null);
    let tl = React.useRef(null);
    React.useEffect(()=>{
        gsap.context(()=>{
            gsap.set("#logo", {rotate: 360})
            tl.current = gsap.timeline()
                         .from("#logo", {rotate: 0, duration: 10, repeat: -1, ease: "none"})
                         .fromTo(".content", {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: .5, stagger: 0.1}, "<1");
        }, landingRef);
    }, []);
    return (
        <div className="landing" ref={el => landingRef=el}>
            <a className="content" href="https://www.dscommunity.in"><img src={logo} alt="Data Science Community" id="logo" /></a>
            <h1 className="content">Recruitments 2K22</h1>
            <p className="content">Data Science Community</p>
            <a href="#Apply" className="landing-button content">Apply 🚀</a>
        </div>
    )
}
export default Landing;