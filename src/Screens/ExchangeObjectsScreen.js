import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Dimensions, FlatList, Text, View, TextInput, Button } from 'react-native';

export default class ExchangeObjectsScreen extends Component {
  state = {items: []}

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

          { this.state.items === null ?
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
              </Text>
            </View>
          }
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