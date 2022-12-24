import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { useContext } from "react"
import { LanguageContext } from "../../context/language"


export function Contact(){
  const { language } = useContext(LanguageContext);
  
  if(language === "EN"){
    return(
      <Container id="contact">
        <header>
          <h2 className="contact-header">Contact</h2>
          <p className="contact-text">If you want to talk to me, don't hesitate to call me or send me a message.</p>
        </header>
        <div className="contacts">
          <div>
            <img src={emailIcon} alt="Email" />
            <a href="mailto:producer@skynance.net">producer@skynance.net</a>
          </div>
          <div>
            <img src={phoneIcon} alt="Phone No" />
            <a href="tel:+919630576848">(+55) 12996514611</a>
          </div>  
        </div>
        <Form></Form>
      </Container>
    )
  }else{
    return(
      <Container id="contact">
        <header>
          <h2>Contato</h2>
          <p>Se você quiser falar comigo, não hesite em me ligar ou me enviar uma mensagem.</p>
        </header>
        <div className="contacts">
          <div>
            <img src={emailIcon} alt="Email" />
            <a href="mailto:producer@skynance.net">producer@skynance.net</a>
          </div>
          <div>
            <img src={phoneIcon} alt="Phone No" />
            <a href="tel:+919630576848">(+55) 12996514611</a>
          </div>  
        </div>
        <Form></Form>
      </Container>
    )
  }
}