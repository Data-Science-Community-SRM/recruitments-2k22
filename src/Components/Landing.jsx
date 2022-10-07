import React from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import logo from "../img/Logo.svg";
gsap.registerPlugin(ScrollTrigger);
function Landing() {
    let imgRef = React.useRef(null);
    React.useEffect(()=>{
        gsap.to(imgRef, {
            rotate: 360, 
            duration: 20,
        });
    }, []);
    return (
        <div className="landing">
            <a href="https://www.dscommunity.in"><img src={logo} alt="Data Science Community" ref={el => imgRef=el}/></a>
            <h1>Recruitments 2K22</h1>
            <p>Data Science Community</p>
            <a href="#Apply" className="landing-button">Apply 🚀</a>
        </div>
    )
}
export default Landing;