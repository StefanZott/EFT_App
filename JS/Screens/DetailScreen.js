import React, {Component} from 'react';
import { ImageBackground, StyleSheet, Dimensions, Text, View} from 'react-native';


export default class DetailScreen extends Component {
    render () {
        const image = { uri: "https://reactjs.org/logo-og.png" };
        const detail = this.props.route.params.detail;

        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.header}>
                    </View>
        
                    <View style={styles.content}>
                      <Text>{detail}</Text>
                      <Text>That is the DetailScreen</Text>
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
  copyright: {
    position: 'absolute',
    bottom: 50,
    color: 'white'
  }
});