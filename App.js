// Imports
import React, {Component, useState} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// eigene Imports
import AppNavigator from './JS/Navigation/AppNavigator';

export default class App extends Component {
  state = {data: [], isLoading: true };

  _fetchData = async () => {
    await new Promise(_ => setTimeout(_, 3000));
    this.setState({isLoading: false});

    const resultApiCall = await fetch('http://it-luecke.de/EscapeFromTarkov_App/object.php')
    const result = await resultApiCall.json();

    this.setState({ data: result})

    console.log(this.state.data);
  };

  // Einer von 3 Lebenszeitzyklen
  componentDidMount() {
    this._fetchData();  
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="orange"/>
        </View>
      )
    }

    // Navigationsstrucktur zurück geben
    // Damit die App im OPP Sinne funktioniert und mehrere Ebenen beliebig hinzugefügt wird
    // mit dem Modul NavigationContainer gearbeitet
    return <AppNavigator />;
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
})