import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import components
import PrimeiroComponente from './components/PrimeiroComponente';
import ParOuImpar from './components/ParOuImpar';
import Contador from './components/Contador';

const AppStack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return(
      <NavigationContainer>
        <AppStack.Navigator 
          headerMode="none"
          initialRouteName="PrimeiroComponente" 
        >
          <AppStack.Screen name="PrimeiroComponente" component={PrimeiroComponente}/>
          <AppStack.Screen 
            name="ParOuImpar" 
            component={ParOuImpar}
            initialParams={{
              numero: 4
            }}  
          />
          <AppStack.Screen name="Contador" component={Contador}/>
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}