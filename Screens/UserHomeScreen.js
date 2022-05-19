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
import {useNavigation, DrawerActions} from '@react-navigation/native';

function UserHomeScreen() {
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
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <View>
              <Image source={require('../images/drawer-icon.png')} />
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
            Category
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
                navigation.navigate('UserSubCategoryScreen');
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
                    width: 50,
                    alignSelf: 'center',
                  }}>
                  <Image source={require('../images/car-icon.png')} />
                </View>
                <View>
                  <Text
                    style={{color: '#777', fontSize: 18, fontWeight: 'normal'}}>
                    Automobile
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
                  width: 50,
                  alignSelf: 'center',
                }}>
                <Image source={require('../images/house-icon.png')} />
              </View>
              <View>
                <Text
                  style={{color: '#777', fontSize: 18, fontWeight: 'normal'}}>
                  Housing
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default UserHomeScreen;
