import { createSlice } from '@reduxjs/toolkit';
import { multipleArgsReducer } from './utils';

const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    feedback: {
      open: false,
      message: '',
      severity: ''
    },
    inputUpdate: 0
  },
  reducers: {
    toggleForceInputUpdate: state => {
      state.inputUpdate = !state.inputUpdate;
    },
    closeFeedback: state => {
      state.feedback.open = false;
    },
    showFeedback: multipleArgsReducer((state, action) => {
      const [message, severity] = action.payload;
      state.feedback = { open: true, message: message, severity: severity };
    })
  }
});

export const {
  toggleForceInputUpdate,
  closeFeedback,
  showFeedback
} = appStateSlice.actions;
export default appStateSlice.reducer;
