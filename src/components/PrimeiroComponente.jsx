import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class PrimeiroComponente extends Component {
  render() {
    return(
      <View>
        <Text style={styles.titulo}>Meu primeiro componente está funcionando</Text>
        <Text style={styles.paragrafo}>Só mais um texto</Text>

        <Button 
          title="ParOuImpar"
          onPress={() => this.props.navigation.navigate("ParOuImpar")}
        />
        <Button 
          title="Contador"
          onPress={() => this.props.navigation.navigate("Contador")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    fontStyle: "italic",
    color: "#8531AB"
  }, 
  paragrafo: {
    fontSize: 20,
    color: "#8531AB"
  }
});