import axios from 'axios';
import {API_KEY} from '@env';

const url = API_KEY;

export const login = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'LOGIN_PENDING'});
    const result = await axios.post(url + '/auth/login', data);
    console.log(result);
    result.data.data && dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'LOGIN_ERROR', payload: err.response.data.message});
  }
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({type: 'DELETE_STORE_TOKEN'});
  };
};

export const register = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'REGISTER_PENDING'});
    const result = await axios.post(url + '/auth/register', data);
    console.log(result);
    result.data && dispatch({type: 'REGISTER_SUCCESS', payload: result.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'REGISTER_ERROR', payload: err.response.data.message});
  }
};

export const registerReset = () => {
  return (dispatch, getState) => {
    dispatch({type: 'REGISTER_RESET'});
  };
};
