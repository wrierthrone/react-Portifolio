import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Projetos from './components/Projeto'
import Sobre from './components/Sobre'
import Contato from './components/Contatos'

function App() {
  const [darkMode, setDarkMode] = useState (false)

  const toggleTheme = () => setDarkMode(!darkMode);

  const projetos = [
    { title: 'Projetos 1', description: 'Descrição do projeto 1', link: '#'},
    { title: 'Projetos 2', description: 'Descrição do projeto 2', link: '#'}
  ];

  {/*Mapear a lista de projetos */}
  <section id="projetos">
    <h2>Projetos</h2>
    {projetos.map((proj, index) => (
      <Projetos key={index} {...prof}/>
    ))}
  </section>

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleTheme}>Alterar Tema</button>
      {/* Outros componentes */}
    </div>
  );
}

export default App
