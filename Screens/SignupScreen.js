import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function SignupScreen({route}) {
  const {advisor = false} = route.params;
  const navigation = useNavigation();
  const [dobCondition, setdobCondition] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [condition, setCondition] = useState(advisor);
  const [step, setStep] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [pVisibility, setPVisibility] = useState(true);
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [bio, setBio] = useState('');
  const [zipCode, setZipCode] = useState('');
  function goToLoginPage() {
    navigation.navigate('Login');
  }
  function onConditionChange() {
    setCondition(!condition);
  }
  function onStepChange() {
    if (!step) {
      setStep(!step);
    } else {
      console.log('Take a action for sign Up');
      navigation.navigate('VerificationCode');
    }
  }
  function onUserSignup() {
    navigation.navigate('VerificationCode');
  }
  async function onDriverLicenseUpload() {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      // const response = await launchCamera({mediaType: 'photo'});
      Alert.alert('Uploaded', 'Your File was successfully uploaded', [
        {text: 'OK', onPress: function () {}},
      ]);
      console.log(response);
    } catch (err) {
      Alert.alert(
        'Upload Fail',
        'Your File was not uploaded due to some error',
        [{text: 'OK', onPress: function () {}}],
      );
      console.log(err);
    }
  }
  if (!step) {
    return (
      <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
        <ScrollView style={styles.screen}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logoStyle}
          />
          <Text style={styles.textStyle}>
            Sign up {condition ? 'as an Advisor' : 'as an User'}
          </Text>
          {condition && (
            <Text
              style={{
                color: 'white',
                marginTop: '2%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
              }}>
              Minimum age for Advisor should be 18 years.
            </Text>
          )}
          {condition && (
            <Text
              style={{
                color: 'white',
                marginTop: '2%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
              }}>
              Step {step ? 2 : 1} / 2
            </Text>
          )}
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
                <Image source={require('../images/profile-icon.png')} />
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
                  placeholder="First Name"
                  placeholderTextColor="white"
                  style={{borderWidth: 0, color: 'white'}}
                  onChangeText={function (item) {
                    setfName(item);
                  }}
                  value={fName}
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
                <Image source={require('../images/profile-icon.png')} />
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
                  placeholder="Last Name"
                  placeholderTextColor="white"
                  style={{borderWidth: 0, color: 'white'}}
                  onChangeText={function (item) {
                    setlName(item);
                  }}
                  value={lName}
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
                    <Image
                      source={require('../images/hide-password-logo.png')}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={function () {
                      setPVisibility(!pVisibility);
                    }}>
                    <Image
                      source={require('../images/show-password-logo.png')}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          {condition ? (
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
                  <Image source={require('../images/calendar-icon.png')} />
                </View>
                <TouchableOpacity
                  onPress={function () {
                    setDateOpen(true);
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
                      placeholder={dob.toString()}
                      placeholderTextColor="white"
                      style={{borderWidth: 0, color: 'white'}}
                      value={
                        dobCondition
                          ? dob.toLocaleDateString('en-US')
                          : 'Date of Birth'
                      }
                      editable={false}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
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
                  <Image source={require('../images/location-logo.png')} />
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
                    placeholder="Zip Code"
                    placeholderTextColor="white"
                    style={{borderWidth: 0, color: 'white'}}
                    onChangeText={function (item) {
                      setZipCode(item);
                    }}
                    value={zipCode}
                  />
                </View>
              </View>
            </View>
          )}

          <DatePicker
            modal
            open={dateOpen}
            date={dob}
            onConfirm={function (date) {
              setDateOpen(false);
              setDOB(date);
              setdobCondition(true);
            }}
            onCancel={function () {
              setDateOpen(false);
            }}
            mode="date"
          />
          {condition ? (
            <Button
              title={step ? 'SIGN UP' : 'NEXT'}
              titleStyle={{color: '#8C85FF'}}
              buttonStyle={{backgroundColor: 'white'}}
              containerStyle={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              onPress={onStepChange}
            />
          ) : (
            <Button
              title="SIGNUP"
              titleStyle={{color: '#8C85FF'}}
              buttonStyle={{backgroundColor: 'white'}}
              containerStyle={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              onPress={onUserSignup}
            />
          )}
          {/* <Text
            onPress={onConditionChange}
            style={{
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginTop: '5%',
            }}>
            Are You an {condition ? 'User' : 'Advisor'}? Sign Up
          </Text> */}
          <Text
            onPress={goToLoginPage}
            style={{
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginVertical: '2%',
            }}>
            Already a member? Login
          </Text>
        </ScrollView>
      </LinearGradient>
    );
  } else {
    return (
      <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
        <ScrollView style={styles.screen}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logoStyle}
          />
          <Text style={styles.textStyle}>
            Sign up {condition && 'as an Advisor'}
          </Text>
          {condition && (
            <Text
              style={{
                color: 'white',
                marginTop: '2%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
              }}>
              Minimum age for SME should be 18 years.
            </Text>
          )}
          {condition && (
            <Text
              style={{
                color: 'white',
                marginTop: '2%',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
              }}>
              Step {step ? 2 : 1} / 2
            </Text>
          )}
          <View
            style={{
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginTop: '5%',
            }}>
            <TouchableOpacity
              onPress={function () {
                navigation.navigate('Categories');
              }}>
              <View
                style={{
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: 'none',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 15,
                }}>
                <Text style={{color: 'white'}}>Select Categories</Text>
                <Text style={{color: 'white'}}> > </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginTop: '5%',
            }}>
            <TouchableOpacity
              onPress={function () {
                navigation.navigate('SubCategories');
              }}>
              <View
                style={{
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: 'none',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 15,
                }}>
                <Text style={{color: 'white'}}>Select Sub-Categories</Text>
                <Text style={{color: 'white'}}> > </Text>
              </View>
            </TouchableOpacity>
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
                  placeholder="Linkedin Profile (optional)"
                  placeholderTextColor="white"
                  style={{borderWidth: 0, color: 'white'}}
                  value={linkedinProfile}
                  onChangeText={function (item) {
                    setLinkedinProfile(item);
                  }}
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
                  padding: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: 1,
                  marginHorizontal: 2,
                }}>
                <TextInput
                  placeholder="Driver's License"
                  placeholderTextColor="white"
                  style={{borderWidth: 0, color: 'white'}}
                  editable={false}
                  selectTextOnFocus={false}
                />
              </View>
              <TouchableOpacity onPress={onDriverLicenseUpload}>
                <View
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                    padding: 15,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'white',
                  }}>
                  <Text
                    style={{
                      color: '#8c85ff',
                    }}>
                    Upload
                  </Text>
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
              borderWidth: 1,
              borderColor: 'white',
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
                  placeholder="Please tell advice seekers about yourself."
                  placeholderTextColor="white"
                  style={{borderWidth: 0, color: 'white'}}
                  value={bio}
                  onChangeText={function (item) {
                    setBio(item);
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={function () {
                  setCheckbox(!checkbox);
                }}>
                <View
                  style={{
                    marginTop: 5,
                  }}>
                  {checkbox ? (
                    <Image source={require('../images/checked-checkbox.png')} />
                  ) : (
                    <Image
                      source={require('../images/unchecked-checkbox.png')}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <View>
                <Text style={{color: 'white'}}>
                  By continuing, you agree to our{' '}
                  <Text style={{textDecorationLine: 'underline'}}>
                    {' '}
                    Terms of Services{' '}
                  </Text>{' '}
                  &{' '}
                  <Text style={{textDecorationLine: 'underline'}}>
                    {' '}
                    Privacy Policy{' '}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <Button
            title={step ? 'SIGN UP' : 'NEXT'}
            titleStyle={{color: '#8C85FF'}}
            buttonStyle={{backgroundColor: 'white'}}
            containerStyle={{
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginTop: '5%',
            }}
            onPress={onStepChange}
          />
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
            Are You an {condition ? 'User' : 'Advisor'}? Sign Up
          </Text>
          <Text
            onPress={goToLoginPage}
            style={{
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              marginVertical: '2%',
            }}>
            Already a member? Login
          </Text>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  logoStyle: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
});

export default SignupScreen;
