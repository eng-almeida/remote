import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users';

const store = configureStore({
  reducer: {
      users: usersReducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
