import React from 'react';
import { Image , View } from 'react-native';

export default function getImage(name , style) {
  
    
      switch (name) {
        case '"Fierce Hatchling" moonshine':
          return <View style={style.contentDetailTop , {height: style.image64x127.height}}> 
                    <Image
                      source={require('../assets/images/itemImage/Fierce_Hatchling_moonshine.png')}
                    />
                  </View>

        case '6SH118 raid backpack':
          return <View style={style.contentDetailTop , {height: style.image250x292.height}}>
                    <Image
                      source={require('../assets/images/itemImage/6SH118_Icon.png')}
                    />
                  </View> 

        case 'Mystery Ranch Blackjack 50 backpack (multicam)':
          return <View style={style.contentDetailTop , {height: style.image250x350.height}}>
                    <Image
                      source={require('../assets/images/itemImage/Mystery_Ranch_Blackjack_50_backpack_icon.png')}
                    />
                  </View> 
                  
        default:
          return <View style={style.contentDetailTop , {height: style.mageUnkown.height}}>
                    <Image
                      source={require('../assets/images/itemImage/unknown.png')}
                    />
                  </View>
      }
  }