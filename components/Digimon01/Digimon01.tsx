import {StyleSheet, View, Image} from 'react-native';
import koromon1 from '../../assets/images/koromon1.png';
import theme from '../../theme';

export function Digimon01() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle3}/>
      <View style={styles.group2}>
        <View style={styles.rectangle1}/>
        <Image source={{uri: koromon1}} style={{width: 128, height: 128}} contentFit="cover"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '165rem',
    height: '176rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '18rem',
    flexShrink: 0,
  },
  rectangle3: {
    width: '165rem',
    height: '30rem',
    flexShrink: 0,
    backgroundColor: '#4DD4FF',
    boxShadow: '0px 14px 30px -7px rgba(0, 0, 0, 0.25)',
    borderRadius: '20rem',
  },
  rectangle1: {
    width: '128rem',
    height: '128rem',
    flexShrink: 0,
    backgroundColor: '#F2FBFE',
    boxShadow: '0px 4px 30px -15px rgba(0, 0, 0, 0.25)',
    borderRadius: '20rem',
  },
  koromon1: {
    width: '128rem',
    height: '128rem',
    flexShrink: 0,
    borderRadius: '20rem',
  },
  group2: {
    width: '130rem',
    height: '128rem',
    flexShrink: 0,
  },
});
