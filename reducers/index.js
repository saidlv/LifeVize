import React from 'react';
import {combineReducers} from 'redux';
import CategoriesReducer from './CategoriesReducer';
import SubCategoriesReducer from './SubCategoriesReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  categories: CategoriesReducer,
  subCategories: SubCategoriesReducer,
  crendentials: UserReducer,
});
