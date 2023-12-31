import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import myOrenji from './slices/my-orenji';

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
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSliceReducer = persistReducer(
  {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: [''],
    whitelist: ['token', 'user'],
  },
  authSlice,
);

const myOrejiSliceReducer = persistReducer(
  {
    key: 'book',
    storage: AsyncStorage,
    blacklist: [''],
    whitelist: ['created', 'saved', 'liked'],
  },
  myOrenji,
);

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    book: myOrejiSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
