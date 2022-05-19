import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

function ApprovalWaitingScreen() {
  const navigation = useNavigation();
  useEffect(function () {
    const time = setTimeout(function () {
      navigation.navigate('Login');
    }, 5000);

    return function () {
      clearTimeout(time);
    };
  }, []);
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={{marginTop: 30}}>
            <Image source={require('../images/close-circle-icon.png')} />
          </View>
        </TouchableOpacity>
        <View style={{...styles.takeObjectCenter, marginTop: 150}}>
          <Text style={{fontSize: 30, fontWeight: '500', color: 'white'}}>
            Hi Welcome
          </Text>
        </View>
        <View style={{...styles.takeObjectCenter, marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'normal'}}>
            Joe Smith
          </Text>
        </View>
        <View style={{...styles.takeObjectCenter, marginTop: 30}}>
          <Text style={{fontSize: 24, fontWeight: '500', color: 'white'}}>
            Waiting For approval
          </Text>
        </View>
        <View style={{...styles.takeObjectCenter, marginTop: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
            }}>
            Your account is waiting for our administrator approval. Please check
            back later.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  takeObjectCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ApprovalWaitingScreen;
