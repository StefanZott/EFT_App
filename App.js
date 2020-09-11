// Imports
import React, {Component} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

// eigene Imports
import AppNavigator from './src/Navigation/AppNavigator';

// Datenbankverbindung
const database = SQLite.openDatabase('eft.db');

export default class App extends Component {
  state = {isLoading: true}; 

  async _createTables() {
    let createTableItem = 'CREATE TABLE IF NOT EXISTS item (itemID INTEGER PRIMARY KEY, Name TEXT) '

    // Relation erstellen, falls sie nicht existiert
    database.transaction((transaction) => transaction.executeSql(createTableItem));
  }

  async _checkData (results)  {
    results.map((item) => (
      database.transaction((transaction) =>
        transaction.executeSql('INSERT INTO item (ItemID,Name) VALUES (?,?)',
        [item.ItemID, item.Name],
        (transaction,result) => console.log(result.insertId)
        ))
    ))
  };

  async _fetchData () {
    // Mit der Methode Fetch werden Daten von der Datenbank abgefragt  
    const resultApiCall = await fetch('http://it-luecke.de/EscapeFromTarkov_App/object.php');
    const result = await resultApiCall.json();

    await this._createTables();
    await this._checkData(result);

    // Nach beendigen des ladens der Daten von der Datenbank, soll der
    // Loading Screen beendet werden.
    this.setState({isLoading: false});
  };

  // Einer von 3 Lebenszeitzyklen
  componentDidMount() {
    // Falls Verbindung zum Internet besteht, sich die Daten von der Datenbank holen
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