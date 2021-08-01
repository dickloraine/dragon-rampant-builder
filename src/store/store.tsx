import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appStateReducer from './appStateSlice';
import dataReducer from './dataSlice';
import rosterReducer from './rosterSlice';
import uiReducer from './uiSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  roster: rosterReducer,
  appState: appStateReducer,
  data: dataReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
