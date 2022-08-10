import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default function HomeDetailsScreen(props) {
  const [visible, setVisible] = useState(false);
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;
  const {navigation, route} = props;

  return (
    <>
      <SafeAreaView />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.pop();
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
      <WebView
        source={{
          uri: route.params.details,
        }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
      />
      {visible && (
        <ActivityIndicator
          color={'red'}
          size={'large'}
          style={{
            position: 'absolute',
            top: height / 2,
            left: width / 2.1,
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#877825',
    width: 50,
    height: 30,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});
