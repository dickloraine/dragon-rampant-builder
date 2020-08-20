import { useState } from 'react';
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

const initialState: UIState = {
  viewMode: false,
  editMode: false,
  darkMode: null,
  validationExpanded: true,
  rulesSummaryExpanded: true,
  spellsExpanded: false,
  statisticsExpanded: true,
};

export const useUI = () => {
  const [ui, setUiState] = useState(initialState);
  const setUi = (newState: UIState) => {
    uiStore.setItem('uiOptions', { ...newState }).catch((err) => console.log(err));
    setUiState(newState);
  };
};
