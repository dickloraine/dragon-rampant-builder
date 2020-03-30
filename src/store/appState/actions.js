export const AppStateActionTypes = {
  TOGGLE_FORCE_INPUT_UPDATE: 'TOGGLE_FORCE_INPUT_UPDATE',
  SET_FEEDBACK: 'SET_FEEDBACK',
  SHOW_FEEDBACK: 'SHOW_FEEDBACK'
};

export const toggleForceInputUpdate = () => ({
  type: AppStateActionTypes.TOGGLE_FORCE_INPUT_UPDATE
});

export const setFeedback = feedback => ({
  type: AppStateActionTypes.SET_FEEDBACK,
  payload: feedback
});

export const showFeedback = (message, severity) => ({
  type: AppStateActionTypes.SHOW_FEEDBACK,
  payload: [message, severity]
});
