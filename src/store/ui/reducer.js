import { UIActionTypes } from './actions';
import store from 'store';

const uiInitialState = {
  viewMode: false,
  editMode: false,
  rulesSummaryExpanded: true,
  spellsExpanded: false,
  statisticsExpanded: true
};

export default (state = uiInitialState, action) => {
  switch (action.type) {
    case UIActionTypes.SET_UI: {
      store.set('uiOptions', { ...action.payload });
      return { ...action.payload };
    }
    case UIActionTypes.SET_UI_OPTION: {
      const [option, value] = action.payload;
      store.set('uiOptions', { ...state, [option]: value });
      return { ...state, [option]: value };
    }
    case UIActionTypes.UPDATE_UI: {
      store.set('uiOptions', { ...state, ...action.payload });
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
