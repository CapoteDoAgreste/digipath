import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    padding: 16,
  },
  pictureBackground: {
    backgroundColor: '#F2FBFE',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  digimonPicture: {
    width: 128,
    height: 128,
  },
  digimonName: {
    textAlign: 'center',
    color: '#F2FBFE',
    fontWeight: 'bold',
  },
  nameSelector: {
    marginTop: 16,
    backgroundColor: '#00B9F3',
    width: 165,
    height: 30,
    padding: 4,
    borderRadius: 20,
  },
});

export default function ChoiceCard({digimon, openSelector}) {
  return (
    <View style={styles.card}>
      <View style={styles.pictureBackground}>
        <Image source={digimon.image} style={styles.digimonPicture} />
      </View>
      <TouchableOpacity style={styles.nameSelector} onPress={openSelector}>
        <Text style={styles.digimonName}>{digimon.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
