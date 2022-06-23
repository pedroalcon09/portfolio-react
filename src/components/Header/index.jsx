import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { StyledHeader } from "./style.js";
import { FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

function Header() {
  return (
    <StyledHeader>
      <a href="https://cv-pedro-alcon.vercel.app/" rel="noreferrer">
        Retornar para currículo
      </a>
      <h1>Portfólio Pedro Alcon</h1>
      <ul>
        <li className="node">
          <FaNodeJs />
        </li>
        <li className="python">
          <FaPython />
        </li>
        <li className="ts">
          <SiTypescript />
        </li>
        <li className="sql">
          <FaDatabase />
        </li>
        <li className="react">
          <FaReact />
        </li>
        <li className="js">
          <FaJsSquare />
        </li>
        <li className="css">
          <FaCss3 />
        </li>
        <li className="html">
          <FaHtml5 />
        </li>
      </ul>
    </StyledHeader>
  );
}

export default Header;
