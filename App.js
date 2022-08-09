/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackScreen} from './root/NavigationRoutes';
import {Provider} from 'react-redux';
import store from './redux/Store';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Main" component={MainStackScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  spinnerWrapperView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
