import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users';

const store = configureStore({
  reducer: {
      users: usersReducer
  },
  devTools: true
});

export default store;
