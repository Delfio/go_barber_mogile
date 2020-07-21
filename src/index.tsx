import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// import { Container } from './styles';

const App: React.FC = () => (
  <>
    <StatusBar style="light" backgroundColor="#312e38" />
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <Text>Bora codaaaaaaaa</Text>
    </View>
  </>
);

export default App;
