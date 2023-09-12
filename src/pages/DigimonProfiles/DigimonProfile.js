/* eslint-disable react/no-unstable-nested-components */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DigiDB from '../../mocks/DigiDB';
import {getID} from '../../scripts/DigiPath';
import GoToPreviousPage from '../../scripts/goToPreviousPage';

export default function DigimonProfile() {
  const navigate = useNavigation();
  const database = new DigiDB().digimonData.digimons;
  const route = useRoute().params;
  const [profile, setProfile] = useState(route);

  GoToPreviousPage();

  const DigivolutionCard = item => {
    const ID = getID(item.item);
    return (
      <TouchableOpacity
        style={styles.digivolutionCard}
        onPress={() => {
          setProfile(database[ID]);
        }}>
        <View style={styles.digivolutionImageBackground}>
          <Image source={database[ID].image} style={styles.digivolutionImage} />
        </View>
        <Text style={styles.digivolutionName}>{item.item}</Text>
      </TouchableOpacity>
    );
  };

  const UpdateProfile = item => {
    setProfile(item);
  };

  const OpenSelector = () => {
    navigate.navigate('DigimonSelector', {list: database, set: UpdateProfile});
  };

  const TopFromDigimon = () => (
    <>
      <TouchableOpacity style={styles.profileCard} onPress={OpenSelector}>
        <View style={styles.cardRow1}>
          <View style={styles.cardImageBackground}>
            <Image source={profile.image} style={styles.cardImage} />
          </View>
          <Text style={styles.cardName}>{profile.name}</Text>
        </View>
        <View style={styles.cardRow2}>
          <Text style={styles.cardRow2Texts}>{`Type: ${'None'}`}</Text>
          <Text style={styles.cardRow2Texts}>{`Attribute: ${'None'}`}</Text>
          <Text style={styles.cardRow2Texts}>{`Stage: ${profile.stage}`}</Text>
          <Text style={styles.cardRow2Texts}>{`Memory: ${'None'}`}</Text>
          <Text style={styles.cardRow2Texts}>{`Equip Slots: ${'None'}`}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.digivolutionsTitle}>From Digimons:</Text>
    </>
  );

  const TopIntoDigimon = () => (
    <>
      <View style={styles.digivolutionGroup}>
        <FlatList
          data={profile.from}
          renderItem={DigivolutionCard}
          keyExtractor={item => item.nome}
          ListHeaderComponent={TopFromDigimon}
        />
      </View>
      <Text style={styles.digivolutionsTitle}> Into Digimons:</Text>
    </>
  );

  const Screen = () => (
    <View style={styles.mainView}>
      <View style={styles.digivolutionGroup}>
        <FlatList
          data={profile.into}
          renderItem={DigivolutionCard}
          keyExtractor={item => item.nome}
          ListHeaderComponent={TopIntoDigimon}
        />
      </View>
    </View>
  );

  return <Screen />;
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#007FA7',
    height: '100%',
    width: '100%',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    height: 226,
    borderBottomLeftRadius: 58,
    borderBottomRightRadius: 58,
    padding: 16,
    flexDirection: 'row',
  },
  cardRow1: {
    alignItems: 'center',
    width: 180,
  },
  cardImageBackground: {
    backgroundColor: '#638995',
    borderRadius: 64,
    height: 128,
    width: 128,
    marginLeft: 5,
  },
  cardImage: {
    borderRadius: 64,
    height: 128,
    width: 128,
  },
  cardName: {
    color: '#333D40',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 4,
    marginLeft: 4,
    textAlign: 'center',
    width: 196,
  },
  cardRow2: {
    height: '100%',
    padding: 20,
  },
  cardRow2Texts: {
    color: '#333D40',
    lineHeight: 23,
    fontSize: 19,
    fontWeight: 'bold',
  },
  secondaryView: {
    height: '100%',
    width: '100%',
    padding: 16,
    marginTop: 24,
  },
  digivolutionsTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 32,
    marginTop: 10,
    fontWeight: 'bold',
  },
  digivolutionCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 32,
    alignItems: 'center',
    margin: 4,
  },
  digivolutionImageBackground: {
    backgroundColor: '#638995',
    borderRadius: 32,
  },
  digivolutionImage: {
    width: 48,
    height: 48,
    borderRadius: 32,
  },
  digivolutionName: {
    color: '#333D40',
    fontSize: 24,
    marginLeft: 24,
  },
});
