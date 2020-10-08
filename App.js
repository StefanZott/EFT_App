// Imports
import React, {Component} from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as Font from 'expo-font';

// eigene Imports
import AppNavigator from './src/Navigation/AppNavigator';
import Style from './src/Style/Style';

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
    await fetch('http://it-luecke.de/EscapeFromTarkov_App/API.php');
    const resultApiCall = await fetch('http://it-luecke.de/EscapeFromTarkov_App/data.json');
    const result = await resultApiCall.json();

    console.log('TEST: ' + result.item); 

    await this._createTables(); 
    await this._checkData(result.item);
  };

  _fetchFont = () => {
    return Font.loadAsync({
      'BlackOpsOne-Regular': require('./src/assets/fonts/BlackOpsOne-Regular.ttf')
    })
  }

  // Einer von 3 Lebenszeitzyklen
  async componentDidMount() {
    // Falls Verbindung zum Internet besteht, sich die Daten von der Datenbank holen
    await this._fetchData();
    await this._fetchFont();
    
    // Nach beendigen des ladens der Daten von der Datenbank, soll der
    // Loading Screen beendet werden.
    await this.setState({isLoading: false}); 
  };

  render() {
    let styles = Style(Dimensions.get('window').width);

    if (this.state.isLoading) { 
      return (
        <View style={styles.container}>
          <View  style={styles.activityIndicator}>
            <ActivityIndicator size='large' color='orange'/>
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