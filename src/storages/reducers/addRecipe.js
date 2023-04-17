const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const add_recipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_RECIPE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'ADD_RECIPE_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case 'ADD_RECIPE_ERROR':
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'ADD_RECIPE_RESET':
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

export default add_recipe;
