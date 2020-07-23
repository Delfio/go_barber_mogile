import styled, { css } from 'styled-components/native';

import { Animated } from 'react-native';

interface TypeButton {
  type?: 'menu' | 'button'
}

const ButtonTypeColor = {
  menu: css`
    background-color: #ff6000;
    width: 50px;
    height: 50px;
    border-radius: 50px;

  `,
  button: css`
    background-color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50px;
  `,
};

export const Container = styled.View`
  position: absolute;
  bottom: 35px;
  right: 25px;

`;

export const AnimationButton = styled(Animated.View)<TypeButton>`
  ${(props) => ButtonTypeColor[props.type || 'menu']}
  justify-content: center;
  align-items: center;
`;
