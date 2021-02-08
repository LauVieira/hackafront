import styled from 'styled-components';

export const Main = styled.main`
  background-color: #A67777;
  min-height: 100vh;
  font-size: 1.2em;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  .secondary {
    align-items: flex-start;
    background-color: #A67777;
    display: flex;
    height: 100%;
    justify-content: space-around;
    padding-top: 10%;
    width: 100%;
  }

  .signup-section {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    line-height: 1.5em;
    width: 50%;
  }

  .greeting {
    color: #F2BDC1;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 2em;
  }

  .end-text {
    align-self: flex-end;
  }

`;

export const AlignmentDiv = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;

  p {
    margin: 12% 0 10px 0;
    text-align: right;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
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

export const Form = styled.form`
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 30%;

  input {
    color: black;
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 10px 0;
    border-radius: 5px;
    width: 100%;
  }
`;
