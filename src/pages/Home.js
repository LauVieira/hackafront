import React from 'react';

function Home() {
  return (
    <div>
      <header>
        <img src="" alt="logo" />
        {/* <Link>Encontre uma mentora</Link>
        <Link>Sou uma mentora</Link> */}
      </header>
      <section className="hero">
        <h2>POTENCIALIZANDO ENCONTROS</h2>
        <h2>TRANSFORMANDO VIDAS</h2>
      </section>
      <h1>
        MENTORIA
        <strong>GRATUITA</strong>
        {' '}
        DE TECNOLOGIA PARA MULHERES
      </h1>
      <h2>Conecte-se com especialistas para esclarecer suas dúvidas</h2>
      <div>
        <div>
          <p>
            Sabemos as dificuldades que mulheres enfrentam no
            mercado de tecnologia e o quão difícil pode ser
            planejar sua carreira. Estamos aqui para te dizer:
            {' '}
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
        </div>
      </div>
    </div>
  );
}

export default Home;
