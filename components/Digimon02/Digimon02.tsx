import {StyleSheet, View, Image} from 'react-native';
import geogreymon1 from '../../assets/images/geogreymon1.png';
import theme from '../../theme';

export function Digimon02() {
  return (
    <View style={styles.root}>
      <View style={styles.group3}>
        <View style={styles.rectangle2}/>
        <Image source={{uri: geogreymon1}} style={{width: 128, height: 128}} contentFit="cover"/>
      </View>
      <View style={styles.rectangle4}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '165rem',
    height: '177rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '17rem',
    flexShrink: 0,
  },
  rectangle2: {
    width: '128rem',
    height: '128rem',
    flexShrink: 0,
    backgroundColor: '#F2FBFE',
    boxShadow: '0px 4px 30px -15px rgba(0, 0, 0, 0.25)',
    borderRadius: '20rem',
  },
  geogreymon1: {
    width: '128rem',
    height: '128rem',
    flexShrink: 0,
    borderRadius: '20rem',
  },
  group3: {
    width: '128rem',
    height: '128rem',
    flexShrink: 0,
  },
  rectangle4: {
    width: '165rem',
    height: '32rem',
    flexShrink: 0,
    backgroundColor: '#4DD4FF',
    boxShadow: '0px 14px 30px -7px rgba(0, 0, 0, 0.25)',
    borderRadius: '20rem',
  },
});
