import React, { useCallback, useState, useEffect } from 'react';
import { Text, Animated, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, AnimationButton } from './styles';

const FloatingButton: React.FC = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: open ? 1 : 0,
      duration: 5,
    });
  }, [animation, open]);

  const openMenu = useCallback(() => {
    Animated.spring(animation, {
      useNativeDriver: true,
      toValue: open ? 0 : 1,
      friction: 5,
    }).start();

    setOpen(!open);
  }, [open, animation]);

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const pinStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };

  const thumbStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
    ],
  };

  const infoStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -180],
        }),
      },
    ],
  };
  return (
    <>
      <Container>
        <TouchableWithoutFeedback onPress={() => console.log('press info')}>
          <AnimationButton
            type="button"
            style={infoStyle}
          >
            <Feather name="info" size={20} color="#f02a4b" />
          </AnimationButton>
        </TouchableWithoutFeedback>
      </Container>

      <Container>
        <TouchableWithoutFeedback onPress={() => console.log('press thumb')}>
          <AnimationButton
            type="button"
            style={thumbStyle}
          >
            <Feather name="thumbs-up" size={20} color="#f02a4b" />
          </AnimationButton>
        </TouchableWithoutFeedback>

      </Container>

      <Container>
        <TouchableWithoutFeedback onPress={() => console.log('press pin')}>
          <AnimationButton
            type="button"
            style={pinStyle}
          >
            <Feather name="map-pin" size={20} color="#f02a4b" />
          </AnimationButton>
        </TouchableWithoutFeedback>
      </Container>

      <Container
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}
      >
        <TouchableWithoutFeedback onPress={openMenu}>
          <AnimationButton
            type="menu"
            style={rotation}
          >
            <Feather name="plus" size={25} color="#fff" />
          </AnimationButton>
        </TouchableWithoutFeedback>
      </Container>

    </>
  );
};

export default FloatingButton;
