import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// Import components
import PrimeiroComponente from './src/components/PrimeiroComponente';
import ParOuImpar from './src/components/ParOuImpar';
import Contador from './src/components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>Hello World</Text>
      <PrimeiroComponente />
      <ParOuImpar numero={4}/>
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
