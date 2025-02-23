import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to("#about", {
      y: "-100vh",
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to("#hero-content", {
      y: -250, 
      scale: 0.2,
      opacity: 0, 
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.to("#hero", {
      pointerEvents: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
        onLeave: () => gsap.set("#hero", { display: "none" }),
        onEnterBack: () => gsap.set("#hero", { display: "flex", opacity: 1 }),
      },
    });
  }, []);

  return (
    <main className="w-full h-screen">
      {/* HERO */}
      <div id="hero" className="relative w-full z-0 lg:h-[100vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/hero-static.svg')" }}
        ></div>

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute z-[0] top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://site-nobuggy.s3.sa-east-1.amazonaws.com/videos/hero-nobuggy.mp4" type="video/mp4" />
        </video>

        {/* Adicione um ID ao conteúdo para animá-lo separadamente */}
        <div id="hero-content" className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-5 text-white">
          <h1 className="text-9xl font-[Comfortaa] select-none">NoBuggy</h1>
          <p className="text-2xl font-[Manrope] select-none">Inteligência que simplifica.</p>
        </div>
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="rounded-t-3xl bottom-2 relative px-10 z-10 flex items-center justify-center w-full bg-[url('/bgAbout.jpg')] lg:h-[100vh] text-white"
      >
        <div className="flex items-center justify-center w-full max-w-7xl">
          <div className="flex items-center justify-center w-1/2 mb-96 h-9/12">
            <h2 className="text-8xl font-[Comfortaa] select-none">
              Sobre <span className="block"> Nós </span>
            </h2>
          </div>
          <div className="relative flex items-center justify-center w-1/2 mt-48 mb-96 h-9/12">
            <img src="/aboutImg.svg" alt="foto about" className="absolute z-0 w-full min-w-4xl" />
            <p className="z-10 max-w-lg font-sans text-xl font-light leading-relaxed text-center select-none">
              Na Nobuggy, usamos a tecnologia para simplificar o complexo. Oferecemos soluções completas para impulsionar sua presença online, otimizar operações e conectar seu negócio ao futuro.
              Nossa equipe é formada por profissionais prontos para transformar suas ideias em realidade. Seja para dar vida ao que você sempre sonhou ou para simplificar processos complexos, estamos aqui para tornar cada passo do seu sucesso mais fácil e inspirador.
            </p>
            <img className="absolute right-0 -bottom-20" src="/plus-about.png" alt="icone mais" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full max-w-7xl">
          <div className="flex items-center justify-center w-1/2 mb-96 h-9/12">
            <h2 className="text-8xl font-[Comfortaa] select-none">
              Sobre <span className="block"> Nós </span>
            </h2>
          </div>
          <div className="relative flex items-center justify-center w-1/2 mt-48 mb-96 h-9/12">
            <img src="/aboutImg.svg" alt="foto about" className="absolute z-0 w-full min-w-4xl" />
            <p className="z-10 max-w-lg font-sans text-xl font-light leading-relaxed text-center select-none">
              Na Nobuggy, usamos a tecnologia para simplificar o complexo. Oferecemos soluções completas para impulsionar sua presença online, otimizar operações e conectar seu negócio ao futuro.
              Nossa equipe é formada por profissionais prontos para transformar suas ideias em realidade. Seja para dar vida ao que você sempre sonhou ou para simplificar processos complexos, estamos aqui para tornar cada passo do seu sucesso mais fácil e inspirador.
            </p>
            <img className="absolute right-0 -bottom-20" src="/plus-about.png" alt="icone mais" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full max-w-7xl">
          <div className="flex items-center justify-center w-1/2 mb-96 h-9/12">
            <h2 className="text-8xl font-[Comfortaa] select-none">
              Sobre <span className="block"> Nós </span>
            </h2>
          </div>
          <div className="relative flex items-center justify-center w-1/2 mt-48 mb-96 h-9/12">
            <img src="/aboutImg.svg" alt="foto about" className="absolute z-0 w-full min-w-4xl" />
            <p className="z-10 max-w-lg font-sans text-xl font-light leading-relaxed text-center select-none">
              Na Nobuggy, usamos a tecnologia para simplificar o complexo. Oferecemos soluções completas para impulsionar sua presença online, otimizar operações e conectar seu negócio ao futuro.
              Nossa equipe é formada por profissionais prontos para transformar suas ideias em realidade. Seja para dar vida ao que você sempre sonhou ou para simplificar processos complexos, estamos aqui para tornar cada passo do seu sucesso mais fácil e inspirador.
            </p>
            <img className="absolute right-0 -bottom-20" src="/plus-about.png" alt="icone mais" />
          </div>
        </div>
    </main>
  );
};

export default Home;
