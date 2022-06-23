import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { FaJsSquare, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { projetos } from "./projetos";
import GlobalStyle, { Background } from "./styles/global";

function App() {
  return (
    <Background>
      <div className="App">
        <GlobalStyle />
        <Header />

        <main>
          <h2>
            <div className="icon-backend1">
              <SiTypescript />
            </div>
            <div className="icon-backend1">
              <SiPostgresql />
            </div>
            Projetos de Back-End
            <div className="icon-backend2">
              <FaPython />
            </div>
            <div className="icon-backend2">
              <FaNodeJs />
            </div>
          </h2>

          <ul className="project-container">
            {projetos.BACKEND.map((projeto) => {
              return (
                <ProjectCard key={projeto.title} project={projeto} backend />
              );
            })}
          </ul>
          <h2>
            <div className="icon-react">
              <FaReact />
            </div>
            Projetos com React
          </h2>

          <ul className="project-container">
            {projetos.REACT.map((projeto) => {
              return (
                <ProjectCard key={projeto.title} project={projeto} vercel />
              );
            })}
          </ul>
          <h2>
            <div className="icon-js">
              <FaJsSquare />
            </div>
            Projetos com DOM
          </h2>

          <ul className="project-container">
            {projetos.DOM.map((projeto) => {
              return <ProjectCard key={projeto.title} project={projeto} />;
            })}
          </ul>
          <div className="projects"></div>
          <div className="projects"></div>
        </main>
      </div>
    </Background>
  );
}

export default App;
