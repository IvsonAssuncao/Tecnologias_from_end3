import React from 'react';

const UsuarioSaida = (props) => {
  return (
    <div>
      <p>Nome de Usuário: {props.username}</p>
      <p>Texto Qualquer: {props.texto}</p>
    </div>
  );
};

export default UsuarioSaida;
