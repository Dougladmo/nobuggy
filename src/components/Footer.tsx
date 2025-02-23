
const Footer = () => {
  return (
    <div id="footer" className="font-[comfortaa] mt-5 font-light  flex flex-col items-center justify-center gap-3 text-white bg-[#0E0E0E] py-5">
        <div className="md:text-sm text-xs flex items-center justify-center">
            <a href="#" className="pr-5 border-r border-white">
                Políticas de privacidade
            </a>
            <a href="#" className="pl-5">
                Termos de uso
            </a>
        </div>
        <p className="md:text-base text-sm text-center"> &copy; 2025 NoBuggy. Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer
