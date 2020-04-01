import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import rosterReducer from './rosterSlice';
import appStateReducer from './appStateSlice';

export default configureStore({
  reducer: {
    ui: uiReducer,
    roster: rosterReducer,
    appState: appStateReducer
  }
});
