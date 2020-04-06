import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'store';

export type UIState = {
  viewMode: boolean;
  editMode: boolean;
  darkMode: null | boolean;
  validationExpanded: boolean;
  rulesSummaryExpanded: boolean;
  spellsExpanded: boolean;
  statisticsExpanded: boolean;
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    viewMode: false,
    editMode: false,
    darkMode: null,
    validationExpanded: true,
    rulesSummaryExpanded: true,
    spellsExpanded: false,
    statisticsExpanded: true,
  } as UIState,
  reducers: {
    setUI: (_, action: PayloadAction<UIState>) => {
      store.set('uiOptions', { ...action.payload });
      return { ...action.payload };
    },
    toggleUIOption: (state: UIState, action: PayloadAction<keyof UIState>) => {
      const option = action.payload;
      store.set('uiOptions', { ...state, [option]: !state[option] });
      state[option] = !state[option];
    },
    updateUI: (state, action: PayloadAction<Partial<UIState>>) => {
      store.set('uiOptions', { ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
  },
});

export const { setUI, toggleUIOption, updateUI } = uiSlice.actions;
export default uiSlice.reducer;
