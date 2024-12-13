import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { AppContext } from '../AppContext';

const DecrementComponent = () => {
  const { setCount } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Button
        title="Decrementar"
        onPress={() => setCount(prevCount => prevCount - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default DecrementComponent;
