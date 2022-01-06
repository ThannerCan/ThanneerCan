import { CUST_INVENTORY_LOAD } from "../Constants";

const initialState = {
  reserved: 0,
  used: 0,
  unpaid: 0,
  paid: 0,
  notify: 0,
};

const CustomerInventoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CUST_INVENTORY_LOAD:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default CustomerInventoryReducer;
