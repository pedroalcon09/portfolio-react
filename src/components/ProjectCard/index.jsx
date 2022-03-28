import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { StyledCard } from "./style.js";

function ProjectCard({ project, vercel }) {
  const { title, img, description, link, repo } = project;

  return (
    <StyledCard>
      <h3>{title}</h3>
      <img
        src={`https://raw.githubusercontent.com/pedroalcon09/portfolio-react/master/src/imgs/${img}`}
        alt={title.toUpperCase()}
      />
      <p>{description}</p>
      <div className="link-container">
        <a href={link} target="_blank" rel="noreferrer">
          {vercel ? <SiVercel /> : <FaGithub />}
          Acessar Projeto
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          <FaGithub />
          Repositório
        </a>
      </div>
    </StyledCard>
  );
}

export default ProjectCard;
