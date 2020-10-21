import React, { Component } from 'react';
import { ImageBackground, Dimensions, FlatList, Text, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Style from '../Style/Style';
import ItemList from '../Components/ItemList';
import SQLStrings from '../Strings/SQLStrings';

// Datenbankverbindung
const database = SQLite.openDatabase('eft_three.db');

export default class ExchangeObjectsScreen extends Component {
  state = {items: []};

  _getData = async (myCallback) => {
    let innerJoinString = 'SELECT name FROM table_armbands UNION SELECT name FROM table_backpacks UNION SELECT name FROM table_provisions UNION SELECT name FROM table_headsets UNION SELECT name FROM table_eyewears UNION SELECT name FROM table_containers UNION SELECT name FROM table_secure_containers ORDER BY name ASC';

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
        {/* console.log(this.state.items) */}
        <ImageBackground source={styles.backgroundImage} style={styles.image}>
          <View style={styles.header}>
            <TextInput style={styles.textInput} /> 
          </View>
          <View style={styles.content}>  
            <FlatList 
              data={this.state.items}
              keyExtractor = {items => items.name} //später ID verwenden als Schlüssel
              renderItem = {({item}) => (
                <ItemList item = {item} onPress = {() => navigation.navigate('Detail', { detail: item.name})} />
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