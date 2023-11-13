import React, { useState } from 'react';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

function App() {
  const [username, setUsername] = useState(''); // Estado para armazenar o nome de usuário

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h1>Meu App React</h1>
      <UsuarioEntrada username={username} onUsernameChange={handleUsernameChange} />
      <UsuarioSaida username={username} texto="Texto Exemplo" />
    </div>
  );
}

export default App;
