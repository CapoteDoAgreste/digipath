/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
export default function DigimonSelectorModal({
  list,
  visibility,
  setVisibility,
}) {
  const SelectItem = digimon => (
    <>
      <TouchableOpacity
        onPress={() => setVisibility(digimon.item)}
        style={styles.selectItem}>
        <Image style={styles.digimonImage} source={digimon.item.image} />
        <Text style={styles.digimonName}>{digimon.item.name}</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={(styles.modal, {display: visibility ? 'flex' : 'none'})}>
      <FlatList
        data={list}
        renderItem={SelectItem}
        keyExtractor={(digimon, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    zIndex: 0,
  },
  digimonName: {
    fontSize: 24,
    lineHeight: 42,
    marginLeft: 24,

    fontWeight: 'bold',
  },
  digimonImage: {
    height: 32,
    width: 32,
    marginLeft: 16,
  },
  selectItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    flexDirection: 'row',
  },
});
