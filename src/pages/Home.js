import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

function Home() {
  return (
    <div>
      <Header />
      <Main>
        <section className="hero">
          <h2 className="first">POTENCIALIZANDO ENCONTROS</h2>
          <h2 className="second">TRANSFORMANDO VIDAS</h2>
        </section>
        <Title>
          <h1>
            MENTORIA
            <strong> GRATUITA </strong>
            DE TECNOLOGIA PARA MULHERES
          </h1>
          <h2>Conecte-se com especialistas para esclarecer suas dúvidas</h2>
        </Title>
        <FirstPart>
          <div>
            <p>
              Sabemos as dificuldades que mulheres enfrentam no
              mercado de tecnologia e o quão difícil pode ser
              planejar sua carreira. Estamos aqui para te dizer:
            </p>
            <h3><strong>VOCÊ NÃO ESTÁ SOZINHA!</strong></h3>
            <p>
              Aqui você encontra mulheres fantásticas que estão
              trabalhando com tecnologia e podem bater um papo
              com você sobre o seu momento profissional.
            </p>
          </div>
          <div>
            <img src="/images/women.png" alt="mulheres diversas" />
            <button
              onClick={() => history.push('/login')}
            >
              Quero agendar uma mentoria
            </button>
          </div>
          <div>
            <img src="/images/image 9.png" alt="gráfico de atributos" />
            <button
              onClick={() => history.push('/login')}
            >
              Quero ser uma mentora
            </button>
          </div>
        </FirstPart>
        <div>
          <p>
            Compartilhe seus conhecimentos com a comunidade e
            ajude outras mulheres a crescerem.
          </p>
          <h3><strong>AQUI VOCÊ DESENVOLVE SUA LIDERANÇA</strong></h3>
          <p>
            Essa também é uma oportunidade para você desenvolver 
            suas habilidades comportamentais e dar um passo 
            em sua carreira.
          </p>
        </div>
      </Main>
    </div>
  );
}

export default Home;

export const Main = styled.main`
  background-color: #FFFFFF;
  height: 100vh;
  font-size: 1.2em;
  padding-top: 5%;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero {
    width: 100%;
    padding: 10% 0; 
    background-image: url("/images/hero.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .first {
    margin-left: 3%;
    color: #F2BDC1;
    background-color: #000000;
    padding: 10px;
  }

  .second {
    margin-right: 3%;
    color: #F2BDC1;
    background-color: #000000;
    padding: 10px;
  }
`;

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2%;

  h1 {
    font-size: 2em;
    font-weight: 700;
  }

  strong {
    color: #A67777;
  }

  h2 {
    font-weight: 300;
    font-size: 2.5em;
    color: #C1B39F;
  }

`;

export const FirstPart = styled.div`
  display: flex;
  margin-top: 10%;

`;