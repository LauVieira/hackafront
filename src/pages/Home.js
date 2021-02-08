import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
          <h2>POTENCIALIZANDO ENCONTROS</h2>
          <h2>TRANSFORMANDO VIDAS</h2>
      </section>
      <h1>
        MENTORIA
        <strong>GRATUITA</strong>
        DE TECNOLOGIA PARA MULHERES
      </h1>
      <h2>Conecte-se com especialistas para esclarecer suas dúvidas</h2>
      <div>
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
          <img src="" alt="mulheres diversas" />
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
      </div>
    </div>
  );
}

export default Home;
