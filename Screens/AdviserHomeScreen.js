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
import {useNavigation, DrawerActions} from '@react-navigation/native';

function AdviserHomeScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([
    {
      name: 'Laura',
      title: 'Automobiles, Maintainance',
      description:
        'Hi. BMW dealer said that my 320xi sedan has a leak in the oil filter housing. They are asking for $2100 for the repair. How serious is this issue?',
      star: '4.5',
      make: 'BMW',
      model: '320xi Sedan',
      year: '2015',
    },
    {
      name: 'Jane',
      title: 'Automobiles',
      description:
        'Hi. BMW dealer said that my 320xi sedan has a leak in the oil filter housing. They are asking for $2100 for the repair. How serious is this issue?',
      star: '4.1',
      make: 'BMW',
      model: '320xi Sedan',
      year: '2017',
    },
    {
      name: 'Sams',
      title: 'Automobiles, Maintainance',
      description:
        'Hi. BMW dealer said that my 320xi sedan has a leak in the oil filter housing. They are asking for $2100 for the repair. How serious is this issue?',
      star: '3.5',
      make: 'BMW',
      model: '320xi Sedan',
      year: '2011',
    },
  ]);
  const [status, setStatus] = useState(false);
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
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <View>
              <Image source={require('../images/drawer-icon.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={function () {
              setStatus(!status);
            }}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <View>
                {status ? (
                  <Image source={require('../images/online-icon.png')} />
                ) : (
                  <Image source={require('../images/offline-icon.png')} />
                )}
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {status ? 'Online' : 'Offline'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
          Good Morning Joe Smith!
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
            <FlatList
              showsVerticalScrollIndicator={false}
              data={users}
              keyExtractor={function (item) {
                return item.name;
              }}
              renderItem={function ({item}) {
                return (
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
                            <Image
                              source={require('../images/profile-image.png')}
                            />
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
                              {item.name}
                            </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                color: '#777',
                                fontWeight: '600',
                              }}>
                              {item.title}
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
                            {item.star}
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
                          {item.description.slice(0, 57)}…{' '}
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: 'bold',
                              color: '#8c86ff',
                            }}
                            onPress={function () {
                              navigation.navigate('AdviserDetailsScreen', {
                                name: item.name,
                                title: item.title,
                                description: item.description,
                                star: item.star,
                                model: item.model,
                                make: item.make,
                                year: item.year,
                              });
                            }}>
                            VIEW MORE{' '}
                            <Image
                              source={require('../images/down-arrow-logo.png')}
                            />{' '}
                          </Text>
                        </Text>
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
                );
              }}
            />
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

export default AdviserHomeScreen;
