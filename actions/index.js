export const changeCategories = function (item) {
  return function (dispatch) {
    dispatch({type: 'CHANGE_CATEGORIES', payload: item});
  };
};

export const changeSubCategories = function (item) {
  return function (dispatch) {
    dispatch({type: 'CHANGE_SUBCATEGORIES', payload: item});
  };
};

export const changeUser = function (item, navigation) {
  return async function (dispatch) {
    await dispatch({type: 'ADD_USER', payload: item});
    if (item === 'user') {
      navigation.navigate('AdviserSideDrawerNavigator', {
        credentials: 'user',
      });
    } else {
      navigation.navigate('AdviserSideDrawerNavigator', {
        credentials: 'advisor',
      });
    }
  };
};
