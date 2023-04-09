const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const my_recipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_MYRECIPE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_MYRECIPE_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'GET_MYRECIPE_ERROR':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default my_recipe;
