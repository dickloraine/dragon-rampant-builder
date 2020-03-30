import { combineReducers } from 'redux';
import uiReducer from './ui/reducer';
import rosterReducer from './roster/reducer';
import appStateReducer from './appState/reducer';

export default combineReducers({
  ui: uiReducer,
  roster: rosterReducer,
  appState: appStateReducer
});
