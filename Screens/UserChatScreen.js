import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import Stars from 'react-native-stars';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';

function UserChatScreen({credentials}) {
  const navigation = useNavigation();
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [thankFeedbackModal, setThankFeedbackModal] = useState(false);
  const [star, setStar] = useState(0);
  const [isChatEnd, setIsChatEnd] = useState(false);
  const [review, setReview] = useState('');
  const [endChatModalVisible, setEndChatModalVisible] = useState(false);
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [tipModal, setTipModal] = useState(false);
  const [tipSentModal, setTipSentModal] = useState(false);
  const [tip, setTip] = useState(0);
  const [star41, setStar41] = useState(false);
  const [star42, setStar42] = useState(false);
  const [star43, setStar43] = useState(false);
  const [star44, setStar44] = useState(false);
  const [star45, setStar45] = useState(false);
  const [star46, setStar46] = useState(false);
  const [star47, setStar47] = useState(false);
  const [star48, setStar48] = useState(false);
  const [star49, setStar49] = useState(false);
  const [star410, setStar410] = useState(false);
  const [star11, setStar11] = useState(false);
  const [star12, setStar12] = useState(false);
  const [star13, setStar13] = useState(false);
  const [star14, setStar14] = useState(false);
  const [star15, setStar15] = useState(false);
  const [star16, setStar16] = useState(false);
  const [star51, setStar51] = useState(false);
  const [star52, setStar52] = useState(false);
  const [star53, setStar53] = useState(false);
  const [star54, setStar54] = useState(false);

  const startFeedbackModal = useCallback(function () {
    const time = setTimeout(function () {
      setThankFeedbackModal(function (prevValue) {
        return !prevValue;
      });
    }, 1000);

    return function () {
      clearTimeout(time);
    };
  }, []);
  const startTipModal = useCallback(function () {
    const time = setTimeout(function () {
      setTipModal(function (prevValue) {
        return !prevValue;
      });
    }, 1000);

    return function () {
      clearTimeout(time);
    };
  }, []);
  const startTipSentModal = useCallback(function () {
    const time = setTimeout(function () {
      setTipSentModal(function (prevValue) {
        return !prevValue;
      });
    }, 1000);

    return function () {
      clearTimeout(time);
    };
  }, []);
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
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
                Thank you for using LifeVize
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

      <Modal
        visible={tipSentModal}
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
                Tip sent! Thank you!
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
                  setTipSentModal(!tipSentModal);
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

      <Modal
        visible={tipModal}
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
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: 'normal',
                  textAlign: 'center',
                }}>
                Got useful advice from Joe smith?
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={function () {
                  setSelectedPrice(1);
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: selectedPrice === 1 ? '#8c86ff' : '#eee',
                    borderRadius: 8,
                    padding: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedPrice === 1 ? '#8c86ff' : '#777',
                      fontSize: 16,
                      fontWeight: 'normal',
                    }}>
                    $5
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={function () {
                  setSelectedPrice(2);
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: selectedPrice === 2 ? '#8c86ff' : '#eee',
                    borderRadius: 8,
                    padding: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedPrice === 2 ? '#8c86ff' : '#777',
                      fontSize: 16,
                      fontWeight: 'normal',
                    }}>
                    $10
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={function () {
                  setSelectedPrice(3);
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: selectedPrice === 3 ? '#8c86ff' : '#eee',
                    borderRadius: 8,
                    padding: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedPrice === 3 ? '#8c86ff' : '#777',
                      fontSize: 16,
                      fontWeight: 'normal',
                    }}>
                    $15
                  </Text>
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
                borderColor: '#eee',
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
                  }}>
                  <TextInput
                    placeholder="Custom Tip"
                    placeholderTextColor="#777"
                    style={{borderWidth: 0, color: '#777'}}
                    onChangeText={function (item) {
                      setTip(item);
                    }}
                    value={tip}
                    keyboardType="numeric"
                  />
                </View>
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
              {/* <TouchableOpacity
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
                    setTipModal(!tipModal);
                  }}>
                  DON'T TIP
                </Text>
              </TouchableOpacity> */}
              <Button
                title="SEND TIP"
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
                  setTipModal(!tipModal);
                  // startFeedbackModal();
                  startTipSentModal();
                  // navigation.navigate('PaymentMethodScreen');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={ratingModalVisible}
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
              height: '80%',
              width: '80%',
              shadowOffset: {height: 10, width: 10},
              elevation: 5,
              shadowColor: 'black',
              shadowOpacity: 0.45,
              shadowRadius: 10,
              padding: 10,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star-logo-large.png')}
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
                  How was your session with Laura
                </Text>
                <View style={{marginTop: 15}}>
                  <Stars
                    half={false}
                    default={0}
                    spacing={10}
                    starSize={25}
                    count={5}
                    fullStar={require('../images/star-filled.png')}
                    emptyStar={require('../images/star-unfilled.png')}
                    update={function (value) {
                      console.log(value);
                      setStar(value);
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'normal',
                    textAlign: 'center',
                    marginVertical: 10,
                  }}>
                  {star === 0
                    ? 'Rate Your Experience!'
                    : star === 4
                    ? 'Things you liked:'
                    : star === 5
                    ? 'Things you liked:'
                    : 'Things They could work on?'}
                </Text>
                {star === 4 ? (
                  <View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar41(!star41);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star41 ? '#8c86ff' : '#eee',
                            backgroundColor: star41 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star41 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Knowledgeable
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar42(!star42);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star42 ? '#8c86ff' : '#eee',
                            backgroundColor: star42 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star42 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Fast
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar43(!star43);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star43 ? '#8c86ff' : '#eee',
                            backgroundColor: star43 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star43 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Helpful Attitude
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar44(!star44);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star44 ? '#8c86ff' : '#eee',
                            backgroundColor: star44 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star44 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Above and Beyond
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 16,
                        fontWeight: 'normal',
                        textAlign: 'center',
                        marginVertical: 10,
                      }}>
                      Things They could work on?
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar45(!star45);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star45 ? '#8c86ff' : '#eee',
                            backgroundColor: star45 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star45 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Not Knowledgeable
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar46(!star46);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star46 ? '#8c86ff' : '#eee',
                            backgroundColor: star46 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star46 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Slow
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar47(!star47);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star47 ? '#8c86ff' : '#eee',
                            backgroundColor: star47 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star47 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Lazy
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar48(!star48);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star48 ? '#8c86ff' : '#eee',
                            backgroundColor: star48 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star48 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Rude
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar49(!star49);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star49 ? '#8c86ff' : '#eee',
                            backgroundColor: star49 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star49 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Pushy
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar410(!star410);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star410 ? '#8c86ff' : '#eee',
                            backgroundColor: star410 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star410 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Asking for Tip
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : star === 5 ? (
                  <View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar51(!star51);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star51 ? '#8c86ff' : '#eee',
                            backgroundColor: star51 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star51 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Knowledgeable
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar52(!star52);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star52 ? '#8c86ff' : '#eee',
                            backgroundColor: star52 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star52 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Fast
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar53(!star53);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star53 ? '#8c86ff' : '#eee',
                            backgroundColor: star53 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star53 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Helpful Attitude
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar54(!star54);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star54 ? '#8c86ff' : '#eee',
                            backgroundColor: star54 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star54 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Above and Beyond
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : star !== 0 ? (
                  <View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar11(!star11);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star11 ? '#8c86ff' : '#eee',
                            backgroundColor: star11 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star11 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Not Knowledgeable
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar12(!star12);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star12 ? '#8c86ff' : '#eee',
                            backgroundColor: star12 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star12 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Slow
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar13(!star13);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star13 ? '#8c86ff' : '#eee',
                            backgroundColor: star13 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star13 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Lazy
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={function () {
                          setStar14(!star14);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star14 ? '#8c86ff' : '#eee',
                            backgroundColor: star14 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star14 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Rude
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar15(!star15);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: star15 ? '#8c86ff' : '#eee',
                            backgroundColor: star15 ? '#eeedff' : 'white',
                            borderRadius: 6,
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star15 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Pushy
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={function () {
                          setStar16(!star16);
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderRadius: 6,
                            borderColor: star16 ? '#8c86ff' : '#eee',
                            backgroundColor: star16 ? '#eeedff' : 'white',
                            padding: 5,
                            marginHorizontal: 2,
                          }}>
                          <Text
                            style={{
                              color: star16 ? '#8c86ff' : '#777',
                              fontSize: 12,
                              fontWeight: '500',
                            }}>
                            Other
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View></View>
                )}
                {star16 && (
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
                          placeholder="Write a review"
                          placeholderTextColor="#777"
                          style={{borderWidth: 0, color: 'black'}}
                          value={review}
                          onChangeText={function (item) {
                            setReview(item);
                          }}
                        />
                      </View>
                    </View>
                  </View>
                )}
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
                    setRatingModalVisible(function (prevValue) {
                      return !prevValue;
                    });
                    setIsChatEnd(function (prevValue) {
                      return !prevValue;
                    });
                    if (star > 2) {
                      startTipModal();
                    } else {
                      startFeedbackModal();
                    }
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        statusBarTranslucent={true}
        visible={endChatModalVisible}
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
              <Text>
                <IonIcons name="close-circle" size={50} color="#8C86FF" />
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  marginTop: 15,
                }}>
                Are you sure you want to end chat with Laura
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
                  setEndChatModalVisible(!endChatModalVisible);
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
                  setEndChatModalVisible(!endChatModalVisible);
                  setRatingModalVisible(!ratingModalVisible);
                }}
              />
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
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={require('../images/profile-small-image.png')} />
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'normal',
                marginLeft: 5,
              }}>
              Laura
            </Text>
          </View>
          <View>
            {!isChatEnd && (
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}
                onPress={function () {
                  setEndChatModalVisible(!endChatModalVisible);
                }}>
                END CHAT
              </Text>
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Getting Useful advice?
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={function () {
                setTipModal(!tipModal);
              }}>
              <View
                style={{
                  backgroundColor: '#f9b408',
                  borderRadius: 14,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Image source={require('../images/dollar-icon.png')} />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                    letterSpacing: 0.09,
                    marginLeft: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    alignSelf: 'center',
                  }}>
                  SEND TIP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: '90%',
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 15,
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: '#eeedff',
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 14,
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginVertical: 10,
                }}>
                <Text
                  style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                  Hi. BMW dealer said that my 320xi sedan has a leak in the oil
                  filter housing. They are asking for $2100 for the repair. How
                  serious is this issue
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    color: '#777',
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  02:50
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#eeedff',
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 14,
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                  padding: 5,
                  marginVertical: 10,
                }}>
                <Text
                  style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                  Hi. BMW dealer said that my 320xi sedan has a leak in the oil
                  filter housing. They are asking for $2100 for the repair. How
                  serious is this issue
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    color: '#777',
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  02:50
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#D3D3D3',
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 0,
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'flex-end',
                  padding: 5,
                  marginVertical: 10,
                }}>
                <Text
                  style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                  Hi. BMW dealer said that my 320xi sedan has a leak in the oil
                  filter housing. They are asking for $2100 for the repair. How
                  serious is this issue
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    color: '#777',
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  02:50
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#55279c',
                  borderRadius: 25,
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  padding: 5,
                  marginVertical: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#fff', fontSize: 14, fontWeight: 'normal'}}>
                  Wohoo! Laura just tipped you $10
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#D3D3D3',
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 0,
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'flex-end',
                  padding: 5,
                  marginVertical: 10,
                }}>
                <Text
                  style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                  Hi. BMW dealer said that my 320xi sedan has a leak in the oil
                  filter housing. They are asking for $2100 for the repair. How
                  serious is this issue
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    color: '#777',
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  02:50
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#D3D3D3',
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 0,
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'flex-end',
                  padding: 5,
                  marginVertical: 10,
                }}>
                <Text
                  style={{color: '#333', fontSize: 16, fontWeight: 'normal'}}>
                  Hi. BMW dealer said that my 320xi sedan has a leak in the oil
                  filter housing. They are asking for $2100 for the repair. How
                  serious is this issue
                </Text>
                <Text
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    color: '#777',
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  02:50
                </Text>
              </View>
            </ScrollView>
            {!isChatEnd && (
              <View
                style={{
                  borderRadius: 11,
                  borderWidth: 1,
                  borderColor: '#eee',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flex: 1}}>
                  <TextInput
                    style={{borderWidth: 0, color: 'black'}}
                    placeholderTextColor="#777"
                    placeholder="Type something"
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{marginHorizontal: 10}}
                    source={require('../images/file-picker-logo.png')}
                  />
                  <Image
                    style={{marginHorizontal: 10}}
                    source={require('../images/camera-logo.png')}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

function mapStateToProps(state) {
  return {credentials: state.credentials};
}

export default connect(mapStateToProps)(UserChatScreen);
