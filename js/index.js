const intro = document.getElementById("intro-screen");
    const content = document.getElementById("main-content");
    const bottomImg = document.getElementById("bottom-img");
    const music = document.getElementById("bg-music");

    intro.addEventListener("click", () => {
      intro.classList.add("fade-out");
      setTimeout(() => {
        intro.style.display = "none";
        music.play().catch(err => console.log("Autoplay blocked:", err));
        content.classList.add("show");
        bottomImg.classList.add("show");
      }, 1000);
    });

    const originalTitle = "Artin";
    const glitchMap = {
      'a': '4',
      'r': 'r',
      't': '3',
      'i': '1',
      'n': '3',
    };
    const scrambleTitle = "YNRBSU";
    function glitchTitle(title) {
      let newTitle = "";
      for (let char of title) {
        if (Math.random() < 0.3 && glitchMap[char.toLowerCase()]) {
          newTitle += glitchMap[char.toLowerCase()];
        } else {
          newTitle += char;
        }
      }
      return newTitle;
    }
    setInterval(() => {
      if (Math.random() < 0.01) {
        document.title = scrambleTitle;
      } else {
        document.title = glitchTitle(originalTitle);
      }
    }, 200);

    const images = [
      "/assets/images/def.png",
      "/assets/images/freaky.png",
      "/assets/images/bd.png",
      "/assets/images/ep4.png",
      "/assets/images/2worldscolide.png",
      "/assets/images/afilitelol.png",
      "/assets/images/cool.png",
      "/assets/images/geek.png",
      "/assets/images/loverboy.png",
      "/assets/images/max.png",
      "/assets/images/pronounce.png",
      "/assets/images/49999.png",
      "/assets/images/afiliteteaser.png",
      "/assets/images/arizona.png",
      "/assets/images/awshucks.png",
      "/assets/images/eoe.png",
      "/assets/images/epik.png",
      "/assets/images/floaty.png",
      "/assets/images/happier.png",
      "/assets/images/kirby.png",
      "/assets/images/sandwich.png",
      "/assets/images/whataview.png",
    ];

    const img = document.getElementById("bottom-img");
    img.src = images[Math.floor(Math.random() * images.length)];

    