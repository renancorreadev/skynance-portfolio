import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;

    .web-dev-block, .blockchain-block, .test-blocks {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 2px;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .vtex-blocks{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 22px;

      .vtex-spanc {
        display: flex;
        align-items: center;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .block-title{
      font-size: 1.8rem;
      font-weight: 600;
      color: #fff2fc;
    }
    
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  .paragraph a{
    padding: 0 2px;
    color: var(--green);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.5s;
    display: inline-block;

    &:hover{
      color: var(--blue);
    }
  }

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }
  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    }
  }
}

.hability .animated{
  display: flex;
  max-width: 150px;
  align-items: center;
}

`