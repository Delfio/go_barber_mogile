import React from 'react';
import {
  Image, View, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';
import {
  Container,
  Title,
  ForgotPasswordContainer,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
          enabled
        >
          <ScrollView
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <Container>
              <Image resizeMethod="resize" source={logoImg} />

              <View>
                <Title>Faça seu Logon</Title>
              </View>

              <Input name="e-mail" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => console.log('deu')}>
                Entrar
              </Button>

              <ForgotPasswordContainer>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPasswordContainer>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>

        {/**
               * TODO -
               * Retirar da tela o botão de Criar nova conta quando o teclado é invocado,
               * pois no android atrapalha
               *
               * ANIMAR A RETIRADA
               */
            }
        <CreateAccountButton onPress={() => {
          navigation.navigate('SignUp');
        }}
        >
          <Feather name="log-in" size={20} color="#ff9000" />
          <CreateAccountText>Criar uma nova conta</CreateAccountText>
        </CreateAccountButton>
      </>
    )
  );
};

export default SignIn;
