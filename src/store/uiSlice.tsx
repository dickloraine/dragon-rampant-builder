import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
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

const getInitialState = () => {
  try {
    const initialState = localStorage.getItem('localforage/uiOptions');
    if (initialState !== null) {
      return JSON.parse(initialState) as UIState;
    }
  } catch (error) {
    console.log(error);
  }
  return {
    viewMode: false,
    editMode: false,
    darkMode: null,
    validationExpanded: true,
    rulesSummaryExpanded: true,
    spellsExpanded: false,
    statisticsExpanded: true,
  };
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: getInitialState(),
  reducers: {
    _setUI: (_, action: PayloadAction<UIState>) => {
      return { ...action.payload };
    },
    _toggleUIOption: (state: UIState, action: PayloadAction<keyof UIState>) => {
      const option = action.payload;
      state[option] = !state[option];
    },
    _updateUI: (state, action: PayloadAction<Partial<UIState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

const { _setUI, _toggleUIOption, _updateUI } = uiSlice.actions;

type UIThunk = ThunkAction<void, any, unknown, Action<string>>;

export const setUI = (newState: UIState): UIThunk => (dispatch) => {
  uiStore.setItem('uiOptions', { ...newState }).catch((err) => console.log(err));
  dispatch(_setUI(newState));
};

export const toggleUIOption = (option: keyof UIState): UIThunk => (
  dispatch,
  getState
) => {
  const state: UIState = getState().ui;
  uiStore
    .setItem('uiOptions', { ...state, [option]: !state[option] })
    .catch((err) => console.log(err));
  dispatch(_toggleUIOption(option));
};

export const updateUI = (options: Partial<UIState>): UIThunk => (
  dispatch,
  getState
) => {
  const state: UIState = getState().ui;
  uiStore
    .setItem('uiOptions', { ...state, ...options })
    .catch((err) => console.log(err));
  dispatch(_updateUI(options));
};

export default uiSlice.reducer;
