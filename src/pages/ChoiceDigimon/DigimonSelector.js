import {useRoute} from '@react-navigation/native';
import React from 'react';
import DigimonSelectorModal from './components/DigimonSelectorModal';

export default function () {
  const routeData = useRoute();
  const {list, set} = routeData.params;
  return <DigimonSelectorModal list={list} selectDigimon={set} />;
}
