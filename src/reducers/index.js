const initialState = {
  items: [],
  currentUser: null
};

const reducer = (state = initialState , action) => {

  switch (action.type) {
    case 'ITEMS_LOADED':
      return {
        ...state, items: action.payload
      };
    case 'USER_AUTHENTICATED':
      return {
        ...state, currentUser: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
