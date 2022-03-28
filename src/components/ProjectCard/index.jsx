import { FaGithub } from "react-icons/fa";
import { StyledCard } from "./style.js";

function ProjectCard({ project }) {
  const { title, img, description, link, repo } = project;

  return (
    <StyledCard>
      <h3>{title}</h3>
      <img src={img} alt={title.toUpperCase()} />
      <p>{description}</p>
      <div className="link-container">
        <a href={link} target="_blank" rel="noreferrer">
          Acessar Projeto
        </a>
        <a href={repo}>
          <FaGithub />
          Repositório
        </a>
      </div>
    </StyledCard>
  );
}

export default ProjectCard;
