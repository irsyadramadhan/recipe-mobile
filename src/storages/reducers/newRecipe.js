const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const new_recipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_NEWRECIPE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_NEWRECIPE_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'GET_NEWRECIPE_ERROR':
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

export default new_recipe;
