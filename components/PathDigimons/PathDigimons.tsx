import {StyleSheet, View, Image} from 'react-native';
import koromon2 from '../../assets/images/koromon2.png';
import koromon22 from '../../assets/images/koromon22.png';
import koromon23 from '../../assets/images/koromon23.png';
import koromon24 from '../../assets/images/koromon24.png';
import theme from '../../theme';

export function PathDigimons() {
  return (
    <View style={styles.root}>
      <View style={styles.group1}>
        <View style={styles.rectangle6}/>
        <View style={styles.rectangle7}/>
        <Image source={{uri: koromon2}} style={{width: 107, height: 102.80392456054688}} contentFit="cover"/>
      </View>
      <View style={styles.group4}>
        <View style={styles.rectangle62}/>
        <View style={styles.rectangle72}/>
        <Image source={{uri: koromon22}} style={{width: 107, height: 102.80392456054688}} contentFit="cover"/>
      </View>
      <View style={styles.group12}>
        <View style={styles.rectangle63}/>
        <View style={styles.rectangle73}/>
        <Image source={{uri: koromon23}} style={{width: 107, height: 102.80392456054688}} contentFit="cover"/>
      </View>
      <View style={styles.group2}>
        <View style={styles.rectangle64}/>
        <View style={styles.rectangle74}/>
        <Image source={{uri: koromon24}} style={{width: 107, height: 102.80392456054688}} contentFit="cover"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '406rem',
    height: '637rem',
    flexShrink: 0,
  },
  rectangle6: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
    backgroundColor: '#00B9F3',
    boxShadow: '0px 14px 30px -7px rgba(0, 0, 0, 0.25)',
    borderRadius: '49rem',
  },
  rectangle7: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 30px -15px rgba(0, 0, 0, 0.25)',
    borderRadius: '40rem',
  },
  koromon2: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    borderRadius: '40rem',
  },
  group1: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
  },
  rectangle62: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
    backgroundColor: '#00B9F3',
    boxShadow: '0px 14px 30px -7px rgba(0, 0, 0, 0.25)',
    borderRadius: '49rem',
  },
  rectangle72: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 30px -15px rgba(0, 0, 0, 0.25)',
    borderRadius: '40rem',
  },
  koromon22: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    borderRadius: '40rem',
  },
  group4: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
  },
  rectangle63: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
    backgroundColor: '#00B9F3',
    boxShadow: '0px 14px 30px -7px rgba(0, 0, 0, 0.25)',
    borderRadius: '49rem',
  },
  rectangle73: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 30px -15px rgba(0, 0, 0, 0.25)',
    borderRadius: '40rem',
  },
  koromon23: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    borderRadius: '40rem',
  },
  group12: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
  },
  rectangle64: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
    backgroundColor: '#00B9F3',
    boxShadow: '0px 14px 30px -7px rgba(0, 0, 0, 0.25)',
    borderRadius: '49rem',
  },
  rectangle74: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 30px -15px rgba(0, 0, 0, 0.25)',
    borderRadius: '40rem',
  },
  koromon24: {
    width: '107rem',
    height: '102.804rem',
    flexShrink: 0,
    borderRadius: '40rem',
  },
  group2: {
    width: '397rem',
    height: '127.784rem',
    flexShrink: 0,
  },
});
