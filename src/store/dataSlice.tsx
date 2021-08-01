import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import rulesData from 'assets/dragonRampantData/rules.json';
import spellData from 'assets/dragonRampantData/spells.json';
import unitData from 'assets/dragonRampantData/units.json';
import produce from 'immer';
import { dataStore } from './persistantStorage';
import {
  CustomData,
  CustomDataElement,
  Data,
  DataUnit,
  FantasticalRule,
  RootState,
  Rule,
  Spell,
  Thunk,
} from './types';

export const getEmptyCustomData = (): CustomData => ({
  unitData: {},
  fantasticalRulesData: {},
  rulesData: {},
  spellData: {},
});

const initialData: Data = {
  unitData: unitData,
  fantasticalRulesData: fantasticalRulesData,
  rulesData: rulesData,
  spellData: spellData,
  customData: getEmptyCustomData(),
};

export const hydrateData = createAsyncThunk('data/hydrateData', async () => {
  const customData = await dataStore.getItem('data');
  if (customData !== null) {
    return customData as CustomData;
  }
  return null;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: initialData,
  reducers: {
    _setData: (_, action: PayloadAction<Data>) => ({ ...action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(hydrateData.fulfilled, (state, action) => {
      const customData = action.payload;
      if (customData === null) {
        return state;
      }
      return {
        unitData: { ...initialData.unitData, ...customData.unitData },
        fantasticalRulesData: {
          ...initialData.fantasticalRulesData,
          ...customData.fantasticalRulesData,
        },
        rulesData: { ...initialData.rulesData, ...customData.rulesData },
        spellData: { ...initialData.spellData, ...customData.spellData },
        customData: customData,
      };
    });
  },
});

const { _setData } = dataSlice.actions;

export const selectUnitNames = createSelector(
  [(state: RootState) => state.data.unitData],
  (unitData) => Object.keys(unitData).slice(1)
);

export const selectAllRules = createSelector(
  [
    (state: RootState) => state.data.rulesData,
    (state: RootState) => state.data.fantasticalRulesData,
  ],
  (rules, fantasticalRules) => ({
    ...rules,
    ...fantasticalRules,
  })
);

export const importCustomData =
  (data: CustomData): Thunk =>
  (dispatch, getState) => {
    const state = produce(getState().data, (draft) => {
      (Object.keys(data) as Array<keyof CustomData>).forEach((targetState) => {
        Object.values(data[targetState]).forEach((elem) => {
          draft[targetState][elem.name] = elem;
          draft.customData[targetState][elem.name] = elem;
        });
      });
    });
    dataStore.setItem('data', state.customData).catch((err) => console.log(err));
    dispatch(_setData(state));
  };

const addAndDispatch =
  <T extends CustomDataElement>(targetState: keyof CustomData) =>
  (target: T): Thunk => {
    const data = getEmptyCustomData();
    data[targetState][target.name] = target;
    return importCustomData(data);
  };

const removeAndDispatch =
  (targetState: keyof CustomData) =>
  (target: string): Thunk =>
  (dispatch, getState) => {
    const state = produce(getState().data, (draft) => {
      delete draft[targetState][target];
      delete draft.customData[targetState][target];
    });
    dataStore.setItem('data', state.customData).catch((err) => console.log(err));
    dispatch(_setData(state));
  };

export const addUnit = addAndDispatch<DataUnit>('unitData');
export const removeUnit = removeAndDispatch('unitData');

export const addFantasticalRule =
  addAndDispatch<FantasticalRule>('fantasticalRulesData');
export const removeFantasticalRule = removeAndDispatch('fantasticalRulesData');

export const addSpell = addAndDispatch<Spell>('spellData');
export const removeSpell = removeAndDispatch('spellData');

export const addRule = addAndDispatch<Rule>('rulesData');
export const removeRule = removeAndDispatch('rulesData');

export default dataSlice.reducer;
