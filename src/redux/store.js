import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filter from './filter';
import contacts from './contacts';

const persistContactsConfig = {
  key: 'contacts',
  version: 1,
  storage,
};
const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contacts
);
export const store = configureStore({
  reducer: {
    filter,
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
