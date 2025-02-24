import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaSquare } from "react-icons/fa";
import { useEffect } from "react";
import { PiInstagramLogoLight } from "react-icons/pi";

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

    gsap.to("#services", {
      y: "-100vh",
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to("#team", {
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
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });

  }, []);

  return (
    <main className="w-full h-screen">
      {/* HERO */}
      <div id="hero" className="relative w-full z-0 lg:h-[100vh]">
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
        <div id="hero-content" className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-10 text-white">
          <h1 className="text-9xl font-[Comfortaa] select-none">NoBuggy</h1>
          <p className="text-2xl font-[Manrope] select-none">Inteligência que simplifica.</p>
        </div>
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="rounded-t-3xl bottom-3 relative px-10 z-10 flex items-center justify-center w-full bg-[url('/bgAbout.jpg')] lg:h-[90vh] text-white"
      >
        <img src="/star.png" alt="estrela divisória" className="absolute left-0 -bottom-36" />
        <div className="flex items-center justify-center w-full max-w-7xl">
          <div className="flex items-center justify-center w-1/2 mb-96 h-9/12">
            <h2 className="text-8xl font-[Comfortaa] select-none">
              <FaSquare size={10} color="#DE2B86" /> Sobre <span className="block"> Nós </span>
            </h2>
          </div>
          <div className="relative flex items-center justify-center w-1/2 mt-52 h-9/12">
            <img src="/aboutImg.svg" alt="foto about" className="absolute z-0 w-full min-w-4xl" />
            <p className="z-10 max-w-lg font-sans text-xl font-light leading-relaxed text-center select-none">
              Na Nobuggy, usamos a tecnologia para simplificar o complexo. Oferecemos soluções completas para impulsionar sua presença online, otimizar operações e conectar seu negócio ao futuro.
              Nossa equipe é formada por profissionais prontos para transformar suas ideias em realidade. Seja para dar vida ao que você sempre sonhou ou para simplificar processos complexos, estamos aqui para tornar cada passo do seu sucesso mais fácil e inspirador.
            </p>
            <img className="absolute right-0 -bottom-20" src="/plus-about.png" alt="icone mais" />
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div
        id="services"
        className="relative bottom-4 px-10 flex items-center justify-center w-full bg-[url('/bgAbout.jpg')] lg:h-[90vh] text-white"
      >
        <div className="flex items-center justify-center w-full max-w-7xl">
          <div className="flex items-center justify-center w-2/5 ">
            <h2 className="text-8xl font-[Comfortaa] select-none">
              Ser <span className="block"> vi </span> <span className="flex"> ços <img src="/services-arrow.svg" className="w-20 mt-5 rotate-12" alt="seta serviços" /> </span>
            </h2>
          </div>
          <div className="relative flex items-start justify-center w-3/5 gap-24">
            <div>
              <h3 className="text-4xl mb-10 font-medium font-[nunito] tracking-wider flex items-center gap-2"> <FaSquare size={10} color="#DE2B86" /> Desenvolvimento</h3>
              <ul className="flex flex-col tracking-wide gap-2 text-xl font-light font-[nunito]">
                <li>
                  Desenvolvimento Web e Mobile
                </li>
                <li>
                  Automação e Integrações
                </li>
                <li>
                  Consultoria em TI e Infraestrutura
                </li>
                <li>
                  E-commerce e Vendas Online
                </li>
                <li>
                  Serviços de Dados e Inteligência Artificial
                </li>
                <li>
                  Suporte e Manutenção Geral
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-4xl mb-10 font-medium font-[nunito] tracking-wider flex items-center gap-2"> <FaSquare size={10} color="#DE2B86" /> Design</h3>
              <ul className="flex flex-col gap-2 tracking-wide text-xl font-light font-[nunito]">
                <li>
                  Marketing Digital
                </li>
                <li>
                  Design e Branding
                </li>
                <li>
                  Produção de Conteúdo
                </li>
                <li>
                  Gestão de Redes Sociais
                </li>
                <li>
                  Criação de Material
                </li>
                <li>
                  Publicitário
                </li>
              </ul>
            </div>
            <img className="absolute right-10 -bottom-60" src="/square-services.svg" alt="quadrado serviços" />
          </div>
        </div>
      </div>

      {/* EQUIPE */}
      <div
        id="team"
        className="relative bottom-4 px-10 py-10 flex items-center justify-center w-full bg-[url('/bgAbout.jpg')] lg:h-[850px] text-white"
      >
        <div className="w-full h-full overflow-x-auto max-w-7xl">
          <div className="flex items-center justify-start gap-5 min-w-max">
          <div className="relative w-[400px] h-full font-sans text-white shrink-0">
                <img src="/manu.png" alt="manu card" className="absolute z-0 w-full" />
                <div className="absolute left-16 top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="text-5xl font-extralight">
                      Manoela <span className="block">Ramôa</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-lg font-medium max-w-64">
                      Designer Visual, Designer Gráfico e Produção de Conteúdo Audiovisual
                    </p>
                  </div>
                  <ul className="flex flex-col text-xl max-w-64">
                    <li>UI/UX Design</li>
                    <li>Design Visual & Branding</li>
                    <li>Social Media</li>
                    <li>Edição e Produção de Vídeo</li>
                    <li>Material Publicitário e Impressos</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa] mt-16">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-lg">manoela_ramoa</span>
                  </p>
                </div>
              </div>
          <div className="relative w-[400px] h-full font-sans text-white shrink-0">
                <img src="/giulia.png" alt="giulia card" className="absolute z-0 w-[400px]" />
                <div className="absolute left-16 top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="text-5xl font-extralight">
                      Giuliana <span className="block">Toppino</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-lg font-medium max-w-64">
                    Desenvolvedora Front-End, UI Designer e Criação de Conteúdo
                    </p>
                  </div>
                  <ul className="flex flex-col text-xl max-w-64">
                    <li>Desenvolvimento Front-End</li>
                    <li>UI Design & Implementação</li>
                    <li>Gravação de Vídeo</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa] mt-36">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-lg">giuliana_toppino</span>
                  </p>
                </div>
              </div>
          <div className="relative w-[400px] h-full font-sans text-white shrink-0">
                <img src="/douglas.png" alt="douglas card" className="absolute z-0 w-[400px]" />
                <div className="absolute left-16 top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="text-5xl font-extralight">
                    Douglas <span className="block">Oliveira</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-lg font-medium max-w-64">
                    Desenvolvedor Full-Stack e Desenvolvedor Mobile
                    </p>
                  </div>
                  <ul className="flex flex-col text-xl max-w-64">
                    <li>Desenvolvimento Front-End e Back-End</li>
                    <li>Desenvolvimento Mobile</li>
                    <li>Banco de Dados</li>
                    <li>Autenticação e Segurança</li>
                    <li>DevOps & Infraestrutura</li>
                    <li>Cloud Computing</li>
                    <li>Escalabilidade & Performance.</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa] ">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-lg">dougladmo_</span>
                  </p>
                </div>
              </div>
          <div className="relative w-[400px] h-full font-sans text-white shrink-0">
                <img src="/czr.png" alt="czr card" className="absolute z-0 w-[400px]" />
                <div className="absolute left-16 top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="text-5xl font-extralight">
                    Cezar <span className="block">Mutran</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-lg font-medium max-w-64">
                    Desenvolvedor Full-Stack e Automação
                    </p>
                  </div>
                  <ul className="flex flex-col text-xl max-w-64">
                    <li>Desenvolvimento Front-End e Back-End</li>
                    <li>Banco de Dados</li>
                    <li>Engenharia de Dados</li>
                    <li>Automação & Integrações</li>
                    <li>Infraestrutura e Cloud Computing</li>
                    <li>Escalabilidade & Performance</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa]">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-lg">czr_mutran</span>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div id="contact" className="w-full">

      </div>
    </main>
  );
};

export default Home;