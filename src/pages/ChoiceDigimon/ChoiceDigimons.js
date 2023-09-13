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
import PlusIcon from '../../assets/Other/plus.png';

const database = new DigiDB().digimonData;
const {digimons} = database;
let i = 0;

export default function ChoiceDigimon() {
  const navigation = useNavigation();
  useEffect(() => {}, [initial, final]);

  const [exceptionsDigimon, setExceptionsDigimons] = useState([
    'Kuramon',
    'Pabumon',
    'Kuramon',
    'Pabumon',
    'Kuramon',
  ]);

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

  const ExceptionDigimonComponent = name => {
    const ID = getID(name.item);
    return (
      <>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => {
            const updatedExceptionsDigimon = [...exceptionsDigimon]; // Create a copy of the array
            const indexOfItemToRemove = updatedExceptionsDigimon.indexOf(
              name.item,
            );

            if (indexOfItemToRemove !== -1) {
              updatedExceptionsDigimon.splice(indexOfItemToRemove, 1); // Remove the item
              setExceptionsDigimons(updatedExceptionsDigimon); // Update the state
              console.log(updatedExceptionsDigimon); // Log the updated array
            }
          }}>
          <Text>X</Text>
        </TouchableOpacity>
        <Image
          source={digimons[ID].image}
          style={styles.exceptionDigimonImage}
        />
      </>
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
            <View style={styles.exceptionsButton}>
              <FlatList
                style={styles.exceptions}
                data={exceptionsDigimon}
                renderItem={ExceptionDigimonComponent}
                keyExtractor={(name, index) => index.toString()}
              />
              {exceptionsDigimon.length === 0 && (
                <View style={styles.exceptions}>
                  <Image
                    source={PlusIcon}
                    style={styles.exceptionDigimonImage}
                  />
                  <Image
                    source={PlusIcon}
                    style={styles.exceptionDigimonImage}
                  />
                  <Image
                    source={PlusIcon}
                    style={styles.exceptionDigimonImage}
                  />
                  <Image
                    source={PlusIcon}
                    style={styles.exceptionDigimonImage}
                  />
                  <Image
                    source={PlusIcon}
                    style={styles.exceptionDigimonImage}
                  />
                  <Image
                    source={PlusIcon}
                    style={styles.exceptionDigimonImage}
                  />
                </View>
              )}
            </View>
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
    height: 272,
    marginBottom: 48,
  },

  exceptionsButton: {
    backgroundColor: '#005570',
    width: 355,
    borderRadius: 52,
    alignSelf: 'center',
    position: 'absolute',
    padding: 22,
    paddingHorizontal: 24,
    top: 216,
  },
  exceptions: {flexDirection: 'row'},
  exceptionDigimonImage: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#638995',
    marginHorizontal: 2,
    zIndex: 0,
  },
  removeButton: {
    position: 'absolute',
    zIndex: 1,
    flex: 1,
    backgroundColor: '#000',
    padding: 4,
    width: 24,
    left: 32,
    top: -8,
    alignItems: 'center',
    borderRadius: 100,
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
