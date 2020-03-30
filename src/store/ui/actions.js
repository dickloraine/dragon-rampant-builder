export const UIActionTypes = {
  SET_UI: 'SET_UI',
  UPDATE_UI: 'UPDATE_UI',
  SET_UI_OPTION: 'SET_UI_OPTION'
};

export const setUI = value => ({
  type: UIActionTypes.SET_UI,
  payload: value
});

export const setUIOption = (option, value) => ({
  type: UIActionTypes.SET_UI_OPTION,
  payload: [option, value]
});

export const updateUI = newAttributes => ({
  type: UIActionTypes.UPDATE_UI,
  payload: newAttributes
});
