import { Container } from "./styles";
import wordpress from "../../assets/wordpress.svg";
import Foto from "../../assets/foto.jpeg"
import Vtex from "../../assets/vtex.png";
import Truffle from "../../assets/truffle.svg";
import TheGraph from "../../assets/thegraph.svg";


import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

import { LanguageContext } from "../../context/language"
import { useContext } from "react";


import {ProgressBar} from '../ProgressBar'
import { GrGraphQl } from "react-icons/gr";
import {FaEthereum} from 'react-icons/fa'
import {SiSolidity} from 'react-icons/si'
import {FaHardHat} from 'react-icons/fa'
import {FaDocker} from 'react-icons/fa'
import {FaAws} from 'react-icons/fa'
import {SiTestinglibrary} from 'react-icons/si'
import {SiCypress} from 'react-icons/si'
import {IoLogoPython} from 'react-icons/io'
import {FaRust} from 'react-icons/fa'
import {SiIpfs} from 'react-icons/si'

export function About() {
  const { language } = useContext(LanguageContext);

  const content = {
    pt: {
      about: 'Sobre mim',
      aboutMe: '  Meu nome é Renan césar, sou um engenheiro de computação formado em 2020 com uma grande paixão por tecnologia me dediquei os últimos 6 anos em programação. Sou apaixonado por entregar soluções inovadoras que contribuem para a vida das pessoas e, ao mesmo tempo, me desafiam. ',
      aboutMe2: 'Tive diversas oportunidades no ramo de blockchain e entreguei grandes projetos inovadores que fazem a diferença no mercado, trabalhei aproximadamente 2 anos desenvolvendo E-Coomerce com a plataforma VTEX para diversas empresas famosas da Europa como ',
      myskill1: 'Atualmente desenvolvo sites e aplicações completas usando React, React Hooks, HTML/CSS, JavaScript, Typescript, GraphQL, Vue, Styled-Components, SASS, Vite e NextJs. ',
      myskill2: 'Utilizo em minhas implementações a metodologia de arquitetura limpa com TDD, SOLID, Design Patterns, DDD com ênfase a integração contínua respeitando o fluxograma da arquitetura começando pelos testes unitários e testes de integração.',
      myskill3: 'Estou familiarizado com o desenvolvimento de layouts que me fornecem. Estou sempre me aprimorando a cada projeto testando o software e melhorando sempre a arquitetura desenvolvida.',
      here: "Aqui estão minhas principais habilidades baseado em % de conhecimento:"
    }
  }
  
  if(language === 'EN') {
    return (
      <Container id="about">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About me</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p className="paragraph">
            My name is Renan césar, I am a computer engineer graduated in 2020 with a great passion for technology I have dedicated the last 6 years to programming. I am passionate about delivering innovative solutions that contribute to people's lives and at the same time challenge me. I had several opportunities in the blockchain business and delivered great innovative projects that make a difference in the market, I worked approximately 2 years developing E-Commerce with the VTEX platform for several famous companies in Europe like 
            <a href="https://www.yamamay.com/it_en/" target="_blank" rel="noreferrer">Yamamay</a>,
              <a href="https://www.carpisa.it/it_it/" target="_blank" rel="noreferrer">Carpisa</a> and
              <a href="https://it.canali.com/" target="_blank" rel="noreferrer">Canali</a>.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
  
            <p>I currently develop websites and full applications using React, React Hooks, HTML/CSS, JavaScript, Typescript, GraphQL, Vue, Styled-Components, SASS, Vite and NextJs. 
            <br/> <br/>
            <p>I use in my implementations the clean architecture methodology with TDD, SOLID, Design Patterns, DDD with emphasis on continuous integration respecting the architecture flowchart starting with unit tests and integration tests.</p>
            <br/>
            <p>
             I am familiar with developing layouts that provide me with. I am always improving myself with each project by testing the software and always improving the developed architecture.</p>
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
  
           
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>Here are my main skills:</h3>
          </ScrollAnimation>
       

          <div className="hard-skills">
            {/**Web Development */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <span className="block-title">FullStack Developer</span>
            </ScrollAnimation>
     
            <div className="web-dev-block">
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
                    <img src={wordpress} alt="Wordpress" title="Wordpress" />
                    <ProgressBar bgcolor="green" completed={20}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
                    <img src={shopify} alt="shopify" title="Shopify" />
                    <ProgressBar bgcolor="green" completed={40}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                    <img src={reactIcon} alt="React" title="React" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                    <img src={typescriptIcon} alt="Typescript" title="Typescript"/>
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
                    <img src={vueIcon} alt="Vue" title="Vue" />
                    <ProgressBar bgcolor="green" completed={40}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
                    <img src={nodeIcon} alt="Node" title="Node" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                    <img src={htmlIcon} alt="Html" title="HTML" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                    <img src={cssIcon} alt="Css" title="CSS" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>    
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <img src={boostrapIcon} alt="bootstrap"  title="Bootstrap"/>
                    <ProgressBar bgcolor="green" completed={90}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <img src={jsIcon} alt="JavaScript" title="Javascript" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <GrGraphQl  size={60} title="GraphQl"/>
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaDocker  size={60} title="Docker"/>
                  <ProgressBar bgcolor="green" completed={75}/>
                </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <FaAws  size={60} title="AWS"/>
                    <ProgressBar bgcolor="green" completed={35}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <IoLogoPython  size={60} title="Python"/>
                    <ProgressBar bgcolor="green" completed={65}/>
                  </ScrollAnimation>
                </div>
                
            </div>
            {/**BlockChain */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
            <span className="block-title">Blockchain Developer </span>
            </ScrollAnimation>
            <div className="blockchain-block">
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaEthereum  size={40} title="Ethereum"/>
                  <ProgressBar bgcolor="green" completed={100}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiSolidity  size={60} title="Solitiy"/>
                  <ProgressBar bgcolor="green" completed={100}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaHardHat  size={60} title="HardHat"/>
                  <ProgressBar bgcolor="green" completed={80}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaRust  size={60} title="Rust Web3"/>
                  <ProgressBar bgcolor="green" completed={55}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiIpfs  size={60} title="IPFS Web3"/>
                  <ProgressBar bgcolor="green" completed={70}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={Truffle} alt="truffle" title="Truffle Development Kit" />
                  <ProgressBar bgcolor="green" completed={70}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={TheGraph} alt="theGraph" title="The Graph" />
                  <ProgressBar bgcolor="green" completed={50}/>
                </ScrollAnimation>
              </div>
              
          
            </div>
            {/**Tests */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <span className="block-title">Testing Developer</span>
             </ScrollAnimation>
       
            <div className="test-blocks">
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiTestinglibrary  size={60} title="Testing Lisbrarys"/>
                  <ProgressBar bgcolor="green" completed={80}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiCypress  size={60} title="Cypress Tests"/>
                  <ProgressBar bgcolor="green" completed={75}/>
                </ScrollAnimation>
              </div>
      
            </div>
            {/**Vtex Development */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <span className="block-title">Vtex Developer</span>
            </ScrollAnimation>

            <div className="vtex-blocks">
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <div className="vtex-spanc">
                      <img  src={Vtex} title="Vtex IO" alt="vtex"/>
                      <span style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: 'red',
                        textAlign: 'right',
                        marginLeft: 5,
                      }}>Io</span>
                    </div>
                  <ProgressBar bgcolor="green" completed={100}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <div className="vtex-spanc">
                          <img  src={Vtex} title="Vtex IO" alt="vtex"/>
                          <span style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: 'red',
                            textAlign: 'right',
                            marginLeft: 0,
                          }}>CMS</span>
                    </div>
                  <ProgressBar bgcolor="green" completed={80}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <div className="vtex-spanc">
                          <img  src={Vtex} title="Vtex IO" alt="vtex"/>
                         
                          <span style={{
                            display: 'flex',
                            fontSize: 16,
                            fontWeight: 600,
                            color: 'red',
                            textAlign: 'right',
                            marginLeft: 0,
                          }}>Fast <span style={{fontSize: 9}}>Store</span></span>
                          
                    </div>
                  <ProgressBar bgcolor="green" completed={30}/>
                </ScrollAnimation>
              </div>

             
            </div>
          </div>
        </div>
        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Foto} alt="Renan Cesar" />
          </ScrollAnimation>
        </div>
      </Container>
    )
  }else{
    return (
      <Container id="about">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>{content.pt.about}</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p className="paragraph">
            {content.pt.aboutMe}
            </p>
            <br/>
            <p className="paragraph">
            {content.pt.aboutMe2}
            <a href="https://www.miriade.com/en/" target="_blank" rel="noreferrer">Miriade</a>,
              <a href="https://www.yamamay.com/it_en/" target="_blank" rel="noreferrer">Yamamay</a>,
              <a href="https://www.carpisa.it/it_it/" target="_blank" rel="noreferrer">Carpisa</a> e
              <a href="https://it.canali.com/" target="_blank" rel="noreferrer">Canali</a>.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
            <br/> 
            <p>{content.pt.myskill1}</p>
            <br /> 
            <p>{content.pt.myskill2}</p>
            <br/>
            <p>{content.pt.myskill3}</p>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>{content.pt.here}:</h3>
          </ScrollAnimation>


          <div className="hard-skills">
            {/**Web Development */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <span className="block-title">Desenvolvimento FullStack</span>
            </ScrollAnimation>
     
            <div className="web-dev-block">
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
                    <img src={wordpress} alt="Wordpress" title="Wordpress" />
                    <ProgressBar bgcolor="green" completed={20}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
                    <img src={shopify} alt="shopify" title="Shopify" />
                    <ProgressBar bgcolor="green" completed={40}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                    <img src={reactIcon} alt="React" title="React" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                    <img src={typescriptIcon} alt="Typescript" title="Typescript"/>
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
                    <img src={vueIcon} alt="Vue" title="Vue" />
                    <ProgressBar bgcolor="green" completed={40}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
                    <img src={nodeIcon} alt="Node" title="Node" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                    <img src={htmlIcon} alt="Html" title="HTML" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                    <img src={cssIcon} alt="Css" title="CSS" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>    
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <img src={boostrapIcon} alt="bootstrap"  title="Bootstrap"/>
                    <ProgressBar bgcolor="green" completed={90}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <img src={jsIcon} alt="JavaScript" title="Javascript" />
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <GrGraphQl  size={60} title="GraphQl"/>
                    <ProgressBar bgcolor="green" completed={100}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaDocker  size={60} title="Docker"/>
                  <ProgressBar bgcolor="green" completed={75}/>
                </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <FaAws  size={60} title="AWS"/>
                    <ProgressBar bgcolor="green" completed={35}/>
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <IoLogoPython  size={60} title="Python"/>
                    <ProgressBar bgcolor="green" completed={65}/>
                  </ScrollAnimation>
                </div>
                
            </div>
            {/**BlockChain */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
            <span className="block-title">Desenvolvimento Blockchain e Web3 </span>
            </ScrollAnimation>
            <div className="blockchain-block">
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaEthereum  size={40} title="Ethereum"/>
                  <ProgressBar bgcolor="green" completed={100}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiSolidity  size={60} title="Solitiy"/>
                  <ProgressBar bgcolor="green" completed={100}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaHardHat  size={60} title="HardHat"/>
                  <ProgressBar bgcolor="green" completed={80}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <FaRust  size={60} title="Rust Web3"/>
                  <ProgressBar bgcolor="green" completed={55}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiIpfs  size={60} title="IPFS Web3"/>
                  <ProgressBar bgcolor="green" completed={70}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={Truffle}  title="Truffle Development Kit" alt="truffle"/>
                  <ProgressBar bgcolor="green" completed={70}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={TheGraph} alt="" title="The Graph" />
                  <ProgressBar bgcolor="green" completed={50}/>
                </ScrollAnimation>
              </div>
              
            

            </div>
            {/**Tests */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <span className="block-title">Desenvolvimento de testes</span>
             </ScrollAnimation>
       
            <div className="test-blocks">
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiTestinglibrary  size={60} title="Testing Lisbrarys"/>
                  <ProgressBar bgcolor="green" completed={80}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                  <SiCypress  size={60} title="Cypress Tests"/>
                  <ProgressBar bgcolor="green" completed={75}/>
                </ScrollAnimation>
              </div>
      
            </div>
            {/**Vtex Development */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <span className="block-title">Desenvolvimento Vtex</span>
            </ScrollAnimation>

            <div className="vtex-blocks">
              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <div className="vtex-spanc">
                      <img  src={Vtex} title="Vtex IO" alt="vtex"/>
                      <span style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: 'red',
                        textAlign: 'right',
                        marginLeft: 5,
                      }}>Io</span>
                    </div>
                  <ProgressBar bgcolor="green" completed={100}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <div className="vtex-spanc">
                          <img  src={Vtex} title="Vtex IO" alt="vtex"/>
                          <span style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: 'red',
                            textAlign: 'right',
                            marginLeft: 0,
                          }}>CMS</span>
                    </div>
                  <ProgressBar bgcolor="green" completed={80}/>
                </ScrollAnimation>
              </div>

              <div className="hability">
                <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                    <div className="vtex-spanc">
                          <img  src={Vtex}  title="Vtex IO" alt="vtex"/>
                         
                          <span style={{
                            display: 'flex',
                            fontSize: 16,
                            fontWeight: 600,
                            color: 'red',
                            textAlign: 'right',
                            marginLeft: 0,
                          }}>Fast <span style={{fontSize: 9}}>Store</span></span>
                          
                    </div>
                  <ProgressBar bgcolor="green" completed={30}/>
                </ScrollAnimation>
              </div>

             
            </div>
          </div>

        </div>
        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
            <img src={Foto}  alt="Renan Cesar" />
          </ScrollAnimation>
        </div>
      </Container>
    )
  }
}
