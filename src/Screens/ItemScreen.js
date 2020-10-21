import React, { Component } from 'react';
import { ImageBackground, Dimensions, FlatList, Text, View, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Style from '../Style/Style';
import ItemList from '../Components/ItemList';

// Datenbankverbindung
const database = SQLite.openDatabase('eft.db');

export default class ExchangeObjectsScreen extends Component {
  /* state = {items: []};

  _getData = async (myCallback) => {
    database.transaction((tx) => {
      tx.executeSql('SELECT * FROM item', [], 
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
 */
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
           {/*  <FlatList
              data={this.state.items}
              keyExtractor={item => item.ItemID}
                renderItem={({item}) => ( 
                  <Text 
                    style={styles.button}  
                    onPress={() => navigation.navigate('Detail', {
                      detail: item.Name
                    })}
                  >
                    {item.Name} 
                  </Text>  
                )}
            /> */}
            <FlatList 
              data = {[
                {id: '1', name: 'soap'},
                {id: '2', name: 'battery'},
                {id: '3', name: 'knife'},
              ]}
              keyExtractor = {item => item.id} //später ID verwenden als Schlüssel
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