import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import bookmydocScreenshot from "../../assets/bookmydoc_screenshot.png"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Project #1: Featured BookMyDoc */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project featured">
            <div className="featured-image">
              <a href="https://ranjan-healthcare-acup42naj-alok-ranjans-projects-9511fdcc.vercel.app/" target="_blank" rel="noreferrer">
                <img src={bookmydocScreenshot} alt="BookMyDoc Screenshot" />
              </a>
            </div>
            <div className="featured-content">
              <div className="featured-header">
                <h3>BookMyDoc – Healthcare Web Platform</h3>
                <div className="project-links">
                  <a href="https://github.com/al13ok" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a href="https://ranjan-healthcare-acup42naj-alok-ranjans-projects-9511fdcc.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Live Demo" />
                  </a>
                </div>
              </div>
              <p>
                Built and deployed a production-ready healthcare web platform using React.js and Tailwind CSS. Implemented appointment booking workflows, healthcare service pages, blogs, responsive navigation, and reusable UI components. Focused on performance, responsive design, and user-friendly booking experiences.
              </p>
              <div className="impact-summary">
                Impact: Production-ready healthcare platform with appointment booking and responsive UI deployed on Vercel.
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Firebase</li>
                  <li>Vercel</li>
                </ul>
              </footer>
            </div>
          </div>
        </ScrollAnimation>

        {/* Project #2: AI Powered Chatbot (RAG System) */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/al13ok/ai-powered-chatbot" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://chatbot.al13ok.dev" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit live site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AI Powered Chatbot (RAG System)</h3>
              <p>
                An intelligent conversational chatbot built with Next.js and Firebase, integrating LangChain for context-aware responses and PDF querying (RAG system).
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>Firebase</li>
                <li>Tailwind CSS</li>
                <li>REST APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project #3: AI Trip Planner */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/al13ok/ai-trip-planner" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://trip-planner.al13ok.dev" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit live site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AI Trip Planner</h3>
              <p>
                An AI-powered travel planner that generates customized itineraries based on user preferences, budget, and destination using OpenAI APIs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>FastAPI</li>
                <li>Python</li>
                <li>Tailwind CSS</li>
                <li>REST APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project #4: Face Recognition Attendance System */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/al13ok/face-recognition-attendance" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://attendance.al13ok.dev" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit live site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Face Recognition Attendance System</h3>
              <p>
                A real-time attendance system utilizing OpenCV and Deep Learning models to recognize faces and log attendance automatically in a SQL database.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>OpenCV</li>
                <li>SQL</li>
                <li>FastAPI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project #5: JNKT Cricket Academy */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/al13ok/jnkt-cricket-academy" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://jnktacademy.al13ok.dev" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit live site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>JNKT Cricket Academy</h3>
              <p>
                A professional sports academy website featuring registration management, course schedules, coach bios, and student progress tracking.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}