import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ExchangeObjectsScreen from '../Screens/ExchangeObjectsScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();

export default function ExchangeStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleStyle: {
            alignSelf: 'center',
            fontFamily: 'BlackOpsOne-Regular',
            fontSize: 40
          }
        }}
      >
        <Stack.Screen 
          name="ExchangeObjects" 
          component={ExchangeObjectsScreen}
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