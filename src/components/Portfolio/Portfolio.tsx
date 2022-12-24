import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

import {BsGithub} from 'react-icons/bs'
import { useContext } from "react"
import { LanguageContext } from "../../context/language"

import BlockImob from '../../assets/portfolios/blockimob.png'
import Marketplace from '../../assets/portfolios/marketplace.png'
import Farm from '../../assets/portfolios/farm.png'
import Lottery from '../../assets/portfolios/Lottery.png'
import Passive from '../../assets/portfolios/passive.png'
import Primbank from '../../assets/portfolios/primbank.png'
import  Stake from '../../assets/portfolios/stake.png'
import Course from '../../assets/portfolios/course.png'
import Event from '../../assets/portfolios/event.png'

export function Portfolio() {
  const { language } = useContext(LanguageContext);

  if(language === 'EN') {
    return (
      <Container id="portfolio">
        <h2>Blockchain Portfolio</h2>
        <div className="projects">
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/blockchainImob" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://block-imob-skyxcripto.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>BlockImob -Tokenization Web3</h3>
                <p>
                 This system makes use of blockChain in real estate management using the ERC721 protocol, erc4907 and tokenization for NFTs such as registration and cadastral changes.
                </p>
  
                <img className="image-project" src={BlockImob} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
       
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/marketplace" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://marketplace-one-ivory.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>NFT MarketPlace With Dashboard</h3>
                <p>
                NFT Marketplace project with sales, purchases and trading of NFTs using ERC721A and new front end technologies.
                </p>
  
                <img className="image-project" src={Marketplace} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                  <li>IPFS</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/skyxFarm_Dapp" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://skyx-farm-dapp.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>FarmDapp With Lock/Unlock</h3>
                <p>
                DEFI project for Token Farm, where the app manages who makes fungible token stakes. 
                </p>
  
                <img className="image-project" src={Farm} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>WebJs</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/blockchainImob" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://block-imob-skyxcripto.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>SheepDapp - StakeApp</h3>
                <p>
                 Sheep Token was an encrypted token created to help sheep in a US neighborhood, this platform is a DEFI where holders deposit SHEEP and receive USD in % their share in the smart contract.
                </p>
  
                <img className="image-project" src={Stake} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/megaLottery_FrontEnd" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  
                  <a href="https://megalottery.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Lottery DEFI Dapp</h3>
                <p>
                A Web3 Project focused on a lottery involving a lucky number bet, the winner receives all ethers received for the contract.
                </p>
  
                <img className="image-project" src={Lottery} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/primBank-frontend" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://prim-bank-frontend.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>PrimBank</h3>
                <p>
                Complete Defi project developed for the company GrupoPrimo do Brasil, this project consists of a complete app for buying and selling tokens, Stake Tokens and front end developed specially for the proposed layout.
                </p>
  
                <img className="image-project" src={Primbank} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>web3Modal</li>
                  <li>React Hooks</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/Passive_Dapp" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://passive-dapp.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Passive DEFI Dapp</h3>
  
                <p>
                Project Implemented to be a web3 app focused on exchanging tokens and providing benefits to all holders.
                </p>
  
                <img className="image-project" src={Passive} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>Web3Modal</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/BSC_CourseMarketplace" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://bsc-course-marketplace.vercel.app/marketplace" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Paying for online courses on blockchain</h3>
  
                <p>
                This project was developed to provide a payment innovation using BNB or Ether, it is an online course platform with crypto payments, it has a smart oracle that queries prices in real time.
                </p>
  
                <img className="image-project" src={Course} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>Web3Modal</li>
                  <li>Oracle</li>
                  <li>GraphQL</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/labVideo" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://vercel.com/skyxcripto/lab-video" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Online Web3 Event for Community</h3>
  
                <p>
                Project developed for event management of online video classes with e-mail and password and allowed users.
                </p>
  
                <img className="image-project" src={Event} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>Web3Modal</li>
                  <li>Oracle</li>
                  <li>GraphQL</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
        </div>
      </Container>
    );
  }else{
    return (
      <Container id="portfolio">
        <h2>Blockchain Portfolio</h2>
        <div className="projects">
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/blockchainImob" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://block-imob-skyxcripto.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>BlockImob -Tokenization Web3</h3>
                <p>
                 Este sistema faz uso do blockChain na gestão imobiliária usando o protocolo ERC721, erc4907 e tokenization para NFTs como registro e alterações cadastrais.
                </p>
  
                <img className="image-project" src={BlockImob} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
       
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/marketplace" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://marketplace-one-ivory.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>MarketPlace de NFT com Dashboard</h3>
                <p>
                Projeto NFT Marketplace com vendas, compras e comercialização de NFTs usando ERC721A e novas tecnologias front-end.
                </p>
  
                <img className="image-project" src={Marketplace} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                  <li>IPFS</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/skyxFarm_Dapp" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://skyx-farm-dapp.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>DEFI FarmDapp com Lock/Unlock</h3>
                <p>
                Projeto DEFI para a Fazenda Token, onde o aplicativo administra quem faz estacas simbólicas fungíveis. 
                </p>
  
                <img className="image-project" src={Farm} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>WebJs</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/blockchainImob" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://block-imob-skyxcripto.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>App SheepDapp - StakeApp</h3>
                <p>
                Sheep Token foi um token criptografado criado para ajudar ovelhas em um bairro dos EUA, esta plataforma é um DEFI onde os detentores depositam SHEEP e recebem USD em % de sua participação no contrato inteligente.
                </p>
  
                <img className="image-project" src={Stake}  alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/megaLottery_FrontEnd" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  
                  <a href="https://megalottery.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>App Loteria DEFI</h3>
                <p>
                Um projeto Web3 focado em uma loteria envolvendo uma aposta de número da sorte, o vencedor recebe todos os éteres recebidos pelo contrato.
                </p>
  
                <img className="image-project" src={Lottery} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>TDD</li>
                  <li>DesPatterns</li>
                  <li>SOLID</li>
                  <li>Jest</li>
                  <li>Clean Arch.</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/primBank-frontend" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://prim-bank-frontend.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>PrimBank</h3>
                <p>
                Projeto Defi completo desenvolvido para a empresa GrupoPrimo do Brasil, este projeto consiste em um aplicativo completo para compra e venda de fichas, Stake Tokens e front end desenvolvidos especialmente para o layout proposto.
                </p>
  
                <img className="image-project" src={Primbank}  alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                  <li>web3Modal</li>
                  <li>React Hooks</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/Passive_Dapp" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://passive-dapp.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Passive DEFI Dapp</h3>
  
                <p>
                Projeto Implementado para ser um aplicativo web3 focado na troca de fichas e no fornecimento de benefícios a todos os titulares.
                </p>
  
                <img className="image-project" src={Passive} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>Web3Modal</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/BSC_CourseMarketplace" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://bsc-course-marketplace.vercel.app/marketplace" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Pagamento de cursos on-line em blockchain</h3>
  
                <p>
                Este projeto foi desenvolvido para fornecer uma inovação de pagamento usando BNB ou Ether, é uma plataforma de curso online com pagamentos criptográficos, tem um oráculo inteligente que consulta os preços em tempo real.
                </p>
  
                <img className="image-project" src={Course} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>Web3Modal</li>
                  <li>Oracle</li>
                  <li>GraphQL</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#29bffd " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/renancorreadev/labVideo" target="_blank" rel="noreferrer">
                     <BsGithub size={40} color="#29bffd" />
                  </a>
                  <a href="https://vercel.com/skyxcripto/lab-video" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Evento Online para a Comunidade Web3</h3>
  
                <p>
                Projeto desenvolvido para gerenciamento de eventos de aulas em vídeo online com e-mail e senha e usuários permitidos.
                </p>
  
                <img className="image-project" src={Event} alt="project" />
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Ethers</li>
                  <li>Truffle</li>
                  <li>Web3Modal</li>
                  <li>Oracle</li>
                  <li>GraphQL</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
  
        </div>
      </Container>
    );
  }
}