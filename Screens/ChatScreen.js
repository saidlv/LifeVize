import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, DrawerActions} from '@react-navigation/native';

function ChatScreen() {
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
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <View>
              <Image source={require('../images/drawer-icon.png')} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'normal',
              marginTop: 5,
            }}>
            Chat
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
          <TouchableOpacity
            onPress={function () {
              navigation.navigate('UserChatScreen');
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <View>
                  <Image source={require('../images/profile-image.png')} />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 10,
                  }}>
                  <View>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#333'}}>
                      Laura
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                      Last message fo few line
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <View>
                  <Text
                    style={{fontSize: 10, fontWeight: '500', color: '#777'}}>
                    07-07-2021 09:00 AM
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 10,
                  }}>
                  <Image source={require('../images/online-chat-logo.png')} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ededed',
              marginVertical: 10,
            }}></View>
          <TouchableOpacity
            onPress={function () {
              navigation.navigate('UserChatScreen');
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <View>
                  <Image source={require('../images/profile-image.png')} />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 10,
                  }}>
                  <View>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#333'}}>
                      Laura
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                      Last message fo few line
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <View>
                  <Text
                    style={{fontSize: 10, fontWeight: '500', color: '#777'}}>
                    07-07-2021 09:00 AM
                  </Text>
                </View>
                {/* <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 10,
                }}>
                <Image source={require('../images/online-chat-logo.png')} />
              </View> */}
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ededed',
              marginVertical: 10,
            }}></View>
          <TouchableOpacity
            onPress={function () {
              navigation.navigate('UserChatScreen');
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <View>
                  <Image source={require('../images/profile-image.png')} />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 10,
                  }}>
                  <View>
                    <Text
                      style={{fontSize: 16, fontWeight: '600', color: '#333'}}>
                      Laura
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                      Last message fo few line
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <View>
                  <Text
                    style={{fontSize: 10, fontWeight: '500', color: '#777'}}>
                    07-07-2021 09:00 AM
                  </Text>
                </View>
                {/* <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 10,
                }}>
                <Image source={require('../images/online-chat-logo.png')} />
              </View> */}
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ededed',
              marginVertical: 10,
            }}></View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default ChatScreen;
