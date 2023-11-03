/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getID} from '../../../scripts/DigiPath';
import Plus from '../../../assets/Other/plus.png';
import {useNavigation} from '@react-navigation/native';

export function ExceptionDigimon({
  exceptions,
  removeExceptions,
  addException,
  digimons,
}) {
  useEffect(() => {
    let nPlusNumber = [];
    for (let index = exceptions.length; index < 6; index++) {
      nPlusNumber.push(index);
    }
    setPlusNumber(nPlusNumber);
  }, [exceptions]);

  const [plusNumber, setPlusNumber] = useState([]);

  const ExceptionDigimon = name => {
    const ID = getID(name.item);
    return (
      <View style={styles.exceptionsItem}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => {
            removeExceptions(name);
          }}>
          <Text>X</Text>
        </TouchableOpacity>
        <Image
          source={digimons[ID].image}
          style={styles.exceptionDigimonImage}
        />
      </View>
    );
  };

  const navigation = useNavigation();

  const EmptyComponent = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DigimonSelector', {
            list: digimons,
            set: addException,
          });
        }}>
        <Image source={Plus} style={styles.exceptionDigimonImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.exceptionContainer}>
      <Text style={styles.exceptionsTitle}>Exceptions:</Text>
      <View style={styles.exceptionsView}>
        <FlatList
          data={exceptions}
          renderItem={ExceptionDigimon}
          style={{flexDirection: 'row'}}
        />
        <FlatList
          data={plusNumber}
          renderItem={EmptyComponent}
          style={{flexDirection: 'row'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exceptionContainer: {
    width: 360,
    borderRadius: 64,
    alignSelf: 'center',
    backgroundColor: '#005570',
    padding: 16,
  },
  exceptionsTitle: {
    color: '#FFF',
    paddingLeft: 24,
    paddingBottom: 8,
  },
  exceptionsView: {
    flexDirection: 'row',
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
  exceptionsItem: {
    marginHorizontal: 2,
  },
});
