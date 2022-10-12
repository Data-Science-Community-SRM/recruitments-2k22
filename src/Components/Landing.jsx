import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../img/Logo.svg";
import { PopupButton } from "@typeform/embed-react";
import Clock from "./Clock";
gsap.registerPlugin(ScrollTrigger);
function Landing() {
  const [days, setDays] = React.useState();
  const [hours, setHours] = React.useState();
  const [minutes, setMinutes] = React.useState();
  const [seconds, setSeconds] = React.useState();
  let interval;
  const startTimer = () => {
    const countDownDate = new Date("October 24, 2022").getTime();
    interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = countDownDate - currentDate;
      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  React.useEffect(() => {
    startTimer();
  });
  let landingRef = React.useRef(null);
  let tl = React.useRef(null);
  React.useEffect(() => {
    gsap.context(() => {
      gsap.set("#logo", { rotate: 360 });
      tl.current = gsap
        .timeline()
        .from("#logo", { rotate: 0, duration: 10, repeat: -1, ease: "none" })
        .fromTo(
          ".content",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "<.5"
        );
    }, landingRef);
  }, []);
  return (
    <div className="landing" ref={(el) => (landingRef = el)}>
      <a className="content" href="https://www.dscommunity.in">
        <img src={logo} alt="Data Science Community" id="logo" />
      </a>
      <h1 className="content">Recruitments 2K22</h1>
      <p className="content">Data Science Community SRM</p>
      <Clock days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <PopupButton
        id="gSkbTCDo"
        style={{ fontSize: 20 }}
        className="my-button landing-button content"
      >
        Apply 🚀
      </PopupButton>
    </div>
  );
}
export default Landing;
