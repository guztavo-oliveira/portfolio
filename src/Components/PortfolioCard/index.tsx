import { ReactNode } from "react";
import { Container } from "./style";
import { Technologies } from "../../Utils/Technologies";
import { Button } from "../Button";

interface IProjects {
  name: string;
  description: string;
  techs: string[];
  github: string;
  image: string;
  demo: string;
}
interface IPortfolioCardProps {
  children?: ReactNode;
  project: IProjects;
}

const PortfolioCard = ({ project }: IPortfolioCardProps) => {
  return (
    <Container>
      <h1>{project.name}</h1>

      <div className="card_container">
        <div className="card_logo">
          <img
            src={project.image}
            className="project_logo"
            alt="logo of the respective project"
          />
        </div>
        <div className="card_content">
          <p>{project.description}</p>
          <div className="container__buttons">
            <a href={project.github} target="_blank" rel="noreferrer">
              <Button>{"GitHub"}</Button>
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button>{"Demo"}</Button>
            </a>
          </div>
          <ul>
            {project.techs.map((e) => {
              return (
                <li>
                  <abbr title={e}>
                    <img src={Technologies[e]} alt={e} />
                  </abbr>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};
export { PortfolioCard };
