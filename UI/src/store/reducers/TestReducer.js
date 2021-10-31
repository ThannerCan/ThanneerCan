const initialState = {
  loaded: true,
};

const testReducer = (state = initialState, action = {}) => {
  console.log(state, action)
    switch (action.type) {
    case 'TEST':
      return {...state, loaded: false, inside: false};
    default:
      return state;
  }
};

export default testReducer;
