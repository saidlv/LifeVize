import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';

function EditProfileScreen() {
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
              navigation.navigate('Profile');
            }}>
            <View style={{marginTop: 5}}>
              <Image source={require('../images/arrow-left-logo.png')} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'normal',
            }}>
            Edit Profile
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
            padding: 10,
          }}>
          <ScrollView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                style={{borderRadius: 150, height: 200, width: 200}}
                source={require('../images/adviser-profile-image.png')}
              />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#f9b408',
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  padding: 5,
                  position: 'absolute',
                  top: 130,
                  left: Dimensions.get('window').width / 2 + 55,
                }}>
                <Image source={require('../images/profile-camera-logo.png')} />
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
                borderRadius: 7,
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
                  <Image source={require('../images/profile-icon-black.png')} />
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
                    placeholder="Name"
                    placeholderTextColor="white"
                    style={{borderWidth: 0, color: 'black'}}
                    value="Joe Smith"
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
                borderRadius: 7,
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
                  <Image source={require('../images/email-logo-black.png')} />
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
                    placeholderTextColor="black"
                    style={{borderWidth: 0, color: 'black'}}
                    value="joe@smith.com"
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
                borderRadius: 7,
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
                  <Image
                    source={require('../images/calendar-icon-black.png')}
                  />
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
                    placeholder="Last Name"
                    placeholderTextColor="black"
                    style={{borderWidth: 0, color: 'black'}}
                    value="15/11/2000"
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
                borderRadius: 7,
                marginVertical: 15,
                height: 100,
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
                    flex: 1,
                    marginHorizontal: 2,
                  }}>
                  <TextInput
                    multiline
                    placeholder="Bio"
                    placeholderTextColor="black"
                    style={{borderWidth: 0, color: 'black'}}
                    value="Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum"
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
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default EditProfileScreen;
