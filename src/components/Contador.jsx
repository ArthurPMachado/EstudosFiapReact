import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {
  state = {
    numero: 10
  }

  incrementar = () => {
    this.setState({
      numero: this.state.numero + 1
    });
  }

  zerar = () => {
    this.setState({
      numero: this.state.numero - this.state.numero
    });
  }

  render() {
    return(
      <View>
        <Text style={{ fontSize: 25 }}>{this.state.numero}</Text>
        <TouchableHighlight
          onPress={this.incrementar}
          onLongPress={this.zerar}
        >
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}