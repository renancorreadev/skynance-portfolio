import { Container, ToogleLanguage } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import {  useContext, useState } from 'react'
import {GrLanguage} from 'react-icons/gr'
import {MdInvertColors} from 'react-icons/md'
import CV from '../../assets/renanCV.pdf'

import "./translates.css"
import {LanguageContext} from '../../context/language'

import LogoHeader from '../../assets/LogoHeader.png'
import LogoHeaderLight from '../../assets/LogoHeaderLight.png'

export function Header() {
  const [isActive, setActive] = useState(false)
  // const [lang, setLanguage] = useState('PT')
  const {language, setLanguage} = useContext(LanguageContext)
  const [isLigth, setIsLigth] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
    setIsLigth(!isLigth)
  }

  function changeLanguage() {
    let html = document.getElementsByTagName('html')[0]

    if (html.getAttribute('lang') === 'en') {
      html.setAttribute('lang', 'pt')
      setLanguage('PT')
    }else{
      html.setAttribute('lang', 'en')
      setLanguage('EN')
    }
  }

  function closeMenu() {
    setActive(false)
  }



  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
         <div className="header-image-container">
            <img src={
              isLigth? LogoHeaderLight : LogoHeader
            } className="headerLogo" alt="Logo"/>
         </div>
        </HashLink>

     
  
        <nav id="navbar" className={isActive ? 'active' : ''}>
          <div  className="languageSet ">
            <input
              onChange={toggleTheme}
              className="container_toggle"
              type="checkbox"
              id="switch"
              name="mode"
            />
            <label htmlFor="switch">Toogle</label>
            <MdInvertColors className="icon-Theme-color"/>
          </div>

          <div className="languageSet ">
            <ToogleLanguage
              onChange={changeLanguage}
              className="container_toggle"
              type="checkbox"
              id="switchLang"
              name="lang"
            />
             <label htmlFor="switchLang">Change Lang</label>
            <span className="lang-title">{language}</span>
            <GrLanguage className="icon-color"/>
          
           
          </div>

          <NavHashLink id="headerHome" smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink  id="header_about"smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink id="header_portfolio"smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          <NavHashLink id="header_contact"smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={CV} download className="button">
            CV
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
