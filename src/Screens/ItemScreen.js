import React, { Component } from 'react';
import { ImageBackground, Dimensions, FlatList, ActivityIndicator, Text, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Style from '../Style/Style';
import ItemList from '../Components/ItemList';


// Datenbankverbindung
const database = SQLite.openDatabase('eft_fourteen.db');

export default class ExchangeObjectsScreen extends Component {
  state = { items: [], input: '' };

  _getData = async (myCallback) => {
    let innerJoinString = 'SELECT name FROM table_armbands UNION SELECT name FROM table_backpacks UNION SELECT name FROM table_provisions UNION SELECT name FROM table_headsets UNION SELECT name FROM table_eyewears UNION SELECT name FROM table_containers UNION SELECT name FROM table_secure_containers ORDER BY name ASC';

    database.transaction((tx) => {
      tx.executeSql(innerJoinString, [],
        (tx, results) => {
          myCallback(results.rows._array);
        });
    });
  }

  _createFlatlist = ({ item }) => {
    let name = item.Name.toLowerCase();
    let reInput = this.state.input.toLowerCase()

    if (name.indexOf(reInput) !== -1) {
      return <ItemList item={item} onPress={() => this.props.navigation.navigate('Detail', { detail: item.Name })} />
    }
  }

  componentDidMount() {
    this._getData((rows) => {
      this.setState({ items: rows });
    });
  }

  render() {
    let styles = Style(Dimensions.get('window').width);

    if (this.state.items.length > 0) {
      return (
        <View style={styles.container}>
          <ImageBackground source={styles.backgroundImage} style={styles.image}>
            <View style={styles.header}>
              <TextInput
                style={styles.textInput}
                placeholder='Search for Item'
                onChangeText={text => this.setState({ input: text })}

              />
            </View>
            <View style={styles.content}>
              <FlatList
                data={this.state.items}
                keyExtractor={items => items.Name} //später ID verwenden als Schlüssel
                renderItem={this._createFlatlist}
              />
            </View>
            <View style={styles.footer}>
              <Text style={styles.copyright}>Copyright by Luecke-IT</Text>
            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='large' color='orange' />
          </View>
        </View>
      )
    }


  }
}