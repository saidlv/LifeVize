import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function VerificationCodeScreen() {
  const navigation = useNavigation();
  const [FirstCode, setFirstCode] = useState();
  const [SecondCode, setSecondCode] = useState();
  const [ThirdCode, setThirdCode] = useState();
  const [FourthCode, setFourthCode] = useState();

  const input_ref2 = useRef();
  const input_ref3 = useRef();
  const input_ref4 = useRef();

  function onVerifyCode() {
    navigation.navigate('ApprovalWaiting');
  }

  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={{marginTop: 20}}>
            <Image source={require('../images/arrow-left-logo.png')} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 120,
          }}>
          <Image source={require('../images/tick-circle.png')} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
            Verification Code
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginTop: 10,
              fontWeight: 'normal',
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
            }}>
            We sent you a code to verify your account
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              borderRadius: 5,
            }}>
            <TextInput
              onChangeText={function (item) {
                setFirstCode(item);
              }}
              keyboardType="numeric"
              maxLength={1}
              value={FirstCode}
              style={{
                borderWidth: 0,
                color: 'white',
                textAlign: 'center',
              }}
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={function () {
                input_ref2.current.focus();
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              borderRadius: 5,
            }}>
            <TextInput
              onChangeText={function (item) {
                setSecondCode(item);
              }}
              style={{borderWidth: 0, color: 'white', textAlign: 'center'}}
              value={SecondCode}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="next"
              ref={input_ref2}
              onSubmitEditing={function () {
                input_ref3.current.focus();
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              borderRadius: 5,
            }}>
            <TextInput
              onChangeText={function (item) {
                setThirdCode(item);
              }}
              keyboardType="numeric"
              maxLength={1}
              style={{borderWidth: 0, color: 'white', textAlign: 'center'}}
              value={ThirdCode}
              returnKeyType="next"
              ref={input_ref3}
              onSubmitEditing={function () {
                input_ref4.current.focus();
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              borderRadius: 5,
            }}>
            <TextInput
              onChangeText={function (item) {
                setFourthCode(item);
              }}
              keyboardType="numeric"
              maxLength={1}
              style={{borderWidth: 0, color: 'white', textAlign: 'center'}}
              value={FourthCode}
              ref={input_ref4}
            />
          </View>
        </View>

        <View style={{marginTop: 15}}>
          <Button
            title="VERIFY"
            titleStyle={{color: '#8C85FF'}}
            buttonStyle={{backgroundColor: 'white', borderRadius: 5}}
            containerStyle={{
              width: '95%',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginTop: 20,
            }}
            onPress={onVerifyCode}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'normal'}}>
            Didn’t you receive the OTP?
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
            Resend OTP (29s)
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
});

export default VerificationCodeScreen;
