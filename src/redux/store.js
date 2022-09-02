import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filter from './filter';

export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
