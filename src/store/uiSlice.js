import { createSlice } from '@reduxjs/toolkit';
import store from 'store';
import { multipleArgsReducer } from './utils';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    viewMode: false,
    editMode: false,
    rulesSummaryExpanded: true,
    spellsExpanded: false,
    statisticsExpanded: true
  },
  reducers: {
    setUI: (state, action) => {
      store.set('uiOptions', { ...action.payload });
      return { ...action.payload };
    },
    setUIOption: multipleArgsReducer((state, action) => {
      const [option, value] = action.payload;
      store.set('uiOptions', { ...state, [option]: value });
      state[option] = value;
    }),
    updateUI: (state, action) => {
      store.set('uiOptions', { ...state, ...action.payload });
      return { ...state, ...action.payload };
    }
  }
});

export const { setUI, setUIOption, updateUI } = uiSlice.actions;
export default uiSlice.reducer;
