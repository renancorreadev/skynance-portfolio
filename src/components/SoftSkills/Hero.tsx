import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"


import './translates.css'
import { useContext } from "react"
import { LanguageContext } from "../../context/language"

import Softs from '../../assets/softs.png'

export function SoftSkills() {

  const { language } = useContext(LanguageContext);

  if(language === "EN") {
    return (
      <Container id="home">
         <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
        <img src={Softs} alt="Ilustração" />
        </ScrollAnimation>
      </div>


      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Soft Skills</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>With my work experience, I realized the importance of interpersonal skills (soft skills), currently it is one of the principles that I always seek to improve, because with my soft skills improved, the result of the work will always be of greater impact. during the last 3 years I have been working on the PDI (Individual Development Plan), personal goals and professional goals.</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h5 className="textP">Right below I will position my best soft skills</h5>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <div className="softstexts">
         <p className="small-resume">✅ Effective communication</p>
          <p className="small-resume">✅ Writing</p>
          <p className="small-resume">✅ Empathy</p>
          <p className="small-resume">✅ Collaboration </p>
          <p className="small-resume">✅ Ability to solve problems </p>
          <p className="small-resume">✅ Leadership </p>
          <p className="end-resume">✅ Working under pressure</p>
        </div>
        </ScrollAnimation>
      </div> 
    </Container>
    )
  }else {
    return (
      <Container id="home">
         <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Softs} alt="Ilustração" />
        </ScrollAnimation>
      </div>


      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Soft Skills</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h5 className="textP">Com minha experiência de trabalho, percebi a importância das habilidades interpessoais (soft skills), atualmente é um dos princípios que busco sempre melhorar, pois com as minhas softs skills aprimoradas, o resultado do trabalho sempre será de maior impacto.  durante os últimos 3 anos estive trabalhando no PDI (Plano de desenvolvimento Individual), metas pessoais e metas profissionais.</h5>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3 >Logo abaixo, citarei as minhas melhores habilidades de soft skills adquiridas durante minha experiência.</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <div className="softstexts">
         <p className="small-resume">✅ Comunicação eficaz</p>
          <p className="small-resume">✅ Escrita</p>
          <p className="small-resume">✅ Empatia </p>
          <p className="small-resume">✅ Colaboração </p>
          <p className="small-resume">✅ Capacidade de resolver problemas</p>
          <p className="small-resume">✅ Liderança </p>
          <p className="small-resume">✅ Trabalhando sob pressão</p>
          <p className="end-resume">✅ Gerenciamento de Tasks e demandas por tempo</p>
        </div>
        </ScrollAnimation>
      </div> 
    </Container>
    )
  }
}