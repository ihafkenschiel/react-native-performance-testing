import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CalculationScreen = () => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    const performCalculations = () => {
      let sum = 0;
      for (let i = 0; i < 1000000; i++) {
        sum += Math.sqrt(i);
      }
      setResult(sum);
    };

    performCalculations();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Calculation Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalculationScreen;
