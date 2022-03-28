import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import ProjectCard from "./components/ProjectCard";
import { projetos } from "./projetos";

function App() {
  return (
    <div className="App">
      <header>
        <a
          href="https://pedroalcon09.github.io/CV-pedro-alcon/"
          target="_blank"
          rel="noreferrer"
        >
          Retornar para currículo
        </a>
        <h1>Portfólio Pedro Alcon</h1>
        <ul>
          <li>
            <FaReact />
          </li>
          <li>
            <FaJsSquare />
          </li>
          <li>
            <FaCss3 />
          </li>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <SiVercel />
          </li>
        </ul>
      </header>

      <main>
        <div className="dom">
          <h2>Projetos com DOM</h2>

          <ul>
            {projetos.DOM.map((projeto) => {
              return <ProjectCard key={projeto.title} project={projeto} />;
            })}
          </ul>
        </div>
        <div className="react">
          <h2>Projetos com React</h2>

          <ul>
            {projetos.REACT.map((projeto) => {
              return <ProjectCard key={projeto.title} project={projeto} />;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
