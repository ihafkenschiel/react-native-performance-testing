import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const ListScreen = () => {
  const data = Array.from({length: 1000}, (_, i) => `Item ${i + 1}`);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ListScreen;
