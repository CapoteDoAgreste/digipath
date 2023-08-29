import React from 'react';
import {Text} from 'react-native';
import PathShow from '../scripts/PathShow';
import DigiPath from '../scripts/DigiPath';

export default function ChoiceDigimon() {
  const initial = 'BanchoLeomon';
  const final = 'Omnimon';
  const exceptions = [];

  result = DigiPath(initial, final, exceptions).toString();
  console.log('init');
  return <Text>{result}</Text>;
}
