/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import {
  Image, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert,
} from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import getValidationErros from '../../utils/getValidationErros';

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

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(async (data: SignInFormData): Promise<void> => {
    try {
        formRef.current?.setErrors({});

        const schemaValidation = Yup.object().shape({
          email: Yup.string().required('Email obrigatório').email('E-mail inválido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schemaValidation.validate(data, {
          abortEarly: false,
        });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, cheque suas credênciais!');
    }
  }, []);

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
              <Form style={{ width: '100%' }} onSubmit={handleSignIn} ref={formRef}>
                <Input
                  name="email"
                  icon="mail"
                  keyboardType="email-address"
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current.focus();
                  }}
                />
                <Input
                  ref={passwordInputRef}
                  name="password"
                  secureTextEntry
                  onSubmitEditing={() => formRef.current.submitForm()}
                  icon="lock"
                  placeholder="Senha"
                  returnKeyType="send"
                />

                <Button onPress={() => formRef.current?.submitForm()}>
                  Entrar
                </Button>
              </Form>
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
