const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'DELETE_STORE_TOKEN':
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default auth;
