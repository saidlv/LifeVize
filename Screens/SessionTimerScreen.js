import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

function SessionTimerScreen() {
  const navigation = useNavigation();
  const [cancelSession, setCancelSession] = useState(false);
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <Modal
        statusBarTranslucent={true}
        visible={cancelSession}
        transparent={true}
        animationType="slide">
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
              {/* <Image
                source={require('../images/circular-three-dots-logo.png')}
              /> */}
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  marginTop: 15,
                }}>
                Are you sure you want to cancel session request?
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
                  setCancelSession(!cancelSession);
                }}
                style={{marginVertical: 10}}>
                <Text
                  style={{
                    color: '#777',
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  NO
                </Text>
              </TouchableOpacity>
              <Button
                title="YES"
                titleStyle={{color: 'white'}}
                buttonStyle={{backgroundColor: '#8C86FF', borderRadius: 5}}
                containerStyle={{
                  width: '85%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginVertical: 10,
                }}
                onPress={function () {
                  setCancelSession(!cancelSession);
                  navigation.navigate('SubCategoryDetailScreen');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
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
          <View>
            <Image source={require('../images/drawer-icon.png')} />
          </View>
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
        <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
          Please wait while we look for and adviser for your query…
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <View>
          <Image source={require('../images/timer-icon.png')} />
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={{color: '#fff', fontSize: 44, fontWeight: 'normal'}}>
            14:59
          </Text>
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
            padding: 20,
          }}>
          <ScrollView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <View>
                <Image source={require('../images/car-icon.png')} />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: 10,
                }}>
                <Text style={{color: '#333', fontSize: 16, fontWeight: 'bold'}}>
                  Automobiles
                </Text>
                <Text style={{fontWeight: '500', fontSize: 14, color: '#777'}}>
                  Maintenance
                </Text>
              </View>
            </View>
            <View style={{marginVertical: 15}}>
              <Text style={{color: '#777', fontSize: 12, fontWeight: '600'}}>
                Session Title
              </Text>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                Session Title heading goes here lorem ipsum lorem ipsum
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '600',
                  marginTop: 20,
                }}>
                Vehicle Details
              </Text>
              <Text
                style={{
                  color: '#777',
                  fontSize: 12,
                  fontWeight: '600',
                  marginTop: 15,
                }}>
                Make
              </Text>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                BMW
              </Text>
              <Text
                style={{
                  color: '#777',
                  fontSize: 12,
                  fontWeight: '600',
                  marginTop: 15,
                }}>
                Model
              </Text>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                320xi Sedan
              </Text>
              <Text
                style={{
                  color: '#777',
                  fontSize: 12,
                  fontWeight: '600',
                  marginTop: 15,
                }}>
                Year
              </Text>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '500'}}>
                2015
              </Text>
              <View
                style={{
                  height: 1,
                  marginTop: 10,
                  backgroundColor: '#A9A9A9',
                }}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={{color: '#e02020', fontSize: 14, fontWeight: '600'}}
                  onPress={function () {
                    setCancelSession(!cancelSession);
                  }}>
                  CANCEL REQUEST
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default SessionTimerScreen;
