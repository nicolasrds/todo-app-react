import React from 'react';

export default props => {

  const nomes = ['Ana', 'Joao', 'Marcela', 'Nicolas'];

  const gerarLista = itens => itens.map(item => <li>{item}</li>);

  return (
    <ul>
      {gerarLista(nomes)}
    </ul>
  )
}
