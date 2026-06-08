import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){
  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:al1312ok@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:al1312ok@gmail.com">al1312ok@gmail.com</a>
        </div>
        <div>
          <a href="tel:+917992374551"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917992374551">(+91) 7992374551</a>
        </div>  
        <div>
          <a href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh,+India" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="3rem" height="3rem" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </a>
          <a href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh,+India" target="_blank" rel="noreferrer">Noida, India</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}