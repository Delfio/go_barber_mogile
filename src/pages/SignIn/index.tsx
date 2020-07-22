import React from 'react';
import { Image, Text } from 'react-native';
import logoImg from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';
import { Container, Title } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />
    <Title>SignIn</Title>

    <Input name="e-mail" icon="mail" placeholder="E-mail" />
    <Input name="password" icon="lock" placeholder="Senha" />

    <Button onPress={() => console.log('deu')}>
      Entrar
    </Button>
  </Container>
);

export default SignIn;
