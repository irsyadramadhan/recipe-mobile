import axios from 'axios';
import {API_KEY} from '@env';

const url = API_KEY;

export const getMyRecipe = token => async (dispatch, getState) => {
  try {
    let headers = {
      headers: {"Authorization": `Bearer ${token}`},
    };
    dispatch({type: 'GET_MYRECIPE_PENDING'});
    const result = await axios.get(`${url}/recipe/myrecipe`, headers);
    result.data.data &&
      dispatch({type: 'GET_MYRECIPE_SUCCESS', payload: result.data.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'GET_MYRECIPE_ERROR'});
  }
};

export const getDetailRecipe = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'GET_DETAILRECIPE_PENDING'});
    const result = await axios.get(`${url}/recipe/${id}`);
    result.data.data &&
      dispatch({type: 'GET_DETAILRECIPE_SUCCESS', payload: result.data.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'GET_DETAILRECIPE_ERROR'});
  }
};

export const getSearchRecipe = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'GET_SEARCHRECIPE_PENDING'});
    const result = await axios.get(`${url}/recipe?search=${data}`);
    result.data.data &&
      dispatch({type: 'GET_SEARCHRECIPE_SUCCESS', payload: result.data.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'GET_SEARCHRECIPE_ERROR'});
  }
};

export const getNewRecipe = () => async (dispatch, getState) => {
  try {
    dispatch({type: 'GET_NEWRECIPE_PENDING'});
    const result = await axios.get(`${url}/recipe?sort=DESC&limit=3`);
    result.data.data &&
      dispatch({type: 'GET_NEWRECIPE_SUCCESS', payload: result.data.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'GET_NEWRECIPE_ERROR'});
  }
};

export const addRecipe = (data, token) => async (dispatch, getState) => {
  try {
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    };
    dispatch({type: 'ADD_RECIPE_PENDING'});
    const result = await axios.post(`${url}/recipe`, data, headers);
    result.data && dispatch({type: 'ADD_RECIPE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'ADD_RECIPE_ERROR'});
  }
};

export const deleteRecipe = (id, token) => async (dispatch, getState) => {
  try {
    let headers = {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    };
    dispatch({type: 'DELETE_RECIPE_PENDING'});
    const result = await axios.delete(`${url}/recipe/${id}`, headers);
    result.data &&
      dispatch({type: 'DELETE_RECIPE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'DELETE_RECIPE_ERROR'});
  }
};

export const updateRecipe = (data, id, token) => async (dispatch, getState) => {
  try {
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    };
    dispatch({type: 'UPDATE_RECIPE_PENDING'});
    const result = await axios.put(`${url}/recipe/${id}`, data, headers);
    result.data &&
      dispatch({type: 'UPDATE_RECIPE_SUCCESS', payload: result.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'UPDATE_RECIPE_ERROR'});
  }
};

export const addRecipeReset = () => {
  return (dispatch, getState) => {
    dispatch({type: 'ADD_RECIPE_RESET'});
  };
};

export const updateRecipeReset = () => {
  return (dispatch, getState) => {
    dispatch({type: 'UPDATE_RECIPE_RESET'});
  };
};
