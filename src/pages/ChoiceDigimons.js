import React from 'react';
import {Text} from 'react-native';
import PathShow from '../scripts/PathShow';
import DigiPath from '../scripts/DigiPath';

export default function ChoiceDigimon() {
  const initial = 'Greymon';
  const final = 'Koromon';
  const exceptions = [];
  console.log(DigiPath(initial, final, exceptions));
  return <Text></Text>;
}
