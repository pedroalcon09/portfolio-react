import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: small;
  height: 250px;
  background-color: rgba(100, 100, 100, 0.5);
  color: whitesmoke;

  h1 {
    background-color: rgb(216, 21, 216, 0.5);
    padding: 15px;
    border-radius: 10px;
  }

  .react {
    color: aqua;
  }

  .node {
    color: green;
  }

  .python {
    color: yellow;
  }

  .ts {
    color: blue;
  }

  .sql {
    color: yellow;
  }

  .js {
    color: yellow;
  }
  .html {
    color: orangered;
  }
  .css {
    color: rgb(43, 43, 250);
  }
  .vercel {
    color: whitesmoke;
  }

  a {
    border: 2px solid transparent;
    transition: 0.7s;
    border-radius: 25px;
    padding: 15px;
    color: whitesmoke;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  a:hover {
    border-color: rgb(216, 21, 216);
    color: rgb(216, 21, 216);
    background-color: rgba(30, 30, 30, 0.7);
  }

  li {
    margin: 7px;
  }

  ul {
    font-size: 30px;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  @media (min-width: 770px) {
    flex-direction: row;
    height: 150px;
    h1 {
    }
  }

  @media (min-width: 1024px) {
    h1 {
      margin-right: -100px;
    }
  }
`;
