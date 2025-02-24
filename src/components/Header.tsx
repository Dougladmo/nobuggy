import { useState, useEffect } from "react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const [bgOpacity, setBgOpacity] = useState("bg-transparent");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBgOpacity("bg-black/70");
    } else {
      setBgOpacity("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed z-10 -translate-y-1 md:z-20 flex items-center justify-center w-full pt-6 pb-4 text-white font-[manrope] transition-all duration-500 ${bgOpacity}`}
    >
      <nav id="header-nav" className="lg:w-auto">
        <ul className="flex flex-wrap justify-center row-gap-2 px-5 text-center gap-y-2 gap-x-5 md:items-center md:gap-16">
          <li className="cursor-pointer">
            <HeaderLink title="Home" offset={-50} link="hero" />
          </li>
          <li className="cursor-pointer">
            <HeaderLink title="Sobre Nós" offset={-50} link="about" />
          </li>
          <li className="cursor-pointer">
            <HeaderLink title="Serviços" offset={-50} link="services" />
          </li>
          <li className="cursor-pointer">
            <HeaderLink title="Equipe" offset={-50} link="team" />
          </li>
          <li className="cursor-pointer">
            <HeaderLink title="Contato" offset={100} link="contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
