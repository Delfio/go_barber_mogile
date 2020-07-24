/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useRef, useCallback, useEffect, useState,
} from 'react';
import {
  Image, View, KeyboardAvoidingView, Platform, ScrollView, Animated, Keyboard, TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';

import {
  Container,
  Title,
  BackToSignInContainer,
  BackToSignInText,
  BackToSignInContainerButton,
} from './styles';

const SignUp: React.FC = () => {
  const [animation, _] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const HideView = useCallback(() => {
    Animated.timing(
      animation,
      {
        useNativeDriver: true,
        toValue: open ? 0 : 1,
        duration: 500,
      },
    ).start();
    setOpen(!open);
  }, [animation, open]);

  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', HideView);
    Keyboard.addListener('keyboardDidHide', HideView);
    return () => {
      Keyboard.removeListener('keyboardDidShow', HideView);
      Keyboard.removeListener('keyboardDidHide', HideView);
    };
  }, [HideView]);

  return (
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
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} style={{ width: '100%' }} onSubmit={handleSubmit}>
              <Input
                autoCorrect={false}
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Seu Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="Seu E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Seu Senha"
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmPasswordInputRef.current.focus();
                }}
                textContentType="newPassword"
              />
              <Input
                ref={confirmPasswordInputRef}
                secureTextEntry
                name="confirm-password"
                icon="lock"
                placeholder="Confirmar sua senha"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current.submitForm()}
                textContentType="newPassword"
              />

              <Button onPress={() => formRef.current.submitForm()}>
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignInContainerButton onPress={() => navigation.goBack()}>
        <Animated.View style={{
          transform: [
            { scale: open ? 0 : 1 },
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 350],
              }),
            },
          ],
          flexDirection: 'row',
        }}
        >
          <BackToSignInContainer>

            <Feather name="arrow-left" size={20} color="#fff" />
            <BackToSignInText>Já possuo uma conta</BackToSignInText>
          </BackToSignInContainer>
        </Animated.View>
      </BackToSignInContainerButton>
    </>

  );
};

export default SignUp;
