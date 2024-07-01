import React, {useRef} from 'react';
import {View, Animated, Button, StyleSheet} from 'react-native';

const AnimationScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadingContainer, {opacity: fadeAnim}]}>
        <View style={styles.fadingBox} />
      </Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadingContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'powderblue',
    marginBottom: 20,
  },
  fadingBox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default AnimationScreen;
