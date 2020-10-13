// Imports
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as Icon from '@expo/vector-icons';

// Eigene Imports
import HomeStack from './HomeStack';
import ItemsStack from './ItemsStack';

// Variablen
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
      // Aufbau einer App Navigationsstrucktur
      <NavigationContainer>
        {/** 
         * Drawer Navigator ist eine Navigation von mehreren.
         * Hier wird die Navigationsmenü mit einem wischen von links nach rechts geöffnet
         */}
        <Drawer.Navigator 
          initialRouteName="Home"
          screenOptions={({route}) => {
            return {
              /**
               * Mit dieser Funtion soll die richtige Auswahl der Icons
               * in der Navigationsmenü angezeigt werden
               */
              drawerIcon: ({focused, size, color}) => {
                let icon;

                if (route.name === 'home')
                  icon = focused ? 'home' : 'home-outline';
                else if (route.name === 'items')
                  icon = focused ? 'swap-horizontal-bold' : 'swap-horizontal';
                return (
                  <Icon.MaterialCommunityIcons 
                    name={icon} 
                    size={size} 
                    color={color} 
                  />
                )
              }
            }
          }}>
          
          {/** 
           * Verschieden Routen angelegt
          */}
          <Drawer.Screen 
            name="home" 
            component={HomeStack}
            options={{title: 'home' }} 
            />
          <Drawer.Screen 
            name="items" 
            component={ItemsStack} 
            options={{title: 'Items' }}
            />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}