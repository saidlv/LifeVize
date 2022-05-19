import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

function AdviserDetailViewScreen(props) {
  const navigation = useNavigation();
  const {name, title, description, year, star, model, make} =
    props.route.params;
  const [status, setStatus] = useState(true);
  function onGoOnline() {
    setStatus(true);
  }
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
              navigation.navigate('AdviserHomeScreen');
            }}>
            <View>
              <Image source={require('../images/arrow-left-logo.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={function () {
              setStatus(!status);
            }}>
            <View>
              {status ? (
                <Image source={require('../images/online-icon.png')} />
              ) : (
                <Image source={require('../images/offline-icon.png')} />
              )}
            </View>
          </TouchableOpacity>
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
        {!status ? (
          <View
            style={{
              height: '30%',
              backgroundColor: 'white',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title="GO ONLINE"
              titleStyle={{color: 'white'}}
              buttonStyle={{backgroundColor: '#8C86FF', borderRadius: 5}}
              containerStyle={{
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                marginTop: 20,
              }}
              onPress={onGoOnline}
            />
          </View>
        ) : (
          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              padding: 5,
            }}>
            <View
              style={{
                width: '90%',
                backgroundColor: '#eee',
                shadowOffset: {height: 4, width: 2},
                shadowOpacity: 0.16,
                marginVertical: 20,
                borderRadius: 20,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '100%',
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
                        {name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#777',
                          fontWeight: '600',
                        }}>
                        {title}
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
                      {star}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: '#777',
                      }}>
                      Session Title
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: '#777',
                      }}>
                      11 july 2021, 9:00 am
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#333',
                    }}>
                    {description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      color: '#000',
                      marginVertical: 10,
                    }}>
                    Vehicle Details
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '600', color: '#777'}}>
                    Make
                  </Text>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 5,
                    }}>
                    {make}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: '#777',
                      marginVertical: 10,
                    }}>
                    Model
                  </Text>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 5,
                    }}>
                    {model}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: '#777',
                      marginVertical: 10,
                    }}>
                    Year
                  </Text>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 5,
                    }}>
                    {year}
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: '#8c86ff',
                      }}
                      onPress={function () {
                        navigation.navigate('AdviserHomeScreen');
                      }}>
                      VIEW LESS{' '}
                      <Image source={require('../images/up-arrow-logo.png')} />{' '}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#ddd',
                    marginTop: 10,
                  }}></View>
                <TouchableOpacity
                  onPress={function () {
                    navigation.navigate('UserChatScreen');
                  }}>
                  <View
                    style={{
                      backgroundColor: '#8c86ff',
                      borderRadius: 15,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      padding: 10,
                      marginVertical: 10,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      ACCEPT SESSION
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default AdviserDetailViewScreen;
