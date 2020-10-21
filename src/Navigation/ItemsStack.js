import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ItemsScreen from '../Screens/ItemScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();

export default function ItemsStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#cbcbc8',
          },
          headerTitleStyle: {
            alignSelf: 'center',
            fontFamily: 'BlackOpsOne-Regular',
            fontSize: 40
          }
        }}
      >
        <Stack.Screen 
          name="Items" 
          component={ItemsScreen}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={({route}) => {
            const detail = route.params.detail;
            return {
              headerTitle: detail,
            };
          }}
        />
      </Stack.Navigator>
  )
}