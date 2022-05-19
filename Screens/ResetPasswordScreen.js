import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pVisibility, setPVisibility] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpVisibility, setCPVisibility] = useState(false);

  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <TouchableOpacity
        onPress={function () {
          navigation.navigate('ForgotPasswordScreen');
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
          Reset Password ?
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
          marginVertical: 15,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
              <Image source={require('../images/password-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginHorizontal: 2,
                width: '80%',
              }}>
              <TextInput
                placeholder="New Password"
                placeholderTextColor="white"
                style={{borderWidth: 0, color: 'white'}}
                onChangeText={function (item) {
                  setPassword(item);
                }}
                value={password}
                secureTextEntry={pVisibility}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginHorizontal: 2,
            }}>
            {pVisibility ? (
              <TouchableOpacity
                onPress={function () {
                  setPVisibility(!pVisibility);
                }}>
                <Image source={require('../images/hide-password-logo.png')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={function () {
                  setPVisibility(!pVisibility);
                }}>
                <Image source={require('../images/show-password-logo.png')} />
              </TouchableOpacity>
            )}
          </View>
        </View>
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
          marginVertical: 15,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
              <Image source={require('../images/password-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginHorizontal: 2,
                width: '80%',
              }}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="white"
                style={{borderWidth: 0, color: 'white'}}
                onChangeText={function (item) {
                  setConfirmPassword(item);
                }}
                value={confirmPassword}
                secureTextEntry={cpVisibility}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginHorizontal: 2,
            }}>
            {cpVisibility ? (
              <TouchableOpacity
                onPress={function () {
                  setCPVisibility(!cpVisibility);
                }}>
                <Image source={require('../images/hide-password-logo.png')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={function () {
                  setCPVisibility(!cpVisibility);
                }}>
                <Image source={require('../images/show-password-logo.png')} />
              </TouchableOpacity>
            )}
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
          navigation.navigate('Login');
        }}
      />
    </LinearGradient>
  );
}

export default ResetPasswordScreen;
