import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { StyledHeader } from "./style.js";

function Header() {
  return (
    <StyledHeader>
      <a
        href="https://pedroalcon09.github.io/CV-pedro-alcon/"
        target="_blank"
        rel="noreferrer"
      >
        Retornar para currículo
      </a>
      <h1>Portfólio Pedro Alcon</h1>
      <ul>
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
