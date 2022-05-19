import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {changeUser} from '../actions';

function LoginScreen({credentials, changeUser}) {
  const [pVisibility, setPVisibility] = useState(true);
  const navigation = useNavigation();
  const [condition, setCondition] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function onConditionChange() {
    setCondition(!condition);
  }
  function goToSignupPage() {
    navigation.navigate('Signup', {
      advisor: condition,
    });
  }
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <ScrollView style={styles.screen}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logoStyle}
        />
        <Text style={styles.textStyle}>{condition && 'Advisor'} Sign in</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: '90%',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
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
                marginHorizontal: 2,
              }}>
              <Image source={require('../images/email-logo.png')} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                marginHorizontal: 2,
              }}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                style={{borderWidth: 0, color: 'white'}}
                onChangeText={function (item) {
                  setEmail(item);
                }}
                value={email}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: '90%',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
            marginVertical: 15,
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
                padding: 5,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}>
                <Image source={require('../images/password-logo.png')} />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                  width: '80%',
                }}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="white"
                  style={{borderWidth: 0, color: 'white'}}
                  onChangeText={function (item) {
                    setPassword(item);
                  }}
                  value={password}
                  secureTextEntry={pVisibility}
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginHorizontal: 2,
              }}>
              {pVisibility ? (
                <TouchableOpacity
                  onPress={function () {
                    setPVisibility(!pVisibility);
                  }}>
                  <Image source={require('../images/hide-password-logo.png')} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={function () {
                    setPVisibility(!pVisibility);
                  }}>
                  <Image source={require('../images/show-password-logo.png')} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'flex-end',
              color: 'white',
              fontWeight: 'bold',
            }}
            onPress={function () {
              navigation.navigate('ForgotPasswordScreen');
            }}>
            Forget Password?
          </Text>
        </View>
        <Button
          title="Login"
          titleStyle={{color: '#8C85FF'}}
          buttonStyle={{backgroundColor: 'white'}}
          containerStyle={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            marginTop: '5%',
          }}
          onPress={function () {
            if (condition) {
              changeUser('advisor', navigation);
            } else {
              changeUser('user', navigation);
            }
          }}
        />
        {!condition && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
            }}>
            <View style={styles.dividerStyle}>
              <View
                style={{
                  height: 1,
                  backgroundColor: 'white',
                  width: '30%',
                  marginTop: 10,
                }}></View>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                or continue with
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: 'white',
                  width: '30%',
                  marginTop: 10,
                }}></View>
            </View>
          </View>
        )}
        {!condition && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '7%',
            }}>
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 15,
                borderRadius: 5,
              }}>
              <Image source={require('../images/google-icon.png')} />
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 15,
                borderRadius: 5,
              }}>
              <Image source={require('../images/facebook-icon.png')} />
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 15,
                borderRadius: 5,
              }}>
              <Image source={require('../images/apple-icon.png')} />
            </View>
          </View>
        )}
        <Text
          onPress={onConditionChange}
          style={{
            color: 'white',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            marginTop: '5%',
          }}>
          Are you {condition ? 'seeking advice' : 'an Advisor'}? Sign in
        </Text>
        <Text
          onPress={goToSignupPage}
          style={{
            color: 'white',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            marginVertical: '2%',
          }}>
          New User? Sign Up
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  logoStyle: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 25,
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  dividerStyle: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5%',
    width: '90%',
  },
});

function mapStateToProps(state) {
  return {credentials: state.credentials};
}

export default connect(mapStateToProps, {changeUser})(LoginScreen);
