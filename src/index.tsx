import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

// import { Container } from './styles';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar style="light" backgroundColor="#312e38" />
    <Routes />
  </NavigationContainer>
);

export default App;
