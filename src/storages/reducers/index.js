import {combineReducers} from 'redux';
import auth from './auth';
import my_recipe from './myRecipe';
import detail_recipe from './detailRecipe';
import search_recipe from './searchRecipe';
import new_recipe from './newRecipe';
import add_recipe from './addRecipe';
import delete_recipe from './deleteRecipe';

const appReducers = combineReducers({
  auth,
  my_recipe,
  detail_recipe,
  search_recipe,
  new_recipe,
  add_recipe,
  delete_recipe,
});

export default appReducers;
