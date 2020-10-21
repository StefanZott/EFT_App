import React, { Component } from 'react';
import { ImageBackground, Dimensions, FlatList, Text, View, TextInput, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Style from '../Style/Style';

// Datenbankverbindung
let database = SQLite.openDatabase('eft.db');

export default class ItemsScreen extends Component {
  state = {items: []};

  _getData = async (myCallback) => {
    database.transaction((tx) => {
      tx.executeSql('SELECT * FROM table_containers', [], 
      (tx,results) => { 
        console.log('_getData')
        console.log(results.rows)
        myCallback(results.rows._array)
      },
      (tx,err) => alert(err))
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
              keyExtractor={item => item.IID}
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