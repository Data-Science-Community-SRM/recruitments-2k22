import React from "react";
import gsap from "gsap";
import dsHack from "../img/DS_Hack_Logo.svg";
import neuRes from "../img/Neures_Logo.svg";
import rLogo from "../img/R_Logo.svg";
function Event() {
  let events = [
    {
      img: dsHack,
      heading: "DS-Hack 2022",
      description:
        "A comprehensive hackathon that focused on analyzing the participant's technical & problem-solving skills in a competitive environment and also the amazing projects.",
    },
    {
      img: neuRes,
      heading: "NeuRes",
      description:
        "To acquaint you with the phenomenal concept of Deep Learning, we bring to you a week-long bootcamp ‘NeuRes’, wherein we have a series of insightful workshops exploring the topic.",
    },
    {
      img: rLogo,
      heading: "Data Science with R Programming",
      description:
        "Focused on the most important tool of a Data Scientist, this workshop explored various statistical models, visualizations and ML packages utilizing R.",
    },
  ];
  let eventsRef = React.useRef(null);
  React.useEffect(() => {
    gsap.context(() => {
      gsap.fromTo(
        ".heading",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".heading",
          },
        }
      );
      gsap.utils.toArray(".event").forEach((event) => {
        gsap.fromTo(
          event,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: event,
              start: "top center",
            },
          }
        );
      });
    }, eventsRef);
  }, []);
  return (
    <div className="events" id="events" ref={(el) => (eventsRef = el)}>
      <h1 className="heading">
        <span style={{ color: "#6F389F" }}>E</span>VENTS
      </h1>
      {events.map((event) => {
        return (
          <section className="event">
            <h2 className="heading">
              <img src={event.img} alt={event.heading} /> {event.heading}
            </h2>
            <p>{event.description}</p>
          </section>
        );
      })}
    </div>
  );
}
export default Event;
