
export const SAVE_FIRST_NAME = 'SAVE_FIRST_NAME';
export const UPDATE_BASIC_INFO = 'UPDATE_BASIC_INFO';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const basicInfo = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_FIRST_NAME:
      const firstName = action.payload;
      return {...state, firstName}
    case UPDATE_BASIC_INFO:
      return action.payload;
    default:
      return state;
  }
}

export default basicInfo;