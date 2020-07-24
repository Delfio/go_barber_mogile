import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';
import { AppLoading } from 'expo';
import FloatingButton from './components/FloatingButton';

import Routes from './routes';

// import { Container } from './styles';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular, RobotoSlab_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#312e38" />
      <Routes />
      <FloatingButton />
    </NavigationContainer>
  );
};

export default App;
