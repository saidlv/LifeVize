import React, {useEffect} from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function SplashScreen() {
  const navigation = useNavigation();
  useEffect(function () {
    const time = setTimeout(function () {
      navigation.navigate('Login');
    }, 4000);

    return function () {
      clearTimeout(time);
    };
  }, []);
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <View style={styles.screen}>
        <Image source={require('../images/logo.png')} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
