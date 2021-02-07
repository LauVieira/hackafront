import styled from 'styled-components';

export const Main = styled.main`
  background-color: #FFFFFF;
  height: 100vh;
  font-size: 1.2em;
  padding-top: 10%;

  h3 {
    font-size: 1.5em;
    color: #A67777;
    font-weight: bold;
    margin-bottom: 5%;
  }
`;

export const AllCategories = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-around;
  color: #FFFFFF;

  .category-0, .category-4, .category-8 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 150px;
    background-color: #F2BDC1;
  }

  .category-1, .category-5 {
    background-color: #C4C4C4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 150px;
    ;
  }

  .category-2, .category-6 {
    background-color: #A67777;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 150px;
    ;
  }

  .category-3, .category-7 {
    background-color: #C1B39F;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 150px;
    ;
  }
`;
