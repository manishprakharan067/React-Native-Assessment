import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeContainer';
import HomeDetailsScreen from '../screens/HomeDetails';

const MainStack = createNativeStackNavigator();

//Main Stack
function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name={'Home'} component={Home} />
      <MainStack.Screen
        name={'HomeDetailsScreen'}
        component={HomeDetailsScreen}
      />
    </MainStack.Navigator>
  );
}

module.exports = {
  MainStackScreen,
};
