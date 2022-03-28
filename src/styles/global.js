import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Background = styled.div`
  background: url("https://raw.githubusercontent.com/pedroalcon09/portfolio-react/master/src/imgs/background3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export default createGlobalStyle`

@keyframes disc-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

	@keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 yellow;
        }
    
        50% {
            transform: scale(1);
            box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
        }
    
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
}

@media (prefers-reduced-motion: no-preference) {
    .icon-react {
        width: 25px;
        height: 25px;
        animation: disc-spin infinite 1.5s ;
        margin-right: 10px;
        color: aqua;
    }
    
    .icon-js {
        color: yellow;
        width: 25px;
        height: 25px;
        margin-right: 10px;
        animation: pulse 1s linear infinite both;
      }
  }

* {
    font-family: "Nunito", sans-serif;
    text-align: center;
    padding: 0px;
    margin: 0px;
  }

    main {
        display: flex;
        flex-direction: column;
        align-items; center;
        justify-content: space-around;
        text-align: center;
    }

    .project-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25px 0px;
        color: whitesmoke;
        background-color: rgba(100,100,100, 0.5);
        padding: 25px;
    }

    @media (min-width: 667px) {
        .project-container {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (min-width: 1024px) {
        
    }
`;
