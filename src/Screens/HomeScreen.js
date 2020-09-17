import React, {Component} from 'react';
import { ImageBackground, Text, View, Dimensions } from 'react-native';

import BackgroundImage from '../assets/images/eft_480.png';
import HandyStyle from '../Style/handyStyle';

export default class Home extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width; 
    let container;
    let image;
    let copyright;

    if (screenWidth <= 480) {
      console.log(Dimensions.get('window').height)
      container = HandyStyle.container;
      image = HandyStyle.image;
      copyright = HandyStyle.copyright;
    } else if (screenWidth <= 1024) {
      
    } else if (screenWidth > 1024) {
      
    }
    
    return (
      <View style={container}>
        <ImageBackground source={BackgroundImage} style={image}>
          <Text style={copyright}>Copyright by Luecke-IT</Text>
        </ImageBackground>
      </View>
    );
  }  
}