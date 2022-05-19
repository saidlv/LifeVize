import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';

function PaymentMethodScreen({credentials}) {
  const navigation = useNavigation();
  const [condition, setCondition] = useState(false);
  const [cardNumber, setCardNumber] = useState();
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState();
  const [cvv, setCVV] = useState();
  const [saveCardCheckbox, setSaveCardCheckbox] = useState(false);
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
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
              console.log(credentials);
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
            <View>
              <Image source={require('../images/arrow-left-logo.png')} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'normal',
              marginTop: 5,
            }}>
            Payment Method
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
          {condition ? (
            <View>
              <Text
                style={{
                  color: '#777',
                  fontSize: 20,
                  fontWeight: 'normal',
                  marginLeft: 10,
                }}>
                Please enter your card details{' '}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '95%',
                  borderWidth: 1,
                  borderColor: '#eee',
                  borderRadius: 7,
                  marginVertical: 15,
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
                      placeholder="Card Number"
                      placeholderTextColor="#777"
                      style={{borderWidth: 0, color: '#777'}}
                      value={cardNumber}
                      onChangeText={setCardNumber}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '95%',
                  borderWidth: 1,
                  borderColor: '#eee',
                  borderRadius: 7,
                  marginVertical: 15,
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
                      placeholder="Card Holder's Name"
                      placeholderTextColor="#777"
                      style={{borderWidth: 0, color: '#777'}}
                      value={cardHolderName}
                      onChangeText={setCardHolderName}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    width: '45%',
                    borderWidth: 1,
                    borderColor: '#eee',
                    borderRadius: 7,
                    marginVertical: 15,
                    marginHorizontal: 10,
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
                        placeholder="Expiry Date"
                        placeholderTextColor="#777"
                        style={{borderWidth: 0, color: '#777'}}
                        value={expiryDate}
                        onChangeText={setExpiryDate}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    width: '45%',
                    borderWidth: 1,
                    borderColor: '#eee',
                    borderRadius: 7,
                    marginVertical: 15,
                    marginHorizontal: 10,
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
                        placeholder="CVV"
                        placeholderTextColor="#777"
                        style={{borderWidth: 0, color: '#777'}}
                        value={cvv}
                        onChangeText={setCVV}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <CheckBox
                    value={saveCardCheckbox}
                    onValueChange={setSaveCardCheckbox}
                  />
                  <Text
                    style={{
                      color: '#777',
                      fontSize: 14,
                      fontWeight: '500',
                      marginLeft: 5,
                      marginTop: 5,
                    }}>
                    Save your card, it’s safe.
                  </Text>
                </View>
                <Button
                  title="PROCEED"
                  titleStyle={{color: 'white'}}
                  buttonStyle={{backgroundColor: '#8C86FF', borderRadius: 5}}
                  containerStyle={{
                    width: '95%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    marginVertical: 10,
                  }}
                  onPress={function () {
                    navigation.navigate('PaymentConfirmationPage');
                  }}
                />
              </View>
            </View>
          ) : (
            <View style={{flex: 1}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  borderRadius: 24,
                  padding: 15,
                  marginVertical: 15,
                }}>
                <View
                  style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                  <View>
                    <Image
                      source={require('../images/visa-card-logo.png')}
                      style={{marginTop: 5}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 16,
                        fontWeight: 'normal',
                        marginLeft: 5,
                      }}>
                      XXXX 1240
                    </Text>
                  </View>
                </View>
                <View>
                  <CheckBox value={card1} onValueChange={setCard1} />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                  borderRadius: 24,
                  padding: 15,
                  marginVertical: 15,
                }}>
                <View
                  style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                  <View>
                    <Image
                      source={require('../images/visa-card-logo.png')}
                      style={{marginTop: 5}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 16,
                        fontWeight: 'normal',
                        marginLeft: 5,
                      }}>
                      XXXX 1240
                    </Text>
                  </View>
                </View>
                <View>
                  <CheckBox value={card2} onValueChange={setCard2} />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <Button
                  title="ADD NEW CARD"
                  titleStyle={{color: 'white'}}
                  buttonStyle={{backgroundColor: '#8C86FF', borderRadius: 5}}
                  containerStyle={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    marginVertical: 15,
                  }}
                  onPress={function () {
                    setCondition(!condition);
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

function mapStateToProps(state) {
  return {credentials: state.credentials};
}

export default connect(mapStateToProps)(PaymentMethodScreen);
