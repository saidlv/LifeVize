import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

function SubCategoryDetailScreen() {
  const navigation = useNavigation();
  const [question, setQuestion] = useState('');

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
              navigation.navigate('UserSubCategoryScreen');
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
            height: '90%',
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 5,
          }}>
          <ScrollView>
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
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                backgroundColor: '#eee',
                borderRadius: 10,
                marginTop: 20,
                padding: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                <Image source={require('../images/maintenance-icon.png')} />{' '}
                Maintenance
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  borderColor: '#ddd',
                  marginVertical: 15,
                  padding: 10,
                }}>
                <View>
                  <Text
                    style={{
                      color: '#777',
                      fontSize: 16,
                      fontWeight: 'normal',
                    }}>
                    Model
                  </Text>
                </View>
                <View>
                  <Image source={require('../images/dropdown-icon.png')} />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  borderColor: '#ddd',
                  marginVertical: 15,
                  padding: 10,
                }}>
                <View>
                  <Text
                    style={{color: '#777', fontSize: 16, fontWeight: 'normal'}}>
                    Make
                  </Text>
                </View>
                <View>
                  <Image source={require('../images/dropdown-icon.png')} />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  borderColor: '#ddd',
                  marginVertical: 15,
                  padding: 10,
                }}>
                <View>
                  <Text
                    style={{color: '#777', fontSize: 16, fontWeight: 'normal'}}>
                    Year
                  </Text>
                </View>
                <View>
                  <Image source={require('../images/dropdown-icon.png')} />
                </View>
              </View>
              {/* <Input
                placeholder="Enter question here"
                placeholderTextColor="#333"
                style={{fontSize: 16, fontWeight: 'normal'}}
                inputStyle={{padding: 0}}
                value={question}
                onChangeText={setQuestion}
              /> */}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  marginVertical: 15,
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
                      placeholder="Enter question here"
                      placeholderTextColor="#333"
                      style={{borderWidth: 0, color: 'black'}}
                      value={question}
                      onChangeText={setQuestion}
                    />
                  </View>
                </View>
              </View>
              <Button
                title="START SESSION"
                titleStyle={{color: 'white'}}
                buttonStyle={{
                  backgroundColor: question.length > 0 ? '#8C86FF' : '#777',
                  borderRadius: 5,
                }}
                containerStyle={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                onPress={function () {
                  navigation.navigate('SessionTimerScreen');
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

export default SubCategoryDetailScreen;
