import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uiStore } from './persistantStorage';

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
      uiStore
        .setItem('uiOptions', { ...action.payload })
        .catch((err) => console.log(err));
      return { ...action.payload };
    },
    toggleUIOption: (state: UIState, action: PayloadAction<keyof UIState>) => {
      const option = action.payload;
      uiStore
        .setItem('uiOptions', { ...state, [option]: !state[option] })
        .catch((err) => console.log(err));
      state[option] = !state[option];
    },
    updateUI: (state, action: PayloadAction<Partial<UIState>>) => {
      uiStore
        .setItem('uiOptions', { ...state, ...action.payload })
        .catch((err) => console.log(err));
      return { ...state, ...action.payload };
    },
  },
});

export const { setUI, toggleUIOption, updateUI } = uiSlice.actions;
export default uiSlice.reducer;
