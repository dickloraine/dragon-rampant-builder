import { AppStateActionTypes } from './actions';

const appStateInitialState = {
  feedback: {
    open: false,
    message: '',
    severity: ''
  },
  inputUpdate: 0
};

export default (state = appStateInitialState, action) => {
  switch (action.type) {
    case AppStateActionTypes.TOGGLE_FORCE_INPUT_UPDATE: {
      return { ...state, inputUpdate: state.forceInputUpdate ? 0 : 1 };
    }
    case AppStateActionTypes.CLOSE_FEEDBACK: {
      return {
        ...state,
        feedback: { ...state.feedback, open: false }
      };
    }
    case AppStateActionTypes.SHOW_FEEDBACK: {
      const [message, severity] = action.payload;
      return {
        ...state,
        feedback: { open: true, message: message, severity: severity }
      };
    }
    default: {
      return state;
    }
  }
};
