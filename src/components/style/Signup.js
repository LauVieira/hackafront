import styled from 'styled-components';

export const Main = styled.main`
  background-color: #A67777;
  height: 100vh;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  h3 {
    color: #F2BDC1;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 2em;
  }

  .secondary {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
    width: 100%;
  }
`;

export const RoleCheck = styled.div`
  align-self: flex-start;
  justify-content: center;
  color: #FFFFFF;
  width: 30%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.5em;
    margin-bottom: 2em;
  }

  .btn-container {
    display: flex;
    justify-self: flex-start;
  }
`;

export const Button = styled.button`
  background-color: #F2BDC1;
  border-radius: 5px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 200px;

  &:disabled {
    opacity: 0.6;
  }
`;

export const ButtonRight = styled.button`
  background-color: #FFF;
  border-radius: 5px;
  color: #000;
  display: flex;
  justify-content: center;
  margin-right: 1em;
  padding: 10px;
  width: 200px;
`;

export const Form = styled.form`
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 40vw;

  input {
    color: black;
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 20px 0;
    border-radius: 5px;
    width: 100%;
  }
`;
