import React from "react";
import gsap from "gsap";
import logo from "../img/Logo.svg";
function Landing() {
    let imgRef = React.useRef(null);
    React.useEffect(()=>{
        gsap.from(imgRef, {rotate: 0, duration: 10});
        gsap.to(imgRef, {rotate: 360});
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