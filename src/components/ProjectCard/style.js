import styled from "styled-components";
import { keyframes } from "styled-components";

export const AppearFromBellow = keyframes`
  from {
    opacity: 0;
    transform: translateY(75px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid transparent;
  background-color: lightgrey;
  color: black;
  transition: 0.5s;
  width: 300px;
  height: 475px;
  border-radius: 8px;
  margin: 15px 0px;
  animation: ${AppearFromBellow} 1s;

  :hover {
    background-color: rgb(35, 35, 35);
    color: lightgrey;
    box-shadow: rgba(100, 100, 100, 0.7) 0px 14px 28px,
      rgba(100, 100, 100, 0.7) 0px 13px 13px;

    a {
      color: lightgrey;
    }

    h3 {
      border-color: whitesmoke;
    }

    img {
      width: 73%;
      height: 130px;
    }
  }

  .backend-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    img {
      width: 110px;
      height: 50px;
    }
  }

  h3 {
    font-size: 20px;
    border-bottom: 2px solid black;
  }

  ul {
    list-style: none;
  }

  img {
    width: 70%;
    height: 125px;
    transition: 0.5s;
  }

  p {
    width: 70%;
    font-size: 17px;
  }

  .link-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  a {
    border: 2px solid transparent;
    transition: 0.5s;
    border-radius: 25px;
    padding: 15px;
    color: black;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    border-color: rgb(216, 21, 216);
    color: rgb(216, 21, 216);
    font-size: 16px;
  }

  @media (min-width: 667px) {
    margin: 15px;
  }

  @media (min-width: 1024px) {
  }
`;
