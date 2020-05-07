import React, { useState, useEffect } from 'react';

export default props => {
  const [contador, setContador] = useState(0);
  const [imparPar, setImparPar] = useState('Par');

  useEffect(() =>{
    contador % 2 === 0 ? setImparPar('Par') : setImparPar('Impar')
  },[contador])

  return (
    <div>
      <h1>Numero: {contador}</h1>
      <h1>Paridade: {imparPar}</h1>
      <button onClick={() => setContador(contador+1)}>Inc</button>
      <button onClick={() => setContador(contador-1)}>Dec</button>
    </div>
  )
}