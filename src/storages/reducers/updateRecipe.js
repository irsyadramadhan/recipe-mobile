const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const update_recipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'UPDATE_RECIPE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'UPDATE_RECIPE_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'UPDATE_RECIPE_ERROR':
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

export default update_recipe;
