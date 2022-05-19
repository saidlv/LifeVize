import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

function PaymentConfirmationPage({credentials}) {
  const navigation = useNavigation();
  const [thankTipModal, setThankTipModal] = useState(false);
  const [cardNumber, setCardNumber] = useState();
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState();
  const [cvv, setCVV] = useState();
  const [saveCardCheckbox, setSaveCardCheckbox] = useState(false);
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <Modal
        visible={thankTipModal}
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
                Thank you for the tip to Joe
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
                  setThankTipModal(!thankTipModal);
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
            Payment Confirmation
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
            height: '70%',
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#777', fontSize: 20, fontWeight: 'normal'}}>
              Are you sure ?
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
            <View style={{marginTop: 10}}>
              <Image source={require('../images/profile-image.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '600'}}>
                Joe smith
              </Text>
              <Text style={{color: '#777', fontSize: 14, fontWeight: '600'}}>
                Automobile, Maintainance
              </Text>
              <Text style={{color: '#777', fontSize: 14, fontWeight: '500'}}>
                Session title
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#777',
              fontSize: 14,
              fontWeight: '600',
              marginTop: 20,
            }}>
            Order Summary
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '600'}}>
                Total
              </Text>
            </View>
            <View>
              <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
                $10
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#777',
              fontSize: 14,
              fontWeight: '600',
              marginTop: 25,
            }}>
            Payment
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View>
              <Text style={{color: '#333', fontSize: 16, fontWeight: '600'}}>
                Visa ***** 0220, by Laura
              </Text>
            </View>
            <View>
              <Image source={require('../images/visa-card-logo.png')} />
            </View>
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
                }}
                onPress={function () {
                  navigation.navigate('PaymentMethodScreen');
                }}>
                CANCEL
              </Text>
            </TouchableOpacity>
            <Button
              title="PROCEED"
              titleStyle={{color: 'white'}}
              buttonStyle={{backgroundColor: '#8C86FF', borderRadius: 5}}
              containerStyle={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                marginVertical: 10,
              }}
              onPress={function () {
                setThankTipModal(!thankTipModal);
              }}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

function mapStateToProps(state) {
  return {credentials: state.credentials};
}

export default connect(mapStateToProps)(PaymentConfirmationPage);
