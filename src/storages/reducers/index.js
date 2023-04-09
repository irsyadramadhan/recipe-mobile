import {combineReducers} from 'redux';
import auth from './auth';
import my_recipe from './myRecipe';

const appReducers = combineReducers({auth, my_recipe});

export default appReducers;
