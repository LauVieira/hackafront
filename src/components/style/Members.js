import styled from 'styled-components';

export const Main = styled.main`
  background-color: #FFFFFF;
  height: 100vh;
  font-size: 1.2em;
  padding-top: 5%;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.5em;
    color: #A67777;
    margin-bottom: 5%;
  }

  h4 {
    font-size: 0.8em;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 1% 10%;
  width: 100%;
  margin: 2%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
  }

  img {
    width: 100px;
  }

  button {
    background-color: #C1B39F;
    color: #FFFFFF;
    font-size: 0.8em;
    font-weight: 700;
    padding: 5px;
  }

`;
