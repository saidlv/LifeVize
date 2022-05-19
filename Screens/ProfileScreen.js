import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, DrawerActions} from '@react-navigation/native';

function ProfileScreen() {
  const navigation = useNavigation();
  function RedirectToSessionDetailPage() {
    navigation.navigate('SessionDetailScreen');
  }
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
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'normal',
                marginTop: 5,
              }}>
              Profile
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 10,
              }}
              onPress={function () {
                navigation.navigate('EditProfileScreen');
              }}>
              EDIT PROFILE
            </Text>
          </View>
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
          }}>
          <View style={{height: '50%'}}>
            <ImageBackground
              imageStyle={{
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                height: '100%',
              }}
              source={require('../images/adviser-profile-image.png')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 10,
                  height: '100%',
                }}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                  Joe Smith
                </Text>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
                  Automobiles, Maintenance{' '}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#eee',
              padding: 10,
            }}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <View>
                <Text style={{fontSize: 10, fontWeight: 'bold', color: '#777'}}>
                  TOTAL SESSIONS
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../images/session-icon.png')}
                  style={{marginHorizontal: 2}}
                />
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    marginHorizontal: 2,
                  }}>
                  30
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: '#777',
                    marginLeft: 10,
                  }}>
                  RATING
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../images/star-logo.png')}
                  style={{marginHorizontal: 2}}
                />
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    marginHorizontal: 2,
                  }}>
                  4.5
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: '#777',
              marginLeft: 20,
              marginTop: 10,
            }}>
            Reviews
          </Text>
          <ScrollView>
            <TouchableOpacity onPress={RedirectToSessionDetailPage}>
              <View
                style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
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
                      <Text
                        style={{
                          color: '#333',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Laura
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#777',
                          fontWeight: '600',
                        }}>
                        Automobiles, Maintainance
                      </Text>
                    </View>
                  </View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image source={require('../images/star-logo.png')} />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#333',
                        marginLeft: 5,
                      }}>
                      4.5
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      color: '#777',
                      marginLeft: 55,
                    }}>
                    Lorem ipsum is dummy text used in laying out print, graphic
                    or web designs.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={RedirectToSessionDetailPage}>
              <View
                style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
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
                      <Text
                        style={{
                          color: '#333',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Laura
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#777',
                          fontWeight: '600',
                        }}>
                        Automobiles, Maintainance
                      </Text>
                    </View>
                  </View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image source={require('../images/star-logo.png')} />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#333',
                        marginLeft: 5,
                      }}>
                      4.5
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      color: '#777',
                      marginLeft: 55,
                    }}>
                    Lorem ipsum is dummy text used in laying out print, graphic
                    or web designs.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={RedirectToSessionDetailPage}>
              <View
                style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
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
                      <Text
                        style={{
                          color: '#333',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Laura
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#777',
                          fontWeight: '600',
                        }}>
                        Automobiles, Maintainance
                      </Text>
                    </View>
                  </View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image source={require('../images/star-logo.png')} />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#333',
                        marginLeft: 5,
                      }}>
                      4.5
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      color: '#777',
                      marginLeft: 55,
                    }}>
                    Lorem ipsum is dummy text used in laying out print, graphic
                    or web designs.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default ProfileScreen;
