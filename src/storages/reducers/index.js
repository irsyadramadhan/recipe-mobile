import {combineReducers} from 'redux';
import auth from './auth';
import my_recipe from './myRecipe';
import detail_recipe from './detailRecipe';
import search_recipe from './searchRecipe';

const appReducers = combineReducers({
  auth,
  my_recipe,
  detail_recipe,
  search_recipe,
});

export default appReducers;
