import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type severity = 'error' | 'info' | 'success' | 'warning';

export type AppState = {
  feedback: {
    open: boolean;
    message: string;
    severity: severity;
  };
  inputUpdate: boolean;
  autoDarkMode: boolean;
  customizeMode: boolean;
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    feedback: {
      open: false,
      message: '',
      severity: 'info',
    },
    inputUpdate: false,
    autoDarkMode: false,
    customizeMode: false,
  } as AppState,
  reducers: {
    toggleForceInputUpdate: (state) => {
      state.inputUpdate = !state.inputUpdate;
    },
    closeFeedback: (state) => {
      state.feedback.open = false;
    },
    showFeedback: {
      reducer: (state, action: PayloadAction<[string, severity]>) => {
        const [message, severity] = action.payload;
        state.feedback = { open: true, message: message, severity: severity };
      },
      prepare: (
        message: string,
        severity: severity
      ): { payload: [string, severity] } => ({
        payload: [message, severity],
      }),
    },
    setAutoDarkMode: (state, action) => {
      state.autoDarkMode = action.payload;
    },
    setCustomizeMode: (state, action) => {
      state.customizeMode = action.payload;
    },
  },
});

export const {
  toggleForceInputUpdate,
  closeFeedback,
  showFeedback,
  setAutoDarkMode,
  setCustomizeMode,
} = appStateSlice.actions;
export default appStateSlice.reducer;
