import { SAVE_FIRST_NAME } from '../reducers/BasicInfoReducer.js';

export const saveFirstName = (firstName) => {
  return {
    type: SAVE_FIRST_NAME,
    payload: firstName,
  };
}