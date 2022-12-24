import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import Ilustration from '../../assets/ilustration.png'

import './translates.css'
import { useContext } from "react"
import { LanguageContext } from "../../context/language"


export function Hero() {

  const { language } = useContext(LanguageContext);

  const content = {
    pt: {
      hello: 'Olá',
      iam: 'Eu sou',
      developper: 'Desenvolvedor Full Stack VTEX & Blockchain',
      experiencie1: '3 Anos de Experiência em Blockchain',
      experiencie2: '2 Anos de Experiência em VTEX CMS/IO',
      experiencie3: '4 Anos de Experiência em React & Javascript',
      contact: 'contato'
    }
  }

if(language === 'EN') {
    return (
      <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Renan C. F Correa</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Blockchain & VTEX Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">3 Years of Experience of Blockchain </p>
          <p className="small-resume">2 Years of Experience of VTEX CMS/IO</p>
          <p className="end-resume">4 Years of Experience of React & Javascript</p>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/codevinayak"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
        </ScrollAnimation>

      </div>
    

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Ilustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    
    </Container>
    )
  }else
  return (
    <Container id="home">
    <div className="hero-text">
      <ScrollAnimation animateIn="fadeInUp">
        <p>{content.pt.hello} <img src={Hello} alt="Hello" width="20px"/>, {content.pt.iam}</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h1>Renan C. F Correa</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
        <h3>{content.pt.developper}</h3>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <p className="small-resume">{content.pt.experiencie1} </p>
        <p className="small-resume">{content.pt.experiencie2}</p>
        <p className="end-resume">{content.pt.experiencie3}</p>
      </ScrollAnimation>


      <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">{content.pt.contact}</NavHashLink>
        </BrowserRouter>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
    <div className="social-media"><a
      href="https://www.linkedin.com/in/renancesardev/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={linkedin} alt="Linkedin" />
    </a>
      <a
        href="https://github.com/renancorreadev"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%5512996514611&text=Hello+Renan"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="Whatsapp" />
      </a>
      <a
        href="https://t.me/skyxcriptodev"
        target="_blank"
        rel="noreferrer"
      >
        <img src={telegram} alt="telegram" />
      </a></div>
      </ScrollAnimation>

    </div>
   

    <div className="hero-image">
      <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
        <img src={Ilustration} alt="Ilustração" />
      </ScrollAnimation>
    </div>
   
  </Container>
  )
}