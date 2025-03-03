import { Fade } from "react-awesome-reveal";

const TermosDeUsoPage = () => {
  return (
    <div className="w-full bg-[#0E0E0E] text-white font-[Manrope] overflow-x-hidden">
      <div className="max-w-5xl px-5 py-16 mx-auto pt-36">
        <Fade duration={800} triggerOnce>
          <h1 className="text-3xl md:text-5xl font-[Comfortaa] mb-10">Termos de Uso e Serviço da Nobuggy</h1>
          <div className="space-y-6 leading-7 text-justify">

            <p>
              Seja Bem-Vindo ao site da Nobuggy. Antes de explorar tudo o que temos a oferecer, é importante que você entenda e concorde com algumas regras básicas que regem o uso do nosso site{" "}
              <a href="https://nobuggy.com.br/" className="text-pink-500 hover:underline">https://nobuggy.com.br/</a>, e qualquer outro serviço digital que nós oferecemos, como lojas e plataformas de e-commerce.
            </p>

            <p>
              Ao usar nosso site e serviços, você automaticamente concorda em seguir as regras que estabelecemos aqui. Caso não concorde com algo, por favor, considere não usar nossos serviços. É muito importante para nós que você se sinta seguro e informado a todo momento.
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">1. Aceitando os Termos</h2>
            <p>
              Ao navegar e usar o site da Nobuggy, você concorda automaticamente com nossas regras e condições. Estamos sempre procurando melhorar, então esses termos podem mudar de vez em quando. Se fizermos alterações significativas, vamos postar as atualizações aqui no site. Continuar usando o site após essas mudanças significa que você aceita os novos termos.
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">2. Como Usar o Nosso Site</h2>
            <p>
              A maior parte do nosso site está aberta para você sem a necessidade de cadastro. No entanto, algumas seções especiais podem exigir que você crie uma conta. Pedimos que você seja honesto ao fornecer suas informações e que mantenha sua senha e login seguros. Se decidir compartilhar algum conteúdo conosco, como comentários, por favor, faça-o de maneira respeitosa e dentro da lei.
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">3. Sua Privacidade</h2>
            <p>
              Na Nobuggy, a privacidade é um valor essencial. Ao interagir com nosso site, você aceita nossa Política de Privacidade, que detalha nossa abordagem responsável e conforme às leis para o manejo dos seus dados pessoais. Nosso compromisso é com a transparência e a segurança: explicamos como coletamos, usamos e protegemos suas informações, garantindo sua privacidade e oferecendo controle sobre seus dados.
            </p>
            <p>
              Adotamos práticas de segurança para proteger suas informações contra acesso não autorizado e compartilhamento indevido, assegurando que qualquer cooperação com terceiros ocorra apenas com base na sua aprovação ou exigências legais claras, reafirmando nosso comprometimento com a sua confiança e segurança digital.
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">4. Direitos de Conteúdo</h2>
            <p>
              O conteúdo disponível no site da Nobuggy, incluindo, mas não se limitando a, textos, imagens, ilustrações, designs, ícones, fotografias, programas de computador, videoclipes e áudios, constitui propriedade intelectual protegida tanto pela legislação nacional quanto por tratados internacionais sobre direitos autorais e propriedade industrial...
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">5. Cookies e Mais</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência, coletando informações anônimas durante sua visita, como suas preferências de idioma, duração da visita, páginas acessadas, e outras estatísticas de uso...
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">6. Explorando Links Externos</h2>
            <p>
              Nosso site pode incluir links para sites externos que achamos que podem ser do seu interesse. Note que não temos controle sobre esses sites externos e, portanto, não somos responsáveis pelo seu conteúdo ou políticas.
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">7. Mudanças e Atualizações</h2>
            <p>
              A evolução é parte de como operamos, o que significa que estes Termos de Uso podem passar por atualizações para refletir melhor as mudanças em nossos serviços ou na legislação. Sempre que isso acontecer, você encontrará a versão mais recente disponível aqui...
            </p>

            <h2 className="text-xl md:text-2xl font-[Comfortaa] mt-10">Dúvidas ou Comentários?</h2>
            <p>
              Se tiver dúvidas sobre estes termos, não hesite em nos contatar através do e-mail{" "}
              <a href="mailto:contato@nobuggy.com.br" className="text-pink-500 hover:underline">contato@nobuggy.com.br</a>.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default TermosDeUsoPage;
