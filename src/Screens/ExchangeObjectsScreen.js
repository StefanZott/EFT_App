import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Dimensions, FlatList, Text, View, TextInput, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Style from '../Style/Style';

// Datenbankverbindung
const database = SQLite.openDatabase('eft.db');

export default class ExchangeObjectsScreen extends Component {
  state = {items: []};

  _getData = async (myCallback) => {
    database.transaction((tx) => {
      tx.executeSql('SELECT * FROM item', [], (
        tx,
        results
      ) => {
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

    return (
      <View style={styles.container}>
        <ImageBackground source={styles.backgroundImage} style={styles.image}>
          <View style={styles.header}>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.content}>
            <FlatList
              data={this.state.items}
              keyExtractor={item => item.ItemID}
                renderItem={({item}) => ( 
                  <Button 
                    title={`Gehe zu ${item.Name}`}
                      onPress={() => navigation.navigate('Detail', {
                        detail: item.Name
                      })}
                  />
                )}
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