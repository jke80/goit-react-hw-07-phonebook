import { combineReducers } from 'redux';
import contactsSlice from './contacts.slice';
import filterSlice from './filter.slice';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
});
