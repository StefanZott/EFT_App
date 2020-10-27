// Imports
import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions, YellowBox } from 'react-native';
import * as Font from 'expo-font';

// eigene Imports
import AppNavigator from './src/Navigation/AppNavigator';
import Style from './src/Style/Style';
import db from './src/Database/db';

YellowBox.ignoreWarnings([]);

export default class App extends Component {
  state = { isLoading: true };

  _fetchData = async (myCallback) => {
    await fetch('http://it-luecke.de/EscapeFromTarkov_App/data.json')
      .then(response => response.json())
      .then(data => {
        myCallback(data)
      })
      .catch((error) => alert('FEHLER: \n' + error))
      .done()
  };

  _fetchFont = () => {
    return Font.loadAsync({
      'BlackOpsOne-Regular': require('./src/assets/fonts/BlackOpsOne-Regular.ttf')
    })
  }

  // Einer von 3 Lebenszeitzyklen
  async componentDidMount() {
    this._fetchData((data) => {
      this._fetchFont();
      db._dropTables()
      db._createTables()
      db._insterDataInRelation(data);
      this.setState({ isLoading: false });
    })
  };

  render() {
    let styles = Style(Dimensions.get('window').width);

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='large' color='orange' />
          </View>
        </View>
      )
    }

    // Navigationsstrucktur zurück geben
    // Damit die App im OPP Sinne funktioniert und mehrere Ebenen beliebig hinzugefügt wird
    // mit dem Modul NavigationContainer gearbeitet
    return <AppNavigator />;
  }
}