import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            direction: "none",
            speed: 0.25,
            out_mode: "out",
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 0.35,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.05,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 90,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
