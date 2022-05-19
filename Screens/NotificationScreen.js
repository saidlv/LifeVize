import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, DrawerActions} from '@react-navigation/native';

function NotificationScreen() {
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
            }}>
            Notifications
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
          <ScrollView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Image source={require('../images/profile-image.png')} />
              </View>
              <View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    marginLeft: 10,
                  }}>
                  You just tipped $20 for your session with Lara
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#777', fontSize: 10, fontWeight: 'normal'}}>
                07-07-2021 09:00 AM
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#ededed',
                marginVertical: 10,
              }}></View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default NotificationScreen;
