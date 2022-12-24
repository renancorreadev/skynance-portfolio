import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'
import { useContext } from "react"
import { LanguageContext } from "../../context/language"

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  const { language } = useContext(LanguageContext);
  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  const messageEN = 'Get in touch using the form'
  const messagePT = 'Entre em contato usando o formulário'
  const PlaceHolderEN = 'Leave your message'
  const PlaceHolderPT = 'Deixe sua mensagem'

  return (
    <Container>
      <h2>
        {language === "EN" ? messageEN : messagePT}
      </h2>
      <form onSubmit={handleSubmit} method="POST">
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder={
            language === "EN" ? PlaceHolderEN : PlaceHolderPT
          }
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey="6LdZ76MjAAAAAHc4aVGDzJmLEkpL0rz07O1W5B88"
          onChange={(e) => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA>
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >

          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
