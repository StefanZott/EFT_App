import React, { Component } from 'react';
import { ImageBackground, Dimensions, FlatList, Text, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Style from '../Style/Style';
import ItemList from '../Components/ItemList';
import SearchInput from '../Components/SearchInput';


// Datenbankverbindung
const database = SQLite.openDatabase('eft_twelve.db');

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

  componentDidMount() {
    this._getData((rows) => {
      this.setState({ items: rows });
    });
  }

  render() {
    const navigation = this.props.navigation
    let styles = Style(Dimensions.get('window').width);


    return (
      <View style={styles.container}>
        <ImageBackground source={styles.backgroundImage} style={styles.image}>
          <View style={styles.header}>
            <TextInput
              style={styles.textInput}
              placeholder='Search for Item'
              onChangeText={text => this.setState({input: text})}
            
            />
            {console.log(this.state.input)}
          </View>
          <View style={styles.content}>
            <FlatList
              data={this.state.items}
              keyExtractor={items => items.Name} //später ID verwenden als Schlüssel
              renderItem={({ item }) => ({
                if(this.item.Name.localeCompare(this.state.input)){
                  return <ItemList item={item} onPress={() => navigation.navigate('Detail', { detail: item.Name })} />
                }
              }
                
              )}
              ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
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