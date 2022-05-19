import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <TouchableOpacity
        onPress={function () {
          navigation.navigate('Login');
        }}>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Image source={require('../images/arrow-left-logo.png')} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 120,
        }}>
        <Image source={require('../images/forgot-password.png')} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Forgot Password ?
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            marginTop: 10,
            fontWeight: 'normal',
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}>
          Please enter your valid email
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          width: '90%',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 10,
          marginVertical: 20,
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
            <Image source={require('../images/email-logo.png')} />
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
              placeholder="Email"
              placeholderTextColor="white"
              style={{borderWidth: 0, color: 'white'}}
              onChangeText={function (item) {
                setEmail(item);
              }}
              value={email}
            />
          </View>
        </View>
      </View>
      <Button
        title="SUBMIT"
        titleStyle={{color: '#8C85FF'}}
        buttonStyle={{backgroundColor: 'white'}}
        containerStyle={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          marginTop: '5%',
        }}
        onPress={function () {
          navigation.navigate('ResetPasswordScreen');
        }}
      />
    </LinearGradient>
  );
}

export default ForgotPasswordScreen;
