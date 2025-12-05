import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { produce } from 'immer';
import { fantasticalRulesData } from '../assets/dragonRampantData/e1/fantasticalRules';
import { rulesData } from '../assets/dragonRampantData/e1/rules';
import { spells } from '../assets/dragonRampantData/e1/spells';
import { traitData } from '../assets/dragonRampantData/e1/traits';
import { unitsData } from '../assets/dragonRampantData/e1/units';
import { fantasticalRulesData as fantasticalRulesData2 } from '../assets/dragonRampantData/e2/fantasticalRules';
import { rulesData as rulesData2 } from '../assets/dragonRampantData/e2/rules';
import { spells as spells2 } from '../assets/dragonRampantData/e2/spells';
import { traitData as traitData2 } from '../assets/dragonRampantData/e2/traits';
import { unitsData as unitsData2 } from '../assets/dragonRampantData/e2/units';
import { getDataStore } from './persistantStorage';
import {
  CustomData,
  CustomDataElement,
  Data,
  DataUnit,
  Edition,
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
  spells: {},
});

const initialData: Data = {
  unitData: unitsData,
  fantasticalRulesData: fantasticalRulesData,
  rulesData: rulesData,
  spells: spells,
  traits: traitData,
  customData: getEmptyCustomData(),
};

const getData = (edition: Edition): Data => {
  if (edition === 'second')
    return {
      unitData: unitsData2,
      fantasticalRulesData: fantasticalRulesData2,
      rulesData: rulesData2,
      spells: spells2,
      traits: traitData2,
      customData: getEmptyCustomData(),
    };
  return { ...initialData };
};

export const hydrateData = createAsyncThunk(
  'data/hydrateData',
  async (edition: Edition) => {
    const data = getData(edition);
    const customData = await getDataStore(edition)
      .getItem('data')
      .catch((err) => console.log(err));
    if (customData) {
      data.customData = customData as CustomData;
    }
    return data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: { ...initialData },
  reducers: {
    _setData: (_, action: PayloadAction<Data>) => ({ ...action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(hydrateData.fulfilled, (_, action) => {
      const data = action.payload;
      return {
        unitData: { ...data.unitData, ...data.customData.unitData },
        fantasticalRulesData: {
          ...data.fantasticalRulesData,
          ...data.customData.fantasticalRulesData,
        },
        rulesData: { ...data.rulesData, ...data.customData.rulesData },
        spells: { ...data.spells, ...data.customData.spells },
        traits: { ...data.traits },
        customData: data.customData,
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
    const edition = getState().ui.edition;
    getDataStore(edition)
      .setItem('data', state.customData)
      .catch((err) => console.log(err));
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
    const edition = getState().ui.edition;
    getDataStore(edition)
      .setItem('data', state.customData)
      .catch((err) => console.log(err));
    dispatch(_setData(state));
  };

export const addUnit = addAndDispatch<DataUnit>('unitData');
export const removeUnit = removeAndDispatch('unitData');

export const addFantasticalRule =
  addAndDispatch<FantasticalRule>('fantasticalRulesData');
export const removeFantasticalRule = removeAndDispatch('fantasticalRulesData');

export const addSpell = addAndDispatch<Spell>('spells');
export const removeSpell = removeAndDispatch('spells');

export const addRule = addAndDispatch<Rule>('rulesData');
export const removeRule = removeAndDispatch('rulesData');

export default dataSlice.reducer;
