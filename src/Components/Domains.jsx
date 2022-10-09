import React from "react";
import gsap from "gsap";
function Domains() {
  const domains = [
    {
      heading: "Technical",
      description:
        "The entire universe is made of atoms. Similarly, tech is the atom of our universe. The technical domain is the heart & soul of the community. It is the domain that builds innovative projects that aim to solve real-time problems. At the same time, it provides an opportunity to collaborate with others and grow in specific sub-domains.",
      subDomains: ["AI/ML", "Blockchain", "Web Dev"],
    },
    {
      heading: "Creatives",
      description:
        "This place is full of Lunar-tics who bring their creative pallets to color the pitch-black space. The creative domain offers you a chance to add your own ring to the decorative world with your VFX and GFX skills as there's no Saturn-ing back here!",
      subDomains: ["Graphic Designing", "VFX"],
    },
    {
      heading: "Corporate",
      description:
        "The sun is the center of our solar system, and its gravity, like our corporate domain, holds the entire solar system together.It collaborates closely with the technical and creative teams on everything from content curation to sponsorship negotiations.",
      subDomains: [
        "Content",
        "Sponsorship",
        "Event Management",
        "Public Relations",
      ],
    },
  ];
  let domainsRef = React.useRef(null);
  React.useEffect(() => {
    gsap.context(() => {
      gsap.fromTo(
        ".heading",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".heading",
          },
        }
      );
      gsap.utils.toArray(".domain").forEach((domain) => {
        gsap.fromTo(
          domain,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: domain,
              start: "top center",
            },
          }
        );
      });
    }, domainsRef);
  }, []);

  return (
    <div className="domains" id="domains" ref={(el) => (domainsRef = el)}>
      <h1 className="heading">DOMAINS</h1>
      {domains.map((domain) => {
        return (
          <section className="domain">
            <h2>{domain.heading}</h2>
            <p>{domain.description}</p>
            <ul>
              {domain.subDomains.map((subDomain) => (
                <li>{subDomain}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
export default Domains;
