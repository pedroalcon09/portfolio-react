import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { FaJsSquare, FaReact } from "react-icons/fa";
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
