import { combineReducers } from "redux";
import CustomerInventoryReducer from "./CustomerInventoryReducer";


export default   combineReducers({
  customerInventory: CustomerInventoryReducer
  });
