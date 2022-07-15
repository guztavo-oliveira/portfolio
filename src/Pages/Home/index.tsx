import { PortfolioCard } from "../../Components/PortfolioCard";
import { Container } from "./styles";
import { Projects } from "../../Utils/Projects";
import dev from "../../assets/images/software-engineer.png";
import dev2 from "../../assets/images/dev.png";
import perfil from "../../assets/images/foto_perfil.jpeg";
import { Tecnologies } from "../../Utils/Tecnologies";
import ln from "../../assets/images/linkedin.png";
import github from "../../assets/images/github-logo3.png";
import cv from "../../assets/images/curriculum_vitae.png";
import coffee from "../../assets/icons/coffee.png";
import heart from "../../assets/icons/heart.png";

const Home = () => {
  return (
    <>
      <Container>
        <section className="intro">
          <div className="teste">
            <div className="personal">
              <h3>Olá, meu nome é</h3>
              <h1>Gustavo</h1>
              <span>Desenvolvedor Web Fullstack</span>
            </div>
            <div className="avatar">
              <img src={dev} alt="dev" />
            </div>
          </div>
          <div className="intro__button">
            <div className="container__trapdoor">
              <img src={ln} alt="linkedin logo" />

              <div className="trapdoor">
                <a
                  href="https://www.linkedin.com/in/gustavooliveir4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="top door-linkedin"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/gustavooliveir4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bottom door-linkedin"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/gustavooliveir4"
                  className="linkedin-button"
                  data-show-count="false"
                  data-size="large"
                  data-dnt="false"
                  target="_blank"
                  rel="noreferrer"
                >
                  Conectar!
                </a>
              </div>
            </div>
            <div className="container__trapdoor">
              <img src={github} alt="github logo" />
              <div className="trapdoor">
                <a
                  href="https://www.github.com/guztavo-oliveira"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="top door-github"></div>
                </a>
                <a
                  href="https://www.github.com/guztavo-oliveira"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bottom door-github"></div>
                </a>
                <a
                  href="https://www.github.com/guztavo-oliveira"
                  className="linkedin-button"
                  data-show-count="false"
                  data-size="large"
                  data-dnt="false"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github!
                </a>
              </div>
            </div>
            <div className="container__trapdoor">
              <img src={cv} alt="curriculum logo" />
              <div className="trapdoor">
                <a
                  href="../../assets/doc/Gustavo_Oliveira_CV_Fullstack.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="top door-cv"></div>
                </a>
                <a
                  href="../../assets/doc/Gustavo_Oliveira_CV_Fullstack.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bottom door-cv"></div>
                </a>
                <a
                  href="../../assets/doc/Gustavo_Oliveira_CV_Fullstack.pdf"
                  className="linkedin-button"
                  data-show-count="false"
                  data-size="large"
                  data-dnt="false"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contrate-me!
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bio">
          <h1 className="title">Sobre mim</h1>
          <div className="content">
            <img src={perfil} alt="dev2" />

            <div className="content_box">
              <p>
                Sou desenvolvedor web fullstack e estudante de engenharia de
                computação.
              </p>
              <p>
                Trabalhei por quase 10 anos atuando como técnico em informática
                / suporte ao usuário, no entanto o sonho de ser desenvolvedor
                sempre esteve dentro de mim e, depois de conhecer a Kenzie, pude
                finalmente segui-lo!
              </p>
            </div>
          </div>
        </section>
        <section className="techs">
          <h1 className="title">Tecnologias</h1>
          <div className="techs__columns">
            <div className="front">
              <div className="techs__title">
                <h1>Front-end</h1>
              </div>
              <div className="front__column">
                <img src={Tecnologies["html5"]} alt="html5 logo" />
                <img src={Tecnologies["css3"]} alt={Tecnologies["css3"]} />
                <img
                  src={Tecnologies["javascript"]}
                  alt={Tecnologies["javascript"]}
                />
                <img src={Tecnologies["typescript"]} alt="typescript" />
                <img src={Tecnologies["react"]} alt={Tecnologies["react"]} />
                <img
                  src={Tecnologies["materialUI"]}
                  alt={Tecnologies["materialUI"]}
                />
                <img
                  src={Tecnologies["styledComponents"]}
                  alt={Tecnologies["styledComponents"]}
                />
                <img
                  src={Tecnologies["cypress"]}
                  alt={Tecnologies["cypress"]}
                />
                <img src={Tecnologies["jest"]} alt={Tecnologies["jest"]} />
              </div>
            </div>
            <div className="back">
              <div className="techs__title">
                <h1>Back-end</h1>
              </div>
              <div className="back__column">
                <img src={Tecnologies["nodejs"]} alt={Tecnologies["nodejs"]} />
                <img
                  src={Tecnologies["express"]}
                  alt={Tecnologies["express"]}
                />
                <img src={Tecnologies["python"]} alt={Tecnologies["python"]} />
                <img src={Tecnologies["django"]} alt={Tecnologies["django"]} />
                <img src={Tecnologies["flask"]} alt={Tecnologies["flask"]} />
                <img
                  src={Tecnologies["sqlAlchemy"]}
                  alt={Tecnologies["sqlAlchemy"]}
                />
                <img
                  src={Tecnologies["postgreSQL"]}
                  alt={Tecnologies["postgreSQL"]}
                />
                <img src={Tecnologies["mongo"]} alt={Tecnologies["mongo"]} />
              </div>
            </div>
            <div className="devops">
              <div className="techs__title">
                <h1>Devops</h1>
              </div>
              <div className="devops__column">
                <img src={Tecnologies["git"]} alt={Tecnologies["git"]} />
                <img src={Tecnologies["docker"]} alt={Tecnologies["docker"]} />
                <img src={Tecnologies["vercel"]} alt={Tecnologies["vercel"]} />
                <img src={Tecnologies["heroku"]} alt={Tecnologies["heroku"]} />
                <img src={Tecnologies["trello"]} alt={Tecnologies["trello"]} />
                <img src={Tecnologies["notion"]} alt="notion logo" />
              </div>
            </div>
          </div>
          {/* <div className="content_box">
            <p>
              Possuo conhecimentos em <span>HTML5</span>, <span>CSS3</span>, e{" "}
              <span>JS (ES5)</span>, além criação de SPA utilizando{" "}
              <span>React</span> e <span>Typescript</span>.
            </p>
            <p>
              Claro que não podem faltar os testes, teste unitários e de
              integração utilizando <span>Jest</span> e testes E2E com{" "}
              <span>Cypress</span>.
            </p>
            <p>
              No backend já realizei projetos utilizando <span>Python</span> e{" "}
              <span>NodeJS</span> para criação de APi's RESTful. Com Python
              empreguei o uso do <span>Flask</span> e <span>Django</span>
              como frameworks e em NodeJS o <span>Express</span>.
            </p>
            <p>
              Como banco de dados foram utilizados <span>MongoDB</span> e o{" "}
              <span>PostgreSQL</span>. Assim como o uso de <span>Docker</span>{" "}
              para auxiliar o desenvolvimento.
            </p>
            <p>
              Todos os projetos foram baseados nas melhores práticas de
              desenvolvimento, utilizando <span>Clean Code</span>,{" "}
              <span>Design Patters</span> de cada linguagem e conventional
              commits para padronização dos repositórios.
            </p>
          </div> */}
          {/* <div className="spinner__container"></div> */}
        </section>
        <section className="portfolio">
          <h1 className="title">Projetos</h1>
          <div className="portfolio__container">
            {Projects.map((e) => (
              <PortfolioCard project={e} />
            ))}
          </div>
        </section>
        <section className="footer">
          <div className="contact">
            ~ Desenvolvido com muito <img src={heart} alt="Heart logo" /> e{" "}
            <img src={coffee} alt="Coffee icon" /> por Gustavo Oliveira ~
          </div>
          <div className="copyright">Copyright 2022</div>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/gustavooliveir4"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ln} alt="Linkedin logo" />
            </a>

            <a
              href="https://www.github.com/guztavo-oliveira"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github logo" />
            </a>
            <a
              href="../../assets/doc/Gustavo_Oliveira_CV_Fullstack.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cv} alt="Curriculum vitae" />
            </a>
          </div>
        </section>
      </Container>
    </>
  );
};

export { Home };
