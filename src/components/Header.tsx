import HeaderLink from "./HeaderLink";

const Header = () => {

  return (
    <header
      id="header"
      className='fixed z-30 flex items-center justify-center w-screen py-6 text-white font-[manrope] transition-all duration-500 bg-black/80'
    >
      <nav id="header-nav" className="w-full">
        <ul className="flex flex-wrap w-full justify-center row-gap-2 px-5 text-center gap-y-2 gap-x-5 md:items-center md:gap-16">
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
