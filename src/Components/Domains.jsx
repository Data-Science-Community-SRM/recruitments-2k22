import React from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Domains(){
    const domains = [
        {
            heading: "Technical",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium placeat repellat laborum, eaque temporibus sed ea quas explicabo, suscipit provident officiis praesentium! Molestiae quis id impedit, maxime consequuntur, delectus nam enim incidunt doloremque quod, commodi sit ut beatae dolorum obcaecati voluptate vel? Asperiores adipisci veritatis itaque doloribus aliquid sequi.",
            subDomains: ["AI/ML", "Blockchain", "Web Dev"]
        },
        {
            heading: "Creatives",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium placeat repellat laborum, eaque temporibus sed ea quas explicabo, suscipit provident officiis praesentium! Molestiae quis id impedit, maxime consequuntur, delectus nam enim incidunt doloremque quod, commodi sit ut beatae dolorum obcaecati voluptate vel? Asperiores adipisci veritatis itaque doloribus aliquid sequi.",
            subDomains: ["Graphic Designing", "UI/UX", "Video Editing"]
        },
        {
            heading: "Corporate",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium placeat repellat laborum, eaque temporibus sed ea quas explicabo, suscipit provident officiis praesentium! Molestiae quis id impedit, maxime consequuntur, delectus nam enim incidunt doloremque quod, commodi sit ut beatae dolorum obcaecati voluptate vel? Asperiores adipisci veritatis itaque doloribus aliquid sequi.",
            subDomains: ["Content", "Sponsorship", "Event Management", "Public Relations"]
        }
    ];
    let domainsRef = React.useRef(null);
    React.useEffect(()=>{
        gsap.context(()=>{
            gsap.fromTo(".heading", 
            {
                opacity: 0, 
                y: 20, 
                scrollTrigger: {
                    trigger: ".heading",
                    toggleAttribute: "restart none none none"
                }
            }, 
            {
                opacity: 1, 
                y: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: ".heading",
                    toggleAttribute: "restart none none none"
                }
            });
            gsap.from(".domain", {opacity: 0, x: -20, });
            gsap.to(".domain", {opacity: 1, x: 0, delay: 0.2 });
        }, domainsRef);
    }, []);

    return (
        <div className="domains" id="domains" ref={el => domainsRef = el}>
            <h1 className="heading">Domains</h1>
            {domains.map((domain) => {
                return (
                    <section className="domain">
                        <h2>{domain.heading}</h2>
                        <p>{domain.description}</p>
                        <ul>{domain.subDomains.map((subDomain)=> <li>{subDomain}</li>)}</ul>
                    </section>
                )
            })};
        </div>
    )
}
export default Domains;