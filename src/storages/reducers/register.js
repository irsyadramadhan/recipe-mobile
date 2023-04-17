const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const register = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'REGISTER_RESET':
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

export default register;
