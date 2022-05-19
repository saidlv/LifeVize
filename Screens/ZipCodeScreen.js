import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';

function ZipCodeScreen() {
  const [zipCode, setZipCode] = useState();
  function onAddZipCode() {}
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 30}}>
          <Image source={require('../images/arrow-left-logo.png')} />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{color: 'white', fontSize: 28, fontWeight: 'normal'}}>
            Welcome Laura!
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>
            Please enter your zip code to complete your Social Sign In
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: '95%',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
            marginTop: 150,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              padding: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginHorizontal: 2,
              }}>
              <Image source={require('../images/location-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                marginHorizontal: 2,
              }}>
              <TextInput
                placeholder="Zip Code"
                placeholderTextColor="white"
                style={{borderWidth: 0, color: 'white'}}
                onChangeText={function (item) {
                  setZipCode(item);
                }}
                value={zipCode}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 200,
          }}>
          <Button
            title="CONTINUE"
            titleStyle={{color: '#8C85FF', fontWeight: '600'}}
            buttonStyle={{backgroundColor: 'white', borderRadius: 5}}
            containerStyle={{
              width: '95%',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginTop: 20,
            }}
            onPress={onAddZipCode}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
});

export default ZipCodeScreen;
