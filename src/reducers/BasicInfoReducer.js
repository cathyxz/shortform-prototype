
export const SAVE_FIRST_NAME = 'SAVE_FIRST_NAME';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const basicInfo = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_FIRST_NAME:
      const { firstName } = action.payload;
      return {...state, firstName}
    default:
      return state;
  }
}

export default basicInfo;