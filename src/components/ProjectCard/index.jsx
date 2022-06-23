import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { StyledCard } from "./style.js";
// import { FaNodeJs, FaPython } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiPostgresql,
//   SiJest,
//   SiPytest,
//   SiDjango,
//   SiDocker,
// } from "react-icons/si";

function ProjectCard({ project, vercel, backend }) {
  const { title, img, description, link, repo, tools } = project;

  return (
    <StyledCard>
      <h3>{title}</h3>
      {!backend ? (
        <img
          src={`https://raw.githubusercontent.com/pedroalcon09/portfolio-react/master/src/imgs/${img}`}
          alt={title.toUpperCase()}
        />
      ) : (
        <div className="backend-img">
          {tools.map((tool) => {
            return (
              <img
                src={`https://raw.githubusercontent.com/pedroalcon09/portfolio-react/master/src/imgs/${tool}.png`}
                alt={tool.toUpperCase()}
              />
            );
          })}
        </div>
      )}
      <p>{description}</p>
      <div className="link-container">
        {!backend && (
          <a href={link} target="_blank" rel="noreferrer">
            {vercel ? <SiVercel /> : <FaGithub />}
            Acessar Projeto
          </a>
        )}
        <a href={repo} target="_blank" rel="noreferrer">
          <FaGithub />
          Repositório
        </a>
      </div>
    </StyledCard>
  );
}

export default ProjectCard;
