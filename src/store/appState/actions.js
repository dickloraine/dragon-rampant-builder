export const AppStateActionTypes = {
  TOGGLE_FORCE_INPUT_UPDATE: 'TOGGLE_FORCE_INPUT_UPDATE',
  CLOSE_FEEDBACK: 'CLOSE_FEEDBACK',
  SHOW_FEEDBACK: 'SHOW_FEEDBACK'
};

export const toggleForceInputUpdate = () => ({
  type: AppStateActionTypes.TOGGLE_FORCE_INPUT_UPDATE
});

export const closeFeedback = () => ({
  type: AppStateActionTypes.CLOSE_FEEDBACK
});

export const showFeedback = (message, severity) => ({
  type: AppStateActionTypes.SHOW_FEEDBACK,
  payload: [message, severity]
});
