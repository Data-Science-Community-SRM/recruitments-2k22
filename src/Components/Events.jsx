import React from "react";
import gsap from "gsap";
import dsHack from "../img/DS_Hack_Logo.svg";
import neuRes from "../img/Neures_Logo.svg";
import rLogo from "../img/R_Logo.svg";
function Event(){
    let events = [
        {
            img: dsHack,
            heading: "DS-Hack 2022",
            description: "A comprehensive hackathon that focused on analyzing the participant's technical & problem-solving skills in a competitive environment and also the amazing projects."
        },
        {
            img: neuRes,
            heading: "NeuRes",
            description: "To acquaint you with the phenomenal concept of Deep Learning, we bring to you a week-long bootcamp ‘NeuRes’, wherein we have a series of insightful workshops exploring the topic."
        },
        {
            img: rLogo,
            heading: "Data Science with R Programming",
            description: "To acquaint you with the phenomenal concept of Deep Learning, we bring to you a week-long bootcamp ‘NeuRes’, wherein we have a series of insightful workshops exploring the topic."
        }
    ];
    let eventsRef = React.useRef(null);
    React.useEffect(()=>{
        let ctx = gsap.context(()=>{
            gsap.from(".heading", {opacity: 0, y: 20, delay: 0.2});
            gsap.to(".heading", {opacity: 1, y: 0, delay: 0.2});
            gsap.from(".domain", {opacity: 0, x: -20, });
            gsap.to(".domain", {opacity: 1, x: 0, delay: 0.2 });
        }, eventsRef);
    }, []);
    return (
        <div className="events" id="events" ref={el => eventsRef = el}>
            <h1 className="heading"> Events </h1>
            {events.map((event)=>{
                return (
                    <section className="event">
                        <h2><img src={event.img} alt={event.heading} /> {event.heading}</h2>
                        <p>{event.description}</p>
                    </section>
                );
            })};
        </div>
    )
}
export default Event;