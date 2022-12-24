import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'

import Skynance from '../../assets/skynance.png'

import {FaDiscord} from 'react-icons/fa'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
      <div className="logoFooter">
        <img src={Skynance} alt="" />
      </div>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
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
        </a>
        <a
          href="https://discord.gg/DQWX2TqZ"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord size={40} color="#29bffd"  />
        </a>
      </div>
    </Container>
  )
}
