import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlice';
import accountsReducer from './Slices/AccountsSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountsReducer,
  }
})

store.subscribe(() => {
  console.log('Store updated: ', store.getState());
});

export default store