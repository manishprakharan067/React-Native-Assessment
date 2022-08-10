import React, {useEffect, useState} from 'react';
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
  ActivityIndicator,
  NativeModules,
  Platform,
  Alert,
} from 'react-native';
import moment from 'moment';
import Data from './Data.json';
import GetAlbumAPI from './api/GetAlbumAPI';

const {width, height} = Dimensions.get('screen');

export default function Home(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const [albumData, setAlbumData] = useState([]);
  console.log(props);

  const {navigation} = props;
  console.log(props);

  //check for internet connectivity
  useEffect(() => {
    if (Platform.OS == 'ios') {
      NativeModules.RNInternet.findEvents(res => {
        console.log(res);
        if (res == 'NO') {
          Alert.alert('Internet Not Connected!');
        }
      });
    } else if (Platform.OS == 'android') {
      NativeModules.InternetCon.getInternetStatus(res => {
        if (res == 'NO') {
          Alert.alert('Internet Not Connected!');
        }
      });
    }
  }, []);

  useEffect(() => {
    if (props.ResultData) {
      setAlbumData(props.ResultData);
    } else {
      new GetAlbumAPI().getAlbumList(
        res => {
          props.saveAlbumData(res.data.results);
          setAlbumData(res.data.results);
        },
        error => {
          console.log(error);
        },
      );
    }
  }, []);

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
        data={albumData}
        renderItem={renderItem}
        keyExtractor={item => item.trackId}
      />
      {albumData.length == 0 ? (
        <ActivityIndicator
          color={'red'}
          size={'large'}
          style={{
            position: 'absolute',
            top: height / 2,
            left: width / 2.1,
          }}
        />
      ) : null}
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
