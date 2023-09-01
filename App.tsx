import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ChoiceDigimon from './src/pages/ChoiceDigimon/ChoiceDigimons';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#007FA7',
    flex: 1,
  },
});
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <ChoiceDigimon />
    </SafeAreaView>
  );
}

export default App;
