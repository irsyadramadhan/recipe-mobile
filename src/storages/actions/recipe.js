import axios from 'axios';

const url = 'https://zany-gray-cobra-shoe.cyclic.app';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5Njc1YTZmLTI4ZmMtNGY3ZS1hZDhiLWE0MjE2YmM3YTY1NCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImZ1bGxuYW1lIjoiSXJzeWFkIFJhbWFkaGFuIiwicGhvdG8iOm51bGwsImlzX3ZlcmlmIjoxLCJvdHAiOiJ1bmRlZmluZWQiLCJ0aW1lX2NyZWF0ZSI6IjIwMjMtMDQtMDlUMjM6MjA6NDYuODI0WiIsImlhdCI6MTY4MTA1MzY3NywiZXhwIjoxNjgyMzY3Njc3fQ.JtWyFNPnMw3HgU0CIBJKay5AoGvWNsNlL17LBLSZxf4';

export const getMyRecipe = () => async (dispatch, getState) => {
  try {
    let headers = {
      headers: {"Authorization": `Bearer ${token}`}
    };
    dispatch({type: 'GET_MYRECIPE_PENDING'});
    const result = await axios.get(url + '/recipe/myrecipe', headers);
    result.data.data &&
      dispatch({type: 'GET_MYRECIPE_SUCCESS', payload: result.data.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'GET_MYRECIPE_ERROR'});
  }
};
