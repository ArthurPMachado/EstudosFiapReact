import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ParOuImpar extends Component {
  render() {
    return(
      <View>
        {
          this.props.numero % 2 === 0 ? 
          <Text>Par</Text>
          : <Text>Impar</Text>
        }
      </View>
    );
  }
}
