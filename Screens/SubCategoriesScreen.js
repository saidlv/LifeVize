import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {changeSubCategories} from '../actions';

function SubCategoriesScreen({changeSubCategories, selectedSubCategory}) {
  const [subCategories, setSubCategories] = useState([
    'Maintenanace',
    'Buying',
    'Selling',
  ]);
  console.log(selectedSubCategory);
  const navigation = useNavigation();
  return (
    <LinearGradient style={{flex: 1}} colors={['#c9e6ff', '#8982ff']}>
      <View style={styles.screen}>
        <View
          style={{
            width: '60%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '10%',
          }}>
          <TouchableOpacity
            onPress={function () {
              navigation.navigate('Signup');
            }}>
            <Image
              source={require('../images/arrow-left-logo.png')}
              style={{marginHorizontal: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 20}}>Sub Categories</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'white',
            marginVertical: 10,
          }}></View>
        <View>
          <SelectMultiple
            items={subCategories}
            selectedItems={selectedSubCategory}
            onSelectionsChange={function (item) {
              changeSubCategories(item);
            }}
            rowStyle={{backgroundColor: 'none', borderBottomWidth: 0}}
            selectedCheckboxSource={require('../images/checked-checkbox.png')}
            checkboxSource={require('../images/unchecked-checkbox.png')}
            labelStyle={{color: 'white', marginHorizontal: 5}}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {selectedSubCategory: state.subCategories};
}

export default connect(mapStateToProps, {changeSubCategories})(
  SubCategoriesScreen,
);
