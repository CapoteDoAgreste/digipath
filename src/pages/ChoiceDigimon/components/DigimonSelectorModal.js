/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  TextInput,
} from 'react-native';

export default function DigimonSelectorModal({list, selectDigimon}) {
  const navigate = useNavigation();
  const [search, setSearch] = useState('');

  const SearchInput = () => (
    <View style={styles.searchView}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a digimon name here"
        defaultValue={search}
        onSubmitEditing={value => {
          setSearch(value.nativeEvent.text);
        }}
      />
    </View>
  );

  const SelectItem = digimon => (
    <>
      <TouchableOpacity
        onPress={() => {
          selectDigimon(digimon.item);
          navigate.goBack();
        }}
        style={styles.selectItem}>
        <Image style={styles.digimonImage} source={digimon.item.image} />
        <Text style={styles.digimonName}>{digimon.item.name}</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.modal}>
      <FlatList
        data={list.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        )}
        renderItem={SelectItem}
        maxToRenderPerBatch={100}
        initialNumToRender={20}
        ListHeaderComponent={SearchInput}
        keyExtractor={(digimon, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    zIndex: 0,
    backgroundColor: '#007499',
    width: '100%',
    height: '100%',
  },
  searchInput: {
    backgroundColor: '#00B9F3',
    borderRadius: 24,
    margin: 24,
    padding: 12,
    paddingLeft: 24,
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
    width: '100%',
    backgroundColor: '#007499',
  },
});
