import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaSquare } from "react-icons/fa";
import { useEffect } from "react";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {

    gsap.to("#hero-content", {
      y: -250,
      scale: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    });

  }, []);

  return (
    <>

      <main className="w-full h-screen overflow-x-hidden">
        {/* HERO */}
        <div id="hero" className="relative w-full z-0 h-[100vh]">
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

          <div id="hero-content" className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-10 text-white">
            <h1 className="md:text-8xl text-6xl lg:text-9xl font-[Comfortaa] select-none">NoBuggy</h1>
            <p className="md:text-2xl text-xl lg:text-2xl font-[Manrope] select-none">Inteligência que simplifica.</p>
          </div>
        </div>

        {/* ABOUT */}
        <div
          id="about"
          className="rounded-t-3xl relative p-10 pb-64 pt-36 md:py-64 flex flex-col lg:flex-row items-center justify-center w-full bg-[url('/bgAbout.jpg')] lg:h-[90vh] text-white"
        >
          <img src="/star.png" alt="estrela divisória" className="absolute left-0 z-10 -bottom-60" />
          <div className="flex flex-col items-center justify-center w-full lg:flex-row max-w-7xl">
            <div className="flex items-center justify-center w-full mb-10 lg:w-1/2 lg:mb-96 h-11/12">
              <h2 className="flex gap-5 lg:flex-col text-5xl lg:text-8xl font-[Comfortaa] select-none">
                <FaSquare size={10} color="#DE2B86" className="-translate-x-2 md:-translate-x-4 lg:translate-y-1" /> Sobre <span className="block"> Nós </span>
              </h2>
            </div>
            <div className="relative flex items-center justify-center w-full mt-10 lg:w-1/2 lg:mt-52 h-9/12">
              <img src="/aboutImg.svg" alt="foto about" className="absolute z-0 min-w-[600px] md:min-w-4xl" />
              <p className="z-10 max-w-lg font-sans text-base font-light leading-relaxed text-center select-none md:text-xl">
                Na Nobuggy, usamos a tecnologia para simplificar o complexo. Oferecemos soluções completas para impulsionar sua presença online, otimizar operações e conectar seu negócio ao futuro.
                Nossa equipe é formada por profissionais prontos para transformar suas ideias em realidade. Seja para dar vida ao que você sempre sonhou ou para simplificar processos complexos, estamos aqui para tornar cada passo do seu sucesso mais fácil e inspirador.
              </p>
              <img className="absolute right-0 z-10 -bottom-32" src="/plus-about.png" alt="icone mais" />
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div
          id="services"
          className="relative px-10 flex flex-col lg:flex-row pt-32 pb-72 items-center justify-center w-full bg-[url('/bgAbout.jpg')] text-white"
        >
          <div className="flex flex-col items-center justify-center w-full gap-5 lg:flex-row max-w-7xl">
            <div className="flex flex-col items-center justify-center w-full md:flex-row lg:w-2/5 ">
              <h2 className="flex text-6xl md:flex-col lg:text-8xl font-[Comfortaa] select-none">
                Ser <span className="block"> vi </span> <span className="flex"> ços </span>
              </h2>
              <img src="/services-arrow.svg" className="self-end w-16 mr-5 rotate-180 md:translate-y-5 md:self-end md:justify-self-end md:w-20 md:rotate-12" alt="seta serviços" /> 
            </div>
            <div className="relative flex flex-col items-center justify-center w-full gap-10 mt-5 md:items-start lg:flex-row lg:w-3/5">
              <div className="flex flex-col items-start w-full px-16 md:px-0"> 
                <h3 className="text-2xl md:text-4xl -translate-x-5 mb-5 md:mb-10 font-medium font-[nunito] tracking-wider flex items-center gap-2"> <FaSquare size={10} color="#DE2B86" /> Desenvolvimento</h3>
                <ul className="flex flex-col tracking-wide gap-2 text-base md:text-xl font-light font-[nunito]">
                  <li className="text-left">
                    Desenvolvimento Web e Mobile
                  </li>
                  <li className="text-left">
                    Automação e Integrações
                  </li>
                  <li className="text-left">
                    Infraestrutura
                  </li>
                  <li className="text-left">
                    E-commerce e Vendas Online
                  </li>
                  <li className="text-left">
                    Serviços de Dados
                  </li>
                  <li className="text-left">
                  Inteligência Artificial
                  </li>
                  <li className="text-left">
                    Suporte e Manutenção Geral
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start w-full px-16 md:px-0"> 
                <h3 className="text-2xl md:text-4xl -translate-x-5 mb-5 font-medium font-[nunito] tracking-wider flex items-center gap-2"> <FaSquare size={10} color="#DE2B86" /> Design</h3>
                <ul className="flex flex-col tracking-wide gap-2 text-base md:text-xl font-light font-[nunito]">
                  <li className="text-left">
                    Marketing Digital
                  </li>
                  <li className="text-left">
                    Design e Branding
                  </li>
                  <li className="text-left">
                    Produção de Conteúdo
                  </li>
                  <li className="text-left">
                    Gestão de Redes Sociais
                  </li>
                  <li className="text-left">
                    Criação de Material
                  </li>
                  <li className="text-left">
                    Publicitário
                  </li>
                </ul>
              </div>
              <img className="absolute rotate-45 -right-8 md:right-0 -bottom-50" src="/square-services.svg" alt="quadrado serviços" />
            </div>
          </div>
        </div>

        {/* EQUIPE */}
        <div
          id="team"
          className="relative px-10 flex items-center justify-center w-full bg-[url('/bgAbout.jpg')] h-[600px] md:h-[850px] text-white rounded-b-5xl"
        >
          <div className="flex w-full max-w-[1400px] md:py-10 h-full mx-auto overflow-x-auto select-none ">
            <div className="flex items-center justify-start gap-5 min-w-max">
              <div className="relative w-[300px] md:w-[400px] h-full font-sans text-white shrink-0">
                <img src="/manu.png" alt="manu card" className="absolute z-0 w-full" />
                <div className="absolute left-8 top-14 md:left-16 md:top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="flex gap-2 text-2xl md:flex-col md:flex md:text-5xl font-extralight">
                      Manoela <span className="block">Ramôa</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-sm font-medium md:text-sm max-w-64">
                      Designer Visual, Designer Gráfico e Produção de Conteúdo Audiovisual
                    </p>
                  </div>
                  <ul className="flex flex-col text-base md:text-xl max-w-56 md:max-w-64">
                    <li className="text-left">UI/UX Design</li>
                    <li className="text-left">Design Visual & Branding</li>
                    <li className="text-left">Social Media</li>
                    <li className="text-left">Edição e Produção de Vídeo</li>
                    <li className="text-left">Material Publicitário e Impressos</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa] mt-16">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-sm md:text-lg">manoela_ramoa</span>
                  </p>
                </div>
              </div>
              <div className="relative w-[300px] md:w-[400px] h-full font-sans text-white shrink-0">
                <img src="/giulia.png" alt="giulia card" className="absolute z-0 w-[300px] md:w-[400px]" />
                <div className="absolute left-8 top-14 md:left-16 md:top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="flex gap-2 text-2xl md:flex-col md:text-5xl font-extralight">
                      Giuliana <span className="block">Toppino</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-sm font-medium md:text-sm max-w-64">
                      Desenvolvedora Front-End, UI Designer e Criação de Conteúdo
                    </p>
                  </div>
                  <ul className="flex flex-col text-base md:text-xl max-w-56 md:max-w-64">
                    <li className="text-left">Desenvolvimento Front-End</li>
                    <li className="text-left">UI Design & Implementação</li>
                    <li className="text-left">Gravação de Vídeo</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa] mt-28">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-sm md:text-lg">giuliana_toppino</span>
                  </p>
                </div>
              </div>
              <div className="relative w-[300px] md:w-[400px] h-full font-sans text-white shrink-0">
                <img src="/douglas.png" alt="douglas card" className="absolute z-0 w-[300px] md:w-[400px]" />
                <div className="absolute left-8 top-14 md:left-16 md:top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="flex gap-2 text-2xl md:flex-col md:text-5xl font-extralight">
                      Douglas <span className="block">Oliveira</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-sm font-medium md:text-sm max-w-64">
                      Desenvolvedor Full-Stack e Desenvolvedor Mobile
                    </p>
                  </div>
                  <ul className="flex flex-col text-base md:text-xl max-w-56 md:max-w-64">
                    <li className="text-left">Desenvolvimento Front-End e Back-End</li>
                    <li className="text-left">Desenvolvimento Mobile</li>
                    <li className="text-left">Banco de Dados</li>
                    <li className="text-left">Autenticação e Segurança</li>
                    <li className="text-left">DevOps & Infraestrutura</li>
                    <li className="text-left">Cloud Computing</li>
                    <li className="text-left">Escalabilidade & Performance.</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa] ">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-sm md:text-lg">dougladmo_</span>
                  </p>
                </div>
              </div>
              <div className="relative w-[300px] md:w-[400px] h-full font-sans text-white shrink-0">
                <img src="/czr.png" alt="czr card" className="absolute z-0 w-[300px] md:w-[400px]" />
                <div className="absolute left-8 top-14 md:left-16 md:top-28 z-[1] flex flex-col w-full gap-10">
                  <div>
                    <h3 className="flex gap-2 text-2xl md:flex-col md:text-5xl font-extralight">
                      Cezar <span className="block">Mutran</span>
                    </h3>
                    <div className="w-10 mt-8 mb-3 h-[1px] bg-white"></div>
                    <p className="text-sm font-medium md:text-sm max-w-56 md:max-w-64">
                      Desenvolvedor Full-Stack e Automação
                    </p>
                  </div>
                  <ul className="flex flex-col text-base md:text-xl max-w-56 md:max-w-64">
                    <li className="text-left">Desenvolvimento Front-End e Back-End</li>
                    <li className="text-left">Banco de Dados</li>
                    <li className="text-left">Engenharia de Dados</li>
                    <li>Automação & Integrações</li>
                    <li>Infraestrutura e Cloud Computing</li>
                    <li>Escalabilidade & Performance</li>
                  </ul>
                  <p className="flex items-center gap-3 font-[comfortaa]">
                    <PiInstagramLogoLight size={35} />
                    <span className="text-sm md:text-lg">czr_mutran</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="relative w-full flex flex-col lg:flex-row items-center justify-center px-5 pb-10 pt-36 md:p-10 text-white bg-center bg-[#0E0E0E]"
        >

          <Link to="hero"
            smooth={true}
            offset={-50}
            duration={1000}
            className="group flex items-center font-[comfortaa] absolute right-5 top-10 transition duration-500">
            <div className="flex flex-col">
              <span>Voltar</span>
              <span>Para o</span>
              <span>Topo</span>
            </div>
            <img src="/backToTop-arrow.svg"
              alt="arrow up"
              className="transition-transform duration-300 group-hover:-translate-y-4" />
          </Link>

          <div className="flex flex-col items-center justify-center w-full h-full overflow-x-auto lg:flex-row max-w-7xl">

            <div className="relative z-10 w-full md:w-1/2">
              <h3 className="absolute text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl z-20 font-light font-[comfortaa]">O <span className="block">próximo</span> passo é <span className="block">seu.</span></h3>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full"
              >
                <source
                  src="https://site-nobuggy.s3.sa-east-1.amazonaws.com/videos/contactBG.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4 md:w-1/2">
              <h4 className="text-xl">Entre em contato</h4>
              <form className="font-[comfortaa] font-light text-white items-center justify-center p-8 border border-white rounded-3xl gap-8 flex flex-col">
                <label htmlFor="Name">
                  <input className="pb-2 border-b border-white w-64 md:w-72 indent-1 outline-0" type="text" placeholder="Nome" />
                </label>
                <label htmlFor="Email">
                  <input className="pb-2 border-b border-white w-64 md:w-72 indent-1 outline-0" type="text" placeholder="E-mail" />
                </label>
                <label htmlFor="Subject">
                  <input className="pb-2 border-b border-white w-64 md:w-72 indent-1 outline-0" type="text" placeholder="Assunto" />
                </label>
                <label htmlFor="Message">
                  <input className="pb-2 border-b border-white w-64 md:w-72 indent-1 outline-0" type="text" placeholder="Mensagem" />
                </label>
                <button type="submit" className="px-10 py-3 transition duration-500 border border-white rounded-2xl hover:bg-white hover:text-black">Enviar</button>
              </form>
              <button className="self-center p-2 transition duration-500 rounded-full hover:bg-white/30">
                <PiInstagramLogoLight size={25} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
