import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

import Card from '../components/Card';

export default function HomeListScreen(props) {
  return (
    <View style={styles.container}>
      <Card />
      <FloatingAction
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() => console.log('clicked')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});