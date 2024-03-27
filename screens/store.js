import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';

const rootReducerCombined = combineReducers({
  //... other reducers
  rootReducer: rootReducer // If your rootReducer has been combined elsewhere, use that instead of rootReducer
});

export const RootState = { /* your code here */ };

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['reducerUser'],
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducerCombined);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

import { ActionCreator } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch & ActionCreator<any>;