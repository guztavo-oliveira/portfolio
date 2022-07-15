import { PortfolioCard } from "../../Components/PortfolioCard";
import { Container } from "./styles";
import { Projects } from "../../Utils/Projects";
import dev from "../../Assets/images/software-engineer.png";
import perfil from "../../Assets/images/foto_perfil.jpeg";
import { Technologies } from "../../Utils/Technologies";
import ln from "../../Assets/images/linkedin.png";
import github from "../../Assets/images/github-logo3.png";
import cv from "../../Assets/images/curriculum_vitae.png";
import coffee from "../../Assets/icons/coffee.png";
import heart from "../../Assets/icons/heart.png";

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
                <img src={Technologies["html5"]} alt="html5 logo" />
                <img src={Technologies["css3"]} alt="css3 logo" />
                <img
                  src={Technologies["javascript"]}
                  alt={Technologies["javascript"]}
                />
                <img src={Technologies["typescript"]} alt="typescript" />
                <img src={Technologies["react"]} alt="typescript logo" />
                <img src={Technologies["materialUI"]} alt="materialUI logo" />
                <img
                  src={Technologies["styledComponents"]}
                  alt="styledComponents logo"
                />
                <img src={Technologies["cypress"]} alt="cypress logo" />
                <img src={Technologies["jest"]} alt="jest logo" />
              </div>
            </div>
            <div className="back">
              <div className="techs__title">
                <h1>Back-end</h1>
              </div>
              <div className="back__column">
                <img src={Technologies["nodejs"]} alt="nodejs logo" />
                <img
                  src={Technologies["express"]}
                  alt={Technologies["express"]}
                />
                <img src={Technologies["python"]} alt="python logo" />
                <img src={Technologies["django"]} alt="django logo" />
                <img src={Technologies["flask"]} alt="flask logo" />
                <img src={Technologies["sqlAlchemy"]} alt="sqlAlchemy logo" />
                <img src={Technologies["postgreSQL"]} alt="postgreSQL logo" />
                <img src={Technologies["mongo"]} alt="mongoDB logo" />
              </div>
            </div>
            <div className="devops">
              <div className="techs__title">
                <h1>Devops</h1>
              </div>
              <div className="devops__column">
                <img src={Technologies["git"]} alt="git logo" />
                <img src={Technologies["docker"]} alt="docker logo" />
                <img src={Technologies["vercel"]} alt="vercel logo" />
                <img src={Technologies["heroku"]} alt="heroku logo" />
                <img src={Technologies["trello"]} alt="trello logo" />
                <img src={Technologies["notion"]} alt="notion logo" />
              </div>
            </div>
          </div>
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
