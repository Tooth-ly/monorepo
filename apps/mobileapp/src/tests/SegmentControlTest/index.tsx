import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentControl from '../../components/SegmentControl';
 
const One = () => {
  return <Text style={styles.text}>This is first view</Text>;
};
const Two = () => {
  return <Text style={styles.text}>This is second view</Text>;
};
const Three = () => {
  return <Text style={styles.text}>This is third view</Text>;
};
const segments = [
  {
    title: 'One',
    view: One
  },
  {
    title: 'Two',
    view: Two
  }, {
    title: 'Three',
    view: Three
  }
];
const App = () => {
  return (
    <View style={styles.container}>
      <SegmentControl
      segments={segments}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    margin: 50,
    height: '100%'
  }
});
 
export default App;