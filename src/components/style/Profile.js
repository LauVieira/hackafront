import styled from 'styled-components';

export const Main = styled.main`
  background-color: #A67777;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 8%;
  font-size: 1.2em;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  h3 {
    color: #F2BDC1;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 2em;
  }
`;

export const PhotoSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;

  img {
    max-width: 80%;
    max-height: 80%;
    border-radius: 25%;
  }

  .img-form {
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 100%;
  }

  input {
    color: black;
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 20px 0;
    border-radius: 5px;
    width: 100%;
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

export const Form = styled.form`
  margin-left: 10%;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 60%;

  input {
    color: black;
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 20px 0;
    border-radius: 5px;
    width: 100%;
  }

  select {
    color: black;
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 20px 0;
    border-radius: 5px;
    width: 100%;
  }

  .first-part {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .first-column {
    width: 50%;
    margin-right: 5%;
  }

  .second-column {
    width: 50%;
    margin-left: 5%;
  }
`;

export const Final = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    color: black;
    background-color: #FFFFFF;
    padding: 10px;
    margin: 5px 0 20px 0;
    border-radius: 5px;
    width: 100%;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }
`;
