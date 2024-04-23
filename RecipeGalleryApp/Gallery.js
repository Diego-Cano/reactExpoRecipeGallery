import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { images } from './imageList'; 

const Gallery = () => {
  const [index, setIndex] = useState(0); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>10 Most Popular Dishes in Venezuela</Text>
      <Image source={{ uri: images[index].url }} style={styles.image} />
      <Text style={styles.description}>{images[index].description}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBorder}>
          <Button
            title="Previous"
            onPress={() => {
              if (index > 0) setIndex(index - 1);
            }}
            color="#ff6347" 
          />
        </View>
        <View style={styles.buttonBorder}>
          <Button
            title="Next"
            onPress={() => {
              if (index < images.length - 1) setIndex(index + 1);
            }}
            color="#ff6347" 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffe4c4', 
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#800000', 
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },

  description: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2f4f4f', 
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },

  buttonBorder: {
    borderWidth: 2,
    borderColor: '#800000',
    borderRadius: 5, 
    overflow: 'hidden' 
  }
});

export default Gallery;
