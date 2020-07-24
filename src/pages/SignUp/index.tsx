import React, {
  useRef, useCallback, useEffect, useState,
} from 'react';
import {
  Image, View, KeyboardAvoidingView, Platform, ScrollView, Animated, Keyboard,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
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

  const teste = useCallback(() => {
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

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', teste);
    Keyboard.addListener('keyboardDidHide', teste);
    return () => {
      Keyboard.removeListener('keyboardDidShow', teste);
      Keyboard.removeListener('keyboardDidHide', teste);
    };
  }, [teste]);

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

            <Input name="name" icon="user" placeholder="E-mail" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button>
              Entrar
            </Button>
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
      <BackToSignInContainerButton>
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
