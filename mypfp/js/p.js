particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#000000" },
        "shape": {
          "type": "circle",
          "stroke": { "width": 0, "color": "#ff5959" }
        },
        "opacity": {
          "value": 1,
          "random": false
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "enable": true,
          "speed": 10,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
          "repulse": { "distance": 100 },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });