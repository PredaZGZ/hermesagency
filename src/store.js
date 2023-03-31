import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlice';
import constantsReducer from './Slices/ConstantsSlice';
import accountsReducer from './Slices/AccountsSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountsReducer,
    api: constantsReducer
  }
})

store.subscribe(() => {
  console.log('Store updated: ', store.getState());
});

export default store