import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

function UserSubCategoryScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          width: '90%',
          marginTop: 30,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={function () {
              navigation.navigate('UserHomeScreen');
            }}>
            <View>
              <Image source={require('../images/arrow-left-logo.png')} />
            </View>
          </TouchableOpacity>
          <View></View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          width: '90%',
          marginTop: 20,
        }}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'normal'}}>
          Hello,
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          width: '90%',
        }}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'normal'}}>
          Good Morning Laura!
        </Text>
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
            height: '40%',
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: '600',
              marginTop: 10,
              marginLeft: 20,
            }}>
            <Image source={require('../images/car-icon.png')} /> Automobile
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <TouchableOpacity
              onPress={function () {
                navigation.navigate('SubCategoryDetailScreen');
              }}>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <View
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 8,
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 70,
                    alignSelf: 'center',
                  }}>
                  <View>
                    <Image
                      style={{height: 40, width: 50, resizeMode: 'contain'}}
                      source={require('../images/engine-logo.jpeg')}
                    />
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: '#777', fontSize: 18, fontWeight: 'normal'}}>
                    Maintenance
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <View
                style={{
                  backgroundColor: '#eee',
                  borderRadius: 8,
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 70,
                  alignSelf: 'center',
                }}>
                <View>
                  <Image
                    style={{height: 40, width: 50, resizeMode: 'contain'}}
                    source={require('../images/buy-car-logo.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: '#777', fontSize: 18, fontWeight: 'normal'}}>
                  Buying
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <View
                style={{
                  backgroundColor: '#eee',
                  borderRadius: 8,
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 70,
                  alignSelf: 'center',
                }}>
                <Image
                  style={{
                    height: 40,
                    width: 30,
                    resizeMode: 'contain',
                    marginLeft: 8,
                  }}
                  source={require('../images/sell-car-logo.png')}
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: '#777', fontSize: 18, fontWeight: 'normal'}}>
                  Selling
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default UserSubCategoryScreen;
