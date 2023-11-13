import React from 'react';

const UsuarioEntrada = (props) => {
  return (
    <div>
      <label>
        Nome de Usuário:
        <input
          type="text"
          value={props.username}
          onChange={props.onUsernameChange}
        />
      </label>
    </div>
  );
};

export default UsuarioEntrada;
