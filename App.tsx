/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './screens/Box';
import CartScreen from './box/Cart';
import ActionScreen from './box/Action';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CartScreen />
        <ActionScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
