import { Container } from "./styles";
import alokRanjanAvatar from "../../assets/alok_ranjan_avatar.png";
import python from "../../assets/python.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I am a Software Developer with hands-on experience in building modern web applications using React.js, Next.js, FastAPI, JavaScript, SQL, Firebase, and REST APIs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I have developed and deployed production-ready applications ranging from healthcare platforms to AI-powered systems. My focus is on creating responsive user experiences, scalable backend services, and clean maintainable code.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I enjoy solving real-world problems through technology and continuously improving my development skills by working on full-stack and AI-driven projects.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="experience" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
             <h3>Experience:</h3>
             <h4>Software Developer</h4>
             <p>1+ Years Experience</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="React.js" />
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>React.js</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <svg viewBox="0 0 128 128" width="50" height="50" style={{background: "white", borderRadius: "50%", padding: "4px"}}>
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm31.7 94.7L54.3 41.5V91H44.1V33.6h9.1l38.2 48.7V33.6h10.2v61.1h-5.9z" fill="black"/>
              </svg>
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>Next.js</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>JavaScript</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={htmlIcon} alt="HTML5" />
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>HTML5</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={cssIcon} alt="CSS3" />
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>CSS3</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <svg viewBox="0 0 24 24" width="50" height="50">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
              </svg>
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>Tailwind CSS</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <svg viewBox="0 0 128 128" width="50" height="50">
                <path d="M84.7 0H43.3L15.6 48h27.7v80l69.1-80H84.7V0z" fill="#009688"/>
              </svg>
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>FastAPI</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={python} alt="Python" />
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>Python</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={mysqlIcon} alt="SQL" />
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>SQL</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <svg viewBox="0 0 128 128" width="50" height="50">
                <path d="M22.5 91.9l11.4-71.1c.3-1.8 1.9-3.1 3.7-2.8.9.1 1.7.7 2.1 1.5l11.2 21 21.6-40.4c1-1.8 3.3-2.4 5.1-1.4.6.4 1.1.9 1.4 1.5L90.2 92H22.5z" fill="#FFC107"/>
                <path d="M90.2 92L78.6 30.5c-.5-2.7-3.1-4.5-5.8-4-1.2.2-2.3 1-3 2.1L22.5 91.9l46.2 27.5c3.2 1.9 7.2 1.9 10.4 0L105.5 92H90.2z" fill="#FF9800"/>
                <path d="M22.5 91.9l46.6 27.8c3 1.8 6.9 1.8 9.9.1L105.5 92l-9.1-17.2-73.9 17.1z" fill="#DD2C00"/>
              </svg>
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>Firebase</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <svg viewBox="0 0 128 128" width="50" height="50">
                <path d="M125.5 60.1L67.9 2.5c-3.3-3.3-8.6-3.3-11.9 0L42.2 16.3l14.2 14.2c3.1-1.1 6.8-.4 9.4 2.2 2.6 2.6 3.3 6.3 2.2 9.4l14.2 14.2c3.1-1.1 6.8-.4 9.4 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-2.7-2.7-3.4-6.6-2.1-9.8L58.3 47.5c-1.1 2.2-3.1 3.9-5.6 4.6v28.8c1.6.7 3 1.9 3.9 3.5 2.5 4.3 1 9.8-3.3 12.3s-9.8 1-12.3-3.3c-2.5-4.3-1-9.8 3.3-12.3 1.6-.9 3.4-1.3 5.2-1.1V51.7c-1.8-.2-3.6-.9-5.1-2.1-2.6-2.6-3.3-6.3-2.2-9.4L33.2 26 2.5 56.7c-3.3 3.3-3.3 8.6 0 11.9l57.6 57.6c3.3 3.3 8.6 3.3 11.9 0l53.5-53.5c3.3-3.3 3.3-8.8 0-12.6z" fill="#F05032"/>
              </svg>
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>Git</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={githubIcon} alt="GitHub" />
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>GitHub</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <svg viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="#23ce6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
              </svg>
              <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center' }}>REST APIs</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.23 * 1000}>
          <img src={alokRanjanAvatar} alt="Alok Ranjan" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
