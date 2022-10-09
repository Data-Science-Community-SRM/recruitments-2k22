import React from "react";
import gsap from "gsap";
function Focus(){
    const cards = [
        {
            image: "https://www.dscommunity.in/static/media/workshop.a0c2d660.svg",
            heading: "Workshops",
            description: "For the enthusiasts"
        },
        {
            image: "https://www.dscommunity.in/static/media/project.f798c2dc.svg",
            heading: "Projects",
            description: "Fot the effectuators",
        },
        {
            image: "https://www.dscommunity.in/static/media/training.94fd2329.svg",
            heading: "Training",
            description: "For the perfectionists"
        }
    ];
    let focusRef = React.useRef(null);
    React.useEffect(() => {
        gsap.context(() => {
            gsap.fromTo(".heading",{ opacity: 0, y: 100 },
                {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".heading",
                },
                }
            );
            gsap.fromTo(".description", { opacity: 0, y: 100 },
            {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".description",
            },
            })
            gsap.utils.toArray(".card").forEach((card) => {
                gsap.fromTo(
                card,
                { opacity: 0, y: -50, x: -50 },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom"
                    },
                }
                );
            });
        }, focusRef);
      }, []);
    return (
        <div className="focus" id="focus" ref={el => focusRef=el}>
            <h1 className="heading">Our Focus</h1>
            <p className="description">Here at Data Science Community , We make real-time projects, conduct researches, organize meetups, host events, and workshops primarily focusing on Data Science, Machine Learning, Al, Blockchain, IoT , Web Development and more. We guide and teach all those who aspire to work in these fields and help them attain better skills and knowledge.</p>
            <section>
                {cards.map((card)=>{
                    return (
                        <section className="card">
                            <img src={card.image} alt={card.heading} />
                            <h2>{card.heading}</h2>
                            <p>{card.description}</p>
                        </section>
                    )
                })}
            </section>
        </div>
    )
}
export default Focus;