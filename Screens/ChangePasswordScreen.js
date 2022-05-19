import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

function ChangePasswordScreen({credentials}) {
  const navigation = useNavigation();
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <View
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <TouchableOpacity
            onPress={function () {
              if (credentials === 'user') {
                navigation.navigate('AdviserSideDrawerNavigator', {
                  credentials: 'user',
                });
              } else {
                navigation.navigate('AdviserSideDrawerNavigator', {
                  credentials: 'advisor',
                });
              }
            }}>
            <View>
              <Image source={require('../images/arrow-left-logo.png')} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'normal',
            }}>
            Profile
          </Text>
          <View></View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          marginTop: 20,
        }}>
        <View
          style={{
            height: '95%',
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View>
              <Image
                source={require('../images/adviser-profile-image.png')}
                style={{height: 80, width: 80, borderRadius: 40}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 10,
              }}>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '600'}}>
                Joe Smith
              </Text>
              <Text style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                Automobiles, Maintainance
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: '100%',
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: 10,
              marginTop: 50,
              marginBottom: 10,
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
                <Image source={require('../images/password-logo-black.png')} />
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
                  placeholder="Password"
                  placeholderTextColor="black"
                  style={{borderWidth: 0, color: 'black'}}
                  value="Nisarg"
                  secureTextEntry
                />
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: '100%',
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: 10,
              marginVertical: 15,
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
                <Image source={require('../images/password-logo-black.png')} />
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
                  placeholderTextColor="black"
                  style={{borderWidth: 0, color: 'black'}}
                  value=""
                />
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: '100%',
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: 10,
              marginVertical: 15,
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
                <Image source={require('../images/password-logo-black.png')} />
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
                  placeholderTextColor="black"
                  style={{borderWidth: 0, color: 'black'}}
                  value=""
                />
              </View>
            </View>
          </View>
          <Button
            title="SAVE CHANGES"
            titleStyle={{color: 'white'}}
            buttonStyle={{backgroundColor: '#8C86FF', borderRadius: 5}}
            containerStyle={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginVertical: 15,
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

function mapStateToProps(state) {
  return {credentials: state.credentials};
}

export default connect(mapStateToProps)(ChangePasswordScreen);
