import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

function SessionDetailScreen() {
  const navigation = useNavigation();
  const [condition, setCondition] = useState(false);
  const [complainModal, setComplainModal] = useState(false);
  const [complain, setComplain] = useState('');
  const [thankFeedbackModal, setThankFeedbackModal] = useState(false);

  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <Modal
        visible={complainModal}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              height: '50%',
              width: '80%',
              shadowOffset: {height: 10, width: 10},
              elevation: 5,
              shadowColor: 'black',
              shadowOpacity: 0.45,
              shadowRadius: 10,
              padding: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/complain-icon.png')}
                style={{marginVertical: 10}}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'normal',
                  color: '#000',
                  marginVertical: 10,
                  textAlign: 'center',
                }}>
                Can you please explain what went wrong?
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  marginVertical: 20,
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
                      multiline={true}
                      placeholder="Write the problem you faced"
                      placeholderTextColor="#777"
                      style={{borderWidth: 0, color: 'black'}}
                      value={complain}
                      onChangeText={function (item) {
                        setComplain(item);
                      }}
                    />
                  </View>
                </View>
              </View>
              <Button
                title="CONTINUE"
                titleStyle={{color: 'white'}}
                buttonStyle={{backgroundColor: '#8C86FF', borderRadius: 5}}
                containerStyle={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginVertical: 15,
                }}
                onPress={function () {
                  setComplainModal(function (prevValue) {
                    setComplainModal(!prevValue);
                  });
                  setThankFeedbackModal(function (prevValue) {
                    setThankFeedbackModal(!prevValue);
                  });
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={thankFeedbackModal}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              height: '50%',
              width: '80%',
              shadowOffset: {height: 10, width: 10},
              elevation: 5,
              shadowColor: 'black',
              shadowOpacity: 0.45,
              shadowRadius: 10,
              padding: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Image source={require('../images/feedback-icon.png')} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  marginTop: 15,
                }}>
                Thank you for Your Feedback.
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={function () {
                  setThankFeedbackModal(!thankFeedbackModal);
                }}
                style={{marginVertical: 10}}>
                <Text
                  style={{
                    color: '#777',
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  CLOSE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
            Session Details
          </Text>
          <View>
            <TouchableOpacity
              onPress={function () {
                setCondition(!condition);
              }}>
              <Image source={require('../images/option-icon.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {condition && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 16,
                paddingVertical: 10,
                paddingHorizontal: 30,
                position: 'absolute',
              }}>
              <Text
                style={{fontSize: 16, color: '#333', fontWeight: '500'}}
                onPress={function () {
                  setComplainModal(!complainModal);
                }}>
                Appeal
              </Text>
            </View>
          </View>
        )}
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
            padding: 20,
          }}>
          <ScrollView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                width: '90%',
                marginTop: 10,
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
                    <TouchableOpacity
                      onPress={function () {
                        navigation.navigate('UserProfileScreen');
                      }}>
                      <Image source={require('../images/profile-image.png')} />
                    </TouchableOpacity>
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
                  Hi. BMW dealer said that my 320xi sedan has a leak in the oil
                  filter housing. They are asking for $2100 for the repair. How
                  serious is this issue?
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
                <Text style={{fontSize: 12, fontWeight: '600', color: '#777'}}>
                  Make
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: '500',
                    marginTop: 2,
                  }}>
                  Volkswagen
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
                  }}>
                  Golf GT
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
                  }}>
                  2016
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#ddd',
                  marginTop: 10,
                }}></View>
              <View style={{marginTop: 10}}>
                <Text style={{color: '#777', fontSize: 12, fontWeight: '600'}}>
                  Total Tip Recieved
                </Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: '#333'}}>
                  $10
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#ddd',
                  marginTop: 10,
                }}></View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View>
                  <Text
                    style={{color: '#777', fontSize: 12, fontWeight: '600'}}>
                    Rating Recieved
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={require('../images/star-logo.png')} />
                  <Text
                    style={{color: '#333', fontSize: 16, fontWeight: '600'}}>
                    4.5
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                  Great Experience! The advice he gave me helped a lot with my
                  car and saved me about $200
                </Text>
              </View>
              <Button
                title="VIEW CHAT HISTORY"
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
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default SessionDetailScreen;
