import React from 'react';

import Filho from './Filho'

export default props => {

  const notificarSaidaFilho = lugar => alert(`Vou sair para ${lugar}`);

  return (
    <>
      <Filho notificarSaida = {notificarSaidaFilho} />
    </>
  )
}