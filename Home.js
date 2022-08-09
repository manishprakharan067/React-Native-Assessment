import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Data from './Data.json';

const {width, height} = Dimensions.get('screen');

export default function Home(props) {
  const isDarkMode = useColorScheme() === 'dark';

  const {navigation} = props;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('HomeDetailsScreen', {
          details: item.collectionViewUrl,
        });
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center'}}>
          <Image
            style={{width: 40, height: 40}}
            source={{uri: item.artworkUrl60}}
          />
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={styles.title}>{item.collectionName}</Text>
          <Text style={styles.date}>
            {moment(item.releaseDate).format('d MMM YYYY')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={Data.results}
        renderItem={renderItem}
        keyExtractor={item => item.trackId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 15,
    width: width - 120,
  },
  date: {
    fontSize: 15,
    fontWeight: 'bold',
    width: width - 120,
  },
});
