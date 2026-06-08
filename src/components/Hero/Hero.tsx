import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"

import bookmydocScreenshot from "../../assets/bookmydoc_screenshot.png"
import externalLink from "../../assets/external-link.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        
        
          <h1>Alok Ranjan</h1>
        
        
          <h3>Software Developer</h3>
        
        
          <p className="small-resume" style={{ marginBottom: "2rem" }}>1+ Years Experience</p>
        
          <p style={{ marginBottom: "4rem", fontSize: "1.8rem", lineHeight: "2.8rem" }}>
            Full Stack Developer skilled in React.js, Next.js, FastAPI, JavaScript, SQL, and API Integration. Experienced in building scalable web applications, AI-powered solutions, and responsive user interfaces.
          </p>
        
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/alokranjan-tech/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/al13ok"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=917992374551&text=Hello+Alok+I+found+your+contact+through+your+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        
      </div>
      <div className="hero-image">
       
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '2px solid var(--green)',
            borderRadius: '1.6rem',
            padding: '2.5rem',
            width: '100%',
            maxWidth: '460px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5), 0 0 25px rgba(35, 206, 107, 0.2)',
            color: '#FFF'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{
                background: 'var(--green)',
                color: 'var(--black)',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                padding: '0.4rem 1rem',
                borderRadius: '5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1rem'
              }}>Featured Project</span>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <a href="https://github.com/al13ok" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ width: '3.5rem', height: '3.5rem' }} />
                </a>
                <a href="https://ranjan-healthcare-acup42naj-alok-ranjans-projects-9511fdcc.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Demo" style={{ width: '3.5rem', height: '3.5rem' }} />
                </a>
              </div>
            </div>
            
            <a href="https://ranjan-healthcare-acup42naj-alok-ranjans-projects-9511fdcc.vercel.app/" target="_blank" rel="noreferrer">
              <img 
                src={bookmydocScreenshot} 
                alt="BookMyDoc" 
                style={{ 
                  width: '100%', 
                  borderRadius: '0.8rem', 
                  marginBottom: '1.5rem',
                  border: '1px solid #444',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s'
                }} 
              />
            </a>
            
            <h3 style={{ fontSize: '2.2rem', color: 'var(--green)', margin: '0 0 1rem 0' }}>
              BookMyDoc – Healthcare Web Platform
            </h3>
            
            <p style={{ fontSize: '1.4rem', lineHeight: '2.1rem', color: '#ccc', marginBottom: '1.5rem' }}>
              Built and deployed a production-ready healthcare web platform using React.js and Tailwind CSS. Implemented appointment booking workflows, service pages, and responsive components.
            </p>
            
            <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--blue)', fontWeight: 500, margin: 0 }}>
                Impact: Production-ready healthcare platform with appointment booking and responsive UI deployed on Vercel.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['React.js', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Vercel'].map(t => (
                <span key={t} style={{
                  background: 'rgba(255,255,255,0.05)',
                  fontSize: '1.2rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '0.4rem',
                  color: '#aaa',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>{t}</span>
              ))}
            </div>
          </div>
        
      </div>
    </Container>
  )
}