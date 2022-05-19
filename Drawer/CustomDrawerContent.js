import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: '#412D6E',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={function () {
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Image
            style={{marginTop: 40}}
            source={require('../images/arrow-left-logo.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View>
            <Image source={require('../images/profile-image.png')} />
          </View>
          <View
            style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
              Joe Smith
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'normal', color: '#fff'}}>
              Automobiles, Maintainance
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 15, flex: 1}}>
        <TouchableOpacity
          onPress={function () {
            navigation.navigate('ChangePasswordScreen');
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#f9b408',
                borderRadius: 12,
                padding: 10,
              }}>
              <Image source={require('../images/key-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'normal',
                      marginTop: 10,
                    }}>
                    Change Password
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#8c86ff', fontSize: 30, marginLeft: 25}}>
                    {' '}
                    >{' '}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#D3D3D3',
                  marginTop: 5,
                }}></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () {
            navigation.navigate('Notification');
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#f9b408',
                borderRadius: 12,
                padding: 10,
              }}>
              <Image source={require('../images/notification-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'normal',
                      marginTop: 10,
                    }}>
                    Notification Settings
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#8c86ff', fontSize: 30, marginLeft: 15}}>
                    {' '}
                    >{' '}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#D3D3D3',
                  marginTop: 5,
                }}></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () {
            navigation.navigate('SessionHistoryScreen');
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#f9b408',
                borderRadius: 12,
                padding: 10,
              }}>
              <Image source={require('../images/card-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'normal',
                      marginTop: 10,
                    }}>
                    Session History
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#8c86ff', fontSize: 30, marginLeft: 40}}>
                    {' '}
                    >{' '}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#D3D3D3',
                  marginTop: 5,
                }}></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () {
            navigation.navigate('PaymentMethodScreen');
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#f9b408',
                borderRadius: 12,
                padding: 10,
              }}>
              <Image source={require('../images/payment-card.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'normal',
                      marginTop: 10,
                    }}>
                    Payment methods
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#8c86ff', fontSize: 30, marginLeft: 20}}>
                    {' '}
                    >{' '}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#D3D3D3',
                  marginTop: 5,
                }}></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={function () {}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#f9b408',
                borderRadius: 12,
                padding: 10,
              }}>
              <Image source={require('../images/lock-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'normal',
                      marginTop: 10,
                    }}>
                    Privacy Policy
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#8c86ff', fontSize: 30, marginLeft: 50}}>
                    {' '}
                    >{' '}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#D3D3D3',
                  marginTop: 5,
                }}></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={function () {}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#f9b408',
                borderRadius: 12,
                padding: 10,
              }}>
              <Image source={require('../images/security-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'normal',
                      marginTop: 10,
                    }}>
                    Term and condition
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#8c86ff', fontSize: 30, marginLeft: 10}}>
                    {' '}
                    >{' '}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#D3D3D3',
                  marginTop: 5,
                }}></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () {
            navigation.navigate('Login');
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#f9b408',
                borderRadius: 12,
                padding: 10,
              }}>
              <Image source={require('../images/logout-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'normal',
                      marginTop: 10,
                    }}>
                    Logout
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: '#8c86ff', fontSize: 30, marginLeft: 100}}>
                    {' '}
                    >{' '}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: '#D3D3D3',
                  marginTop: 5,
                }}></View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
