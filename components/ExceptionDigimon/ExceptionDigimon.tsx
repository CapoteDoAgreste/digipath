import {StyleSheet, View, Text, Image} from 'react-native';
import geogreymon3 from '../../assets/images/geogreymon3.png';
import Plus12 from '../../assets/vectors/Plus12.svg';
import Plus13 from '../../assets/vectors/Plus13.svg';
import Plus14 from '../../assets/vectors/Plus14.svg';
import Plus15 from '../../assets/vectors/Plus15.svg';
import Plus16 from '../../assets/vectors/Plus16.svg';
import Plus17 from '../../assets/vectors/Plus17.svg';
import Plus18 from '../../assets/vectors/Plus18.svg';
import theme from '../../theme';

export function ExceptionDigimon() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle11}/>
      <View style={styles.group15}>
        <View style={styles.rectangle13}/>
        <Image source={{uri: geogreymon3}} style={{width: 37.50312042236328, height: 37.50312042236328}} contentFit="cover"/>
        <View style={styles.rectangle14}/>
        <Text style={styles.x}>
          X
        </Text>
      </View>
      <Plus12/>
      <Plus13/>
      <Plus14/>
      <Plus15/>
      <Plus16/>
      <Plus17/>
      <Plus18/>
      <Text style={styles.exceptions}>
                   Exceptions:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '375rem',
    height: '103rem',
    flexShrink: 0,
  },
  rectangle11: {
    width: '375rem',
    height: '103rem',
    flexShrink: 0,
    backgroundColor: '#005570',
    borderRadius: '82rem',
  },
  rectangle13: {
    width: '37.503rem',
    height: '37.503rem',
    flexShrink: 0,
    backgroundColor: '#638995',
    borderRadius: '64rem',
  },
  geogreymon3: {
    width: '37.503rem',
    height: '37.503rem',
    flexShrink: 0,
    borderRadius: '64rem',
  },
  rectangle14: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    backgroundColor: 'rgba(46, 46, 46, 0.58)',
    borderRadius: '8rem',
  },
  x: {
    width: '16rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '10rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  group15: {
    width: '41rem',
    height: '40.503rem',
    flexShrink: 0,
  },
  plus12: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  plus13: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  plus14: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  plus15: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  plus16: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  plus17: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  plus18: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  exceptions: {
    width: '374rem',
    height: '22rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '12rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
});
