import axios from 'axios';

const url = 'https://zany-gray-cobra-shoe.cyclic.app';

export const login = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'LOGIN_PENDING'});
    const result = await axios.post(url + '/auth/login', data);
    console.log(result);
    result.data.data && dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'LOGIN_ERROR'});
  }
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({type: 'DELETE_STORE_TOKEN'});
  };
};
