import { APP_USER_EMAIL } from "../constants/ApplicationConstants";
import { deleteDataFromAsyncStorage } from "./AsyncStorageUtils";

export const logoutUser = () => {
    deleteDataFromAsyncStorage(APP_USER_EMAIL).then((e) =>{
      console.log(e)
      alert('Deleted Successfully');
    }
    );
  };