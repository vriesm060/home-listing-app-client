import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
        >
          <Text style={styles.price}>€200.000</Text>
          <View style={styles.yearContainer}>
            <Text style={styles.year}>2020</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    height: 300,
    margin: 10,
  },

  titleContainer: {
    height: '15%',
    padding: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },

  imageContainer: {
    width: '100%',
    height: '65%',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  price: {
    fontSize: 30,
    color: '#fff',
    margin: 10,
  },

  yearContainer: {
    margin: 10,
    backgroundColor: '#2652B0',
    height: 25,
    width: 80,
    borderRadius: 5,
  },

  year: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  descriptionContainer: {
    margin: 10,
  },

  description: {
    fontSize: 16,
    color: '#ccc',
  },
});