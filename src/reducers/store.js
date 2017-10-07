import { createStore } from 'redux';

import basicInfo from './BasicInfoReducer.js';

export const store = createStore(basicInfo);