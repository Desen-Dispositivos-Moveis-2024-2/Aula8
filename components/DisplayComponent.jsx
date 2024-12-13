import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../AppContext';

const DisplayComponent = () => {
  const { count } = useContext(AppContext);
  debugger

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contagem Atual: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default DisplayComponent;
