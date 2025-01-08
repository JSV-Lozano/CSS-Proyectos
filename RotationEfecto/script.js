document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const banners = document.querySelector(".banners");
  const product = document.querySelector(".banners .product");
  const nameCharacter = document.querySelector(".name");
  const visionCharacter = document.querySelector(".vision_Char");
  const infoCharacter = document.querySelector(".infochar");
  const descriptionCharacter = document.querySelector(".description");
  const images = [
    {
      img: "img/Hutao.jpg",
      name: "Hu Tao",
      description:
        "Hu Tao es la 77.ᵃ directora de la Funeraria El Camino, es la encargada de todos los asuntos funerarios de Liyue. Invierte toda su energía en que el ultimo adiós del cliente sea lo mas solemne posible y en proteger el equilibrio entre el yin y el yang. Además, ella es una peculiar poetisa cuyas obras maestras han pasado de boca en boca entre los habitantes de Liyue.",
      vision: "img/pyro.png",
      wallpaper: "img/liyue.jpg",
      bg: "rgba(155, 2, 2, 0.3)",
    },
    {
      img: "img/Furina.jpg",
      name: "Furina",
      description:
        "Furina fue maldecida con la inmortalidad mientras su yo divino siguiese existiendo, teneniedo que supervisar a Fontaine como la Arconte Hydro interina durante 500 años para llevar a cabo los planes de la verdadera Arconte de engañar al Orden Celestial y salvar a Fontaine de una gran profecía.",
      vision: "img/hydro.png",
      wallpaper: "img/fontaine.png",
      bg: "rgba(0, 174, 255, 0.3)",
    },
    {
      img: "img/Navia.jpg",
      name: "Navia",
      description:
        "Hija de Calas y Clémentine, Navia vivía en la ciudad de Poisson con su padre desde que su madre falleció al dar a luz. Ahora está bajo la dirección de Spina di Rosula, rodeada de Silver y Melus. Dedica su vida a resolver el misterio de las desapariciones en serie para exonerar a su padre muerto de un crimen que ella cree que no cometió.",
      vision: "img/geo.png",
      wallpaper: "img/fontaineNav.jpg",
      bg: "rgba(255, 208, 0, 0.3)",
    },
    {
      img: "img/Citlali.jpg",
      name: "Citlali",
      description:
        "Dicen que Citlalí, conocida como la “abu Itztli”, ha visto crecer a varias generaciones de los Augures Vientonocturno. ¿Que cuál es su edad? *Ejem*, no es de buena educación preguntarle la edad a una dama. Conoce la mayoría de los complicados rituales de la tribu y es una experta en el uso de la magia, lo que la hace una de las mejores chamanas de toda Natlan. Al haber vivido durante tanto tiempo aislada de las demás personas de su tribu, no se le da bien llevar la iniciativa de la conversación, pero si alguien más joven habla con ella sobre novelas, no habrá forma de que se calle. Adelante, habla con esta pobre abuelita, que seguro que se pondrá muy contenta.",
      vision: "img/cryo.png",
      wallpaper: "img/natlan.png",
      bg: "rgba(255, 0, 140, 0.3)",
    },
  ];
  let currentIndex = 0;

  function updateImages() {
    product.innerHTML = "";
    const div = document.createElement("div");
    div.className = "soda";
    nameCharacter.textContent = images[currentIndex].name;
    descriptionCharacter.textContent = images[currentIndex].description;
    visionCharacter.src = images[currentIndex].vision;
    banners.style.backgroundImage = `url(${images[currentIndex].wallpaper})`;
    banners.style.backgroundPosition = "center";
    banners.style.backgroundSize = "cover";
    banners.style.backgroundImage = `linear-gradient(${images[currentIndex].bg}, ${images[currentIndex].bg}), url(${images[currentIndex].wallpaper})`;
    banners.style.backgroundPosition = "center";
    banners.style.backgroundSize = "cover";
    div.style.setProperty("--url", `url(${images[currentIndex].img})`);
    product.appendChild(div);
    requestAnimationFrame(() => {
      div.style.opacity = 1;
      infoCharacter.style.opacity = 1;
      banners.style.opacity = 1;
    });
  }

  function animate() {
    const div = product.querySelector(".soda");
    if (div) {
      div.style.opacity = 0;
      infoCharacter.style.opacity = 0;
      banners.style.opacity = 0;
      product.classList.add("animate");
      body.classList.add("fade-out");

      setTimeout(() => {
        updateImages();
        product.classList.remove("animate");
        body.classList.remove("fade-out");
      }, 700);
    } else {
      updateImages();
    }
  }

  /*   document.getElementById("prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    animate();
  });

  document.getElementById("next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    animate();
  }); */

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      animate();
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      animate();
    }
  });
  let touchstartX = 0;
  let touchendX = 0;

  function handleGesture() {
    if (touchendX < touchstartX) {
      currentIndex = (currentIndex + 1) % images.length;
      animate();
    }
    if (touchendX > touchstartX) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      animate();
    }
  }

  document.addEventListener("touchstart", function (event) {
    touchstartX = event.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
  });
  updateImages();
});
