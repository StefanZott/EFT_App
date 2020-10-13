import React, {Component} from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';

import Style from '../Style/Style';

export default class HomeScreen extends Component {
  render() {
    let style = Style(Dimensions.get('window').width);
    return (
      <View style={style.container}>
        <ImageBackground source={style.backgroundImage} style={style.image}>
          <Text style={style.copyright}>Copyright by Luecke-IT</Text> 
        </ImageBackground>  
      </View>
    );
  }  
}