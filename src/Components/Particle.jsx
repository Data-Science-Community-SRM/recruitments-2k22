import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle(){
    const particlesInit = React.useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
      }, []);
      return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: {color: "#232323"},
                width: 100,
                height: 400,
                fpsLimit: 24,
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                    default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                },
                detectRetina: true,
            }}
        />
      );
}
export default Particle;