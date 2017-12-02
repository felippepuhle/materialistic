import * as React from 'react';

import { Button, Form, TextInput, Loading } from '../common';
import routeTo from '../../router/utils/routeTo';

import type { ContextRouter } from 'react-router-dom';

type Props = {} & ContextRouter;

type State = {
  isLoading: boolean,
};

class Login extends React.PureComponent<Props, State> {
  state = {
    isLoading: false,
  };

  onSubmit = () => {
    const { history } = this.props;

    this.setState({ isLoading: true });

    setTimeout(() => {
      history.push(routeTo('dashboard'));

      this.setState({ isLoading: false });
    }, 3000);
  };

  render() {
    const { isLoading } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Loading visible={isLoading} />

        <TextInput placeholder="Digite seu usuário" />
        <TextInput placeholder="Digite sua senha" />

        <Button>Entrar</Button>
      </Form>
    );
  }
}

export default Login;
