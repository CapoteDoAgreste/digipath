import {StyleSheet, View, Text} from 'react-native';
import Plus12 from '../../assets/vectors/Plus12.svg';
import Plus19 from '../../assets/vectors/Plus19.svg';
import Plus13 from '../../assets/vectors/Plus13.svg';
import Plus14 from '../../assets/vectors/Plus14.svg';
import Plus15 from '../../assets/vectors/Plus15.svg';
import Plus16 from '../../assets/vectors/Plus16.svg';
import Plus17 from '../../assets/vectors/Plus17.svg';
import Plus18 from '../../assets/vectors/Plus18.svg';
import theme from '../../theme';

export function ExceptionsDigimons() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle11}/>
      <Plus12/>
      <Plus19/>
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
  plus12: {
    width: '38rem',
    height: '38rem',
    flexShrink: 0,
  },
  plus19: {
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
