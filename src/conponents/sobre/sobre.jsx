import React from 'react';
import eu from './eu.jpeg'

function Sobre(){
  return (
    <section id="sobre">
      <h2>Sobre Mim</h2>
      <img src={eu} alt="Minha Foto" style={{ width: '30%', height: 'auto' }} />
      <p>
      Meu nome é Gustavo Kowalschuk, estou cursando o Esnsino Médio com curso técnico em Desenvolvimento de Sistemas. <br /> 
      Tenho interesse em diversas áreas da computação, principalmente o setor de dados.<br/>
      </p>
    </section>
  );
};

export default Sobre;
