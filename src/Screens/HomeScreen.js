import React, {Component} from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Home extends Component {
  render() {
    const image = { uri: "https://reactjs.org/logo-og.png" };
    
    return (
      <View style={styles.container}>
      
      <ImageBackground source={image} style={styles.image}>
          <Text style={styles.copyright}>Copyright by Luecke-IT</Text>
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
  copyright: {
    position: 'absolute',
    bottom: 50,
    color: 'white'
  }
});