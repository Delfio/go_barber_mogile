import styled, { css } from 'styled-components/native';
import { Platform, Dimensions, Animated } from 'react-native';
// import {} from 'expo-constants';

const { OS } = Platform;
const { width: ScreenWidth } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #f4ede8;
  font-family: 'RobotoSlab_500Medium';
  margin: 64px 0 24px;
`;

export const BackToSignInContainerButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  ${OS === 'ios' && Math.round(ScreenWidth) >= 2000 ? css`
    padding: 16px 0 20px;
  ` : null}
`;

export const BackToSignInContainer = styled.View`
  flex:1;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab_400Regular';
  margin-left: 16px;
`;

export const ViewAnimated = styled(Animated.View)`


`;
