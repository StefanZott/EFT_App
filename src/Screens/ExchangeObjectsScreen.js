import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Dimensions, FlatList, Text, View, TextInput, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

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
    const image = { uri: "https://reactjs.org/logo-og.png" };
    const navigation = this.props.navigation

    return (
      <View style={styles.container}>
      
      <ImageBackground source={image} style={styles.image}>
        
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

          {/* { this.state.items == null ?
            <FlatList
              data={this.state.items}
                renderItem={({item}) => (
                  <Button 
                    title={`Gehe zu ${item.title}`}
                      onPress={() => navigation.navigate('Detail', {
                        detail: item.title
                      })}
                  />
                )}
            />
            :
            <View> 
              <Text style={styles.content}>
                Keine Eindräge gefunden!
                {console.log(this.state.items)}
              </Text>
            </View>
          } */}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.copyright}>Copyright by Luecke-IT</Text>
        </View>

      </ImageBackground>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width
  },
  image: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: Dimensions.get('screen').width,
    height: '10%',
    alignItems: 'center'
  },
  content: {
    width: Dimensions.get('screen').width,
    height: '80%',
    padding: 10
  },
  footer: {
    width: Dimensions.get('screen').width,
    height: '10%',
    alignItems: 'center'
  },
  textInput: {
    position: 'absolute',
    top: 50,
    height: 30,
    width: '80%',
    backgroundColor: 'white'
  },
  copyright: {
    position: 'absolute',
    bottom: 50,
    color: 'white'
  }
});