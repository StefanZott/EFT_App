import React, { Component } from 'react';
import { ImageBackground, Dimensions, FlatList, Text, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Style from '../Style/Style';
import ItemList from '../Components/ItemList';

// Datenbankverbindung
const database = SQLite.openDatabase('eft_twelve.db');

export default class ExchangeObjectsScreen extends Component {
  state = {items: []};

  _getData = async (myCallback) => {
    let innerJoinString = 'SELECT Name FROM table_armbands UNION SELECT Name FROM table_backpacks UNION SELECT Name FROM table_provisions UNION SELECT Name FROM table_headsets UNION SELECT Name FROM table_eyewears UNION SELECT Name FROM table_containers UNION SELECT Name FROM table_secure_containers ORDER BY Name ASC';

    database.transaction((tx) => {
      tx.executeSql(innerJoinString, [], 
      (tx,results) => {
        myCallback(results.rows._array);
      });
    });
  }

  componentDidMount() {
    this._getData((rows) => {
      this.setState({items: rows});
    });
  } 

  render() {
    const navigation = this.props.navigation
    let styles = Style(Dimensions.get('window').width);
    let text = 'Search'; 

    return (
      <View style={styles.container}>
        <ImageBackground source={styles.backgroundImage} style={styles.image}>
          <View style={styles.header}>
            <TextInput style={styles.textInput} /> 
          </View>
          <View style={styles.content}>  
            <FlatList 
              data={this.state.items}
              keyExtractor = {items => items.Name} //später ID verwenden als Schlüssel
              renderItem = {({item}) => (
                <ItemList item = {item} onPress = {() => navigation.navigate('Detail', { detail: item.Name})} />
              )}
              ItemSeparatorComponent = {() => <View style={styles.listSeparator} />}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.copyright}>Copyright by Luecke-IT</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}