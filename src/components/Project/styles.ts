import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }

    .project.featured {
      grid-column: span 3;
      display: flex;
      flex-direction: row;
      gap: 3rem;
      align-items: center;
      background: linear-gradient(135deg, #2b2b2b 0%, #17321a 100%);
      border: 2px solid var(--green);
      box-shadow: 0 10px 30px rgba(35, 206, 107, 0.2);
      padding: 3rem;
      
      &:hover {
        background: linear-gradient(135deg, #2b2b2b 0%, var(--pink) 100%);
        border-color: #FFF;
        transform: translateY(-5px);
      }
      
      .featured-image {
        flex: 1.2;
        max-width: 450px;
        img {
          width: 100%;
          border-radius: 0.8rem;
          object-fit: cover;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          border: 1px solid #444;
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.02);
          }
        }
      }
      
      .featured-content {
        flex: 1.8;
        display: flex;
        flex-direction: column;
        
        .featured-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          
          h3 {
            font-size: 2.6rem;
            color: var(--green);
            margin-bottom: 0;
          }
          
          .project-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            a > img {
              width: 4.5rem;
              transition: transform 0.25s;
              &:hover {
                transform: scale(1.1);
              }
            }
          }
        }

        p {
          font-size: 1.6rem;
          line-height: 2.4rem;
        }
        
        .impact-summary {
          margin-top: 1rem;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--blue);
          border-left: 3px solid var(--blue);
          padding-left: 1.2rem;
        }
        
        footer {
          margin-top: auto;
          .tech-list {
            display: flex;
            align-items: center;
            gap: 2rem;
            font-size: 1.4rem;
            opacity: 0.8;
          }
        }
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
      
      .project.featured {
        grid-column: span 2;
        flex-direction: column;
        align-items: stretch;
        
        .featured-image {
          max-width: 100%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
      .project.featured {
        grid-column: span 1;
      }
    }
  }
`