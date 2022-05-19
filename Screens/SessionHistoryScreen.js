import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

function SessionHistoryScreen({credentials}) {
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
            Session History
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
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View>
                <Text style={{fontSize: 16, color: '#777', fontWeight: '600'}}>
                  Total Payout
                </Text>
              </View>
              <View>
                <Text style={{color: '#333', fontSize: 20, fontWeight: 'bold'}}>
                  $550
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
                marginVertical: 15,
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
                    style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                    Laura
                  </Text>
                  <Text
                    style={{color: '#777', fontSize: 14, fontWeight: 'normal'}}>
                    Automobiles
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{color: '#777', fontSize: 12, fontWeight: 'normal'}}>
                  11 June 2021
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'right',
                  }}>
                  $10.00
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

function mapStateToProps(state) {
  return {credentials: state.credentials};
}

export default connect(mapStateToProps)(SessionHistoryScreen);
