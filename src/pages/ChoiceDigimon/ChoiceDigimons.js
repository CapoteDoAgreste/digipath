/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {findPath, getID} from '../../scripts/DigiPath';
import DigiDB from '../../mocks/DigiDB';
import ChoiceCard from './components/ChoiceCard';
import {useNavigation} from '@react-navigation/native';

const database = new DigiDB().digimonData;
const {digimons} = database;
let i = 0;

export default function ChoiceDigimon() {
  const navigation = useNavigation();
  useEffect(() => {}, [initial, final]);

  const [initial, setDigimon01] = useState(digimons[i]);
  const [final, setDigimon02] = useState(digimons[6]);

  const openSelectorDigimon01 = () => {
    const setDigimon = setDigimon01;
    navigation.navigate('DigimonSelector', {list: digimons, set: setDigimon});
  };
  const openSelectorDigimon02 = newDigimon => {
    const setDigimon = setDigimon02;
    navigation.navigate('DigimonSelector', {list: digimons, set: setDigimon});
  };

  let path = findPath(initial.name, final.name, []);

  const PathCard = name => {
    const ID = getID(name.item);

    return (
      <TouchableOpacity
        style={styles.pathCard}
        onPress={() => navigation.navigate('DigimonProfile', digimons[ID])}>
        <View style={styles.pathCardImageBackground}>
          <Image source={digimons[ID].image} style={styles.pathCardImage} />
        </View>
        <Text style={styles.pathCardText}>{name.item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        style={styles.pathList}
        data={path}
        renderItem={PathCard}
        keyExtractor={(name, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.topArea}>
            <View style={styles.choiceCards}>
              <ChoiceCard
                digimon={initial}
                openSelector={openSelectorDigimon01}
              />
              <ChoiceCard
                digimon={final}
                openSelector={openSelectorDigimon02}
              />
            </View>
            <TouchableOpacity style={styles.pathButton}>
              <Text style={styles.pathButtonText}>Make Digipath</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  choiceCards: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 4,
  },
  topArea: {
    backgroundColor: '#007FA7',
    paddingBottom: 20,
    zIndex: 0,
  },

  pathButton: {
    backgroundColor: '#FFC733',
    width: 355,
    height: 48,
    borderRadius: 32,
    alignSelf: 'center',
    alignItems: 'center',
  },
  pathButtonText: {
    padding: 14,
    color: '#F2FBFE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pathCard: {
    height: 96,
    width: 360,
    alignSelf: 'center',
    backgroundColor: '#00B9F3',
    margin: 8,
    borderRadius: 64,
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  pathCardImage: {
    height: 64,
    width: 64,
    borderRadius: 32,
    ShadowRadius: 16,
  },
  pathCardImageBackground: {
    marginVertical: 16,
    backgroundColor: '#F2FBFE',
    width: 64,
    left: 16,
    borderRadius: 32,
  },
  pathCardText: {
    fontSize: 26,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#F2FBFE',
  },
  list: {
    flex: 1,
  },
});
