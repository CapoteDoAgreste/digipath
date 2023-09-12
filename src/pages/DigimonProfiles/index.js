import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text} from 'react-native';
import DigiDB from '../../mocks/DigiDB';
import DigimonSelector from '../ChoiceDigimon/DigimonSelector';

const list = new DigiDB().digimonData.digimons;

export default function DigimonProfileHome() {
  const navigation = useNavigation();

  const openDigimonProfile = ({name, image, stage, from, into}) => {
    navigation.navigate('DigimonProfile', {
      name: name,
      image: image,
      stage: stage,
      from: from,
      into: into,
    });
  };

  return <DigimonSelector list={list} set={openDigimonProfile} />;
}
