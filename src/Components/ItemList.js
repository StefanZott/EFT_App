import React from 'react'
import { Button } from 'react-native'

export default function(props){
    const {item, onPress }= props; 
    return (
        <Button 
            title={item.Name}
            onPress = {onPress}
            color='black'
        />
    );

    
}