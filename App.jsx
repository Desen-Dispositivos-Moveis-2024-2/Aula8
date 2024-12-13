import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppProvider } from './AppContext';
import DisplayComponent from './components/DisplayComponent';
import IncrementComponent from './components/IncrementComponent';
import DecrementComponent from './components/DecrementComponent';

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <DisplayComponent />
        <IncrementComponent />
        <DecrementComponent />
      </View>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
