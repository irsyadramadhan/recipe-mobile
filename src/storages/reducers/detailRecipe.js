const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const detail_recipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_DETAILRECIPE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_DETAILRECIPE_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'GET_DETAILRECIPE_ERROR':
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

export default detail_recipe;
