import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { AppContext } from '../AppContext';

const IncrementComponent = () => {
  const { setCount } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Button
        title="Incrementar"
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default IncrementComponent;
