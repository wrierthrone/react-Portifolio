import React from 'react';

const Projetos = () => {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="projeto">
        <h3>Sistema de Banco</h3>
        <p>Banco de dados feito em java para simular um serviço bancário. </p>
        <a href="https://github.com/wrierthrone/bank-java-jdbc">Ver Projeto</a>
      </div>
      <div className="projeto">
        <h3>Cátalogo de filmes</h3>
        <p>Sistema em java para catalogar filmes e suas informações principais.</p>
        <a href="https://github.com/wrierthrone/java-catalogo-de-filme">Ver Projetos</a>
      </div>
    </section>
  );
};

export default Projetos;
