import * as React from 'react';

import { Button, TextInput } from '../common';

const Login = () => (
  <div>
    <TextInput placeholder="Digite seu usuário" />
    <TextInput placeholder="Digite sua senha" />

    <Button>Entrar</Button>
  </div>
);

export default Login;
