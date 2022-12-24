import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #29bffd;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    .header-image-container{
      position: relative;
      height: 110px;
      width: 260px;
      padding: 50px;
      box-sizing: border-box;
      margin-bottom: -40px;
    }
    .headerLogo {
      height: 80%;
      width: calc(100% - 0px);
      display: block;
      position: absolute;
      top: -18px;
      right: 0px;
      box-sizing: border-box;
    }

    .languageSet {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
    }
    .icon-color{
      margin-right: 1rem;
      font-size: 2.5rem;
      filter: invert(100%) sepia(5%) saturate(226%) hue-rotate(209deg) brightness(112%) contrast(100%);
    }
    .icon-Theme-color{
      font-size: 3rem;
      margin-right: 1rem;
    }

    .lang-title{
      font-size: 2rem;
    }

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }
      .icon-color, .icon-Theme-color{
        filter: invert(0%) sepia(83%) saturate(7458%) hue-rotate(84deg) brightness(104%) contrast(100%);
      }
      .logo{
        color: var(--black);
      }

      .block-title{
        color: #000;
      }
      .headerLogo {
      background-image: url(/images/LogoHeaderLight.png);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

      .contact-text{
        color: #000;
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`