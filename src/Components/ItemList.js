import React from 'react'
import { Button, View } from 'react-native'

export default function(props){
    const {item, onPress }= props; 
    return (
        <View style={{marginBottom: 5}}>
            <Button 
                title={item.Name}
                onPress = {onPress}
                color='black'
            />
        </View>
    );

    
}