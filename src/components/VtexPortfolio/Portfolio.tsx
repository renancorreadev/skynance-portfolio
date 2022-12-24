import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import { useContext } from "react"
import { LanguageContext } from "../../context/language"

import Carpisa from '../../assets/portfolios/carpisa.png'
import Miriade from '../../assets/portfolios/miriade.png'
import Yamamay from '../../assets/portfolios/yamamay.png'
import Canali from '../../assets/portfolios/canali.png'
import Arteni from '../../assets/portfolios/arteni.png'
import V73 from '../../assets/portfolios/v73.png'


export function VtexPortfolio() {
  const { language } = useContext(LanguageContext);

  if(language === "EN") {
    return (
      <Container id="portfolio">
        <h2>VTEX Portfolio</h2>
        <div className="projects">

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
      
                  <a href="https://www.miriade.com/en/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Miriade - Europe</h3>
                <p>
                  Project developed for a major Italian clothing brand, Miriade. It used all native vtex features and developed several custom components.
                </p>

                <img className="image-project" src={Miriade} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
      
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
      
                  <a href="https://www.yamamay.com/it_en/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Yamamay - Europe</h3>
                <p>
                Project developed in Vtex using all native components and created several custom components, developed separate apps to meet your requirements.
                </p>

                <img className="image-project" src={Yamamay} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
      
                  <a href="https://www.carpisa.it/it_it/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Carpisa - Europe</h3>
                <p>
                Another project developed for the same team as Yamamay, the particularities of this project are based on those of Yamamay.
                </p>

                <img className="image-project" src={Carpisa} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
      
                  <a href="https://it.canali.com/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Canali - Europe</h3>
                <p>
                Canali was a very challenging project with several SEO issues discussed, it is a VTEX store with 8 bindings and several parameters customizable by the site-editor.
                </p>

                <img className="image-project" src={Canali} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                  <li>Helmet</li>
                  <li>Messages</li>
                  <li>Custom Checkout UI</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
      
                  <a href="https://www.v73.it/ww/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>V73 Store - Europe</h3>
                <p>
                V73 is another partner store run by the Miriade team in Italy, this was a basic implementation using native components and some customizations for customization.
                </p>

                <img className="image-project" src={V73} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                  <li>Custom Checkout UI</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
      
                  <a href="https://www.arteni.it/en/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Arteni Store - Europe</h3>
                <p>
                Arteni is another partnership between Yamamay, a new clothing and jewelry store, was developed by vtex IO using the store-theme and customizing with react.
                </p>

                <img className="image-project" src={Arteni} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                  <li>Custom Checkout UI</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    );
  }else{
    return (
      <Container id="portfolio">
        <h2>Portfolio VTEX</h2>
        <div className="projects">
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
       
                  <a href="https://www.miriade.com/en/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Miriade - Europe</h3>
                <p>
                Projeto desenvolvido para uma grande marca de Roupas italiana, a Miriade. Foi utilizado todas os recursos da vtex nativas e desenvolveu-se vários componentes personalizados para atender a demanda.
                </p>
  
                <img className="image-project" src={Miriade} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
       
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
       
                  <a href="https://www.yamamay.com/it_en/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Yamamay - Europe</h3>
                <p>
                Projeto desenvolvido com Vtex utilizando todos os componentes nativos e foi-se criado vários componentes personalizados, desenvolveu-se apps customizados para atender às suas exigências.
                </p>
  
                <img className="image-project" src={Yamamay} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
       
                  <a href="https://www.carpisa.it/it_it/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Carpisa - Europe</h3>
                <p>
                Outro projeto desenvolvido para a mesma equipe da Yamamay, as particularidades deste projeto se baseiam nas da Yamamay.
                </p>
  
                <img className="image-project" src={Carpisa} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
       
                  <a href="https://it.canali.com/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Canali - Europe</h3>
                <p>
                Canali foi um projeto muito desafiador com várias questões de SEO discutidas, é uma loja VTEX com 8 Bindings e vários apps personalizáveis pelo site-editor.
                </p>
  
                <img className="image-project" src={Canali} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                  <li>Helmet</li>
                  <li>Messages</li>
                  <li>Custom Checkout UI</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
       
                  <a href="https://www.v73.it/ww/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>V73 Store - Europe</h3>
                <p>
                V73 é outra loja parceira administrada pela equipe Miriade na Itália, esta foi uma implementação básica utilizando componentes nativos e algumas customizações para atender a demanda.
                </p>
  
                <img className="image-project" src={V73} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>JestTest</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                  <li>Custom Checkout UI</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
       
                  <a href="https://www.arteni.it/en/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Arteni Store - Europe</h3>
                <p>
                A Arteni é outra parceria entre a Yamamay, uma nova loja de roupas e jóias, foi desenvolvida com vtex IO utilizando o tema da loja e personalizando com React.
                </p>
  
                <img className="image-project" src={Arteni} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Vtex IO</li>
                  <li>Store Components</li>
                  <li>React Components</li>
                  <li>SASS</li>
                  <li>GraphQL</li>
                  <li>Typescript</li>
                  <li>Custom Checkout UI</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    );
  }
}