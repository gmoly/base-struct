
const itemsLoaded = (newItems) => {
  return {
    type: 'ITEMS_LOADED',
    payload: newItems
  };
};

const userAuthenticated = (newUser) => {
  return {
    type: 'USER_AUTHENTICATED',
    payload: newUser
  };
}

export {
  itemsLoaded,
  userAuthenticated
};
