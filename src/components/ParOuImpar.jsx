import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ParOuImpar extends Component {
  render() {
    return(
      <View>
        {
          this.props.route.params.numero % 2 === 0 ? 
          <Text style={{ fontSize: 40 }}>Par</Text>
          : <Text style={{ fontSize: 40 }}>Impar</Text>
        }
        <Button
          title="Contador"
          onPress={() => this.props.navigation.navigate("Contador")}
        />
      </View>
    );
  }
}
