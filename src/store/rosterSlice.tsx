import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectAllRules } from '../store/dataSlice';
import {
  Data,
  RootState,
  RosterState,
  RosterUnits,
  Rules,
  Spells,
  Thunk,
  Unit,
} from './types';

const rosterInitialState: RosterState = {
  name: 'New List',
  units: [],
};

const rosterSlice = createSlice({
  name: 'roster',
  initialState: rosterInitialState,
  reducers: {
    newRoster: () => ({ ...rosterInitialState }),
    setRoster: (_, action: PayloadAction<RosterState>) => ({ ...action.payload }),
    updateRoster: (state, action: PayloadAction<Partial<RosterState>>) => ({
      ...state,
      ...action.payload,
    }),
    /* ------------------------------------ Units ------------------------------------ */
    _addUnit: (state: RosterState, action: PayloadAction<[Data, Unit?, number?]>) => {
      // eslint-disable-next-line prefer-const
      let [data, unit, index] = action.payload;
      unit = unit ? unit : { ...data.unitData.Unit, options: [], fantasticalRules: [] };
      index == null ? state.units.push(unit) : state.units.splice(index + 1, 0, unit);
    },
    _setUnit: (state, action: PayloadAction<[Data, number, string]>) => {
      const [data, id, name] = action.payload;
      state.units[id] = { ...data.unitData[name], options: [], fantasticalRules: [] };
    },
    updateUnit: {
      reducer: (state, action: PayloadAction<[number, Partial<Unit>]>) => {
        const [id, newAttributes] = action.payload;
        state.units[id] = { ...state.units[id], ...newAttributes };
      },
      prepare: (
        id: number,
        newAttributes: Partial<Unit>
      ): { payload: [number, Partial<Unit>] } => ({ payload: [id, newAttributes] }),
    },
    removeUnit: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.units.splice(id, 1);
    },
    renameUnit: {
      reducer: (state, action: PayloadAction<[number, string]>) => {
        const [id, name] = action.payload;
        state.units[id].customName = name;
      },
      prepare: (id: number, name: string): { payload: [number, string] } => ({
        payload: [id, name],
      }),
    },
    moveUnit: {
      reducer: (state, action: PayloadAction<[number, 'left' | 'right']>) => {
        const [index, direction] = action.payload;
        const nextIndex = direction === 'left' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= state.units.length) return state;
        [state.units[nextIndex], state.units[index]] = [
          state.units[index],
          state.units[nextIndex],
        ];
      },
      prepare: (
        id: number,
        direction: 'left' | 'right'
      ): { payload: [number, 'left' | 'right'] } => ({ payload: [id, direction] }),
    },
  },
});

const { _addUnit, _setUnit } = rosterSlice.actions;

export const addUnit =
  (unit?: Unit, index?: number): Thunk =>
  (dispatch, getState) => {
    const data = getState().data;
    dispatch(_addUnit([data, unit, index]));
  };

export const setUnit =
  (id: number, name: string): Thunk =>
  (dispatch, getState) => {
    const data = getState().data;
    dispatch(_setUnit([data, id, name]));
  };

export const getTotalPoints = createSelector(
  (units: RosterUnits) => units,
  (units) => Object.values(units).reduce((acc, unit) => acc + unit.points, 0)
);

export const getSpecialRules = createSelector(
  (state: RootState) => state.roster.units,
  (state: RootState) => selectAllRules(state),
  (units, rulesData) => {
    const unique_rules = new Set<string>();
    units.forEach((unit) =>
      unit.rules.forEach((ruleName) => unique_rules.add(ruleName))
    );

    return [...unique_rules].sort().reduce(
      (acc: Rules, ruleName) =>
        rulesData[ruleName]
          ? {
              ...acc,
              [ruleName]: rulesData[ruleName],
            }
          : acc,
      {}
    );
  }
);

export const getSpells = createSelector(
  (state: RootState) => state.roster.units,
  (state: RootState) => state.data.spells,
  (units, rulesData) => {
    if (units.some((unit) => unit.fantasticalRules.includes('Spellcaster'))) {
      return rulesData;
    }

    const unique_powers = new Set<string>();
    units.forEach(
      (unit) => unit.spells?.forEach((powerName) => unique_powers.add(powerName))
    );

    return [...unique_powers].sort().reduce(
      (acc: Spells, powerName) => ({
        ...acc,
        [powerName]: rulesData[powerName],
      }),
      {}
    );
  }
);

export const {
  newRoster,
  setRoster,
  updateRoster,
  updateUnit,
  removeUnit,
  renameUnit,
  moveUnit,
} = rosterSlice.actions;

export default rosterSlice.reducer;
