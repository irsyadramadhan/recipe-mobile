const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const search_recipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_SEARCHRECIPE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_SEARCHRECIPE_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'GET_SEARCHRECIPE_ERROR':
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

export default search_recipe;
