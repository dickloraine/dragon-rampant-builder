import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import data, { CompactUnit, Unit } from './data';

type RosterUnits = { [id: number]: Unit };

export type RosterState = {
  name: string;
  nextID: number;
  units: RosterUnits;
  unitOrder: number[];
};

export type CompactRosterState = {
  name: string;
  nextID: number;
  units: { [id: number]: CompactUnit };
  unitOrder: number[];
};

const rosterInitialState: RosterState = {
  name: 'New List',
  nextID: 0,
  units: {},
  unitOrder: [],
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
    addUnit: {
      reducer: (state: RosterState, action: PayloadAction<[Unit?, number?]>) => {
        let [unit, index] = action.payload;
        unit = unit
          ? unit
          : { ...data.unitData.Unit, options: [], fantasticalRules: [] };
        const id = state.nextID;
        index == null
          ? state.unitOrder.push(id)
          : state.unitOrder.splice(index + 1, 0, id);
        state.nextID += 1;
        state.units[id] = unit;
      },
      prepare: (unit?: Unit, index?: number): { payload: [Unit?, number?] } => ({
        payload: [unit, index],
      }),
    },
    setUnit: {
      reducer: (state, action: PayloadAction<[number, string]>) => {
        const [id, name] = action.payload;
        state.units[id] = { ...data.unitData[name], options: [], fantasticalRules: [] };
      },
      prepare: (id: number, name: string): { payload: [number, string] } => ({
        payload: [id, name],
      }),
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
      delete state.units[id];
      state.unitOrder.splice(state.unitOrder.indexOf(id), 1);
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
        const [id, direction] = action.payload;
        const index = state.unitOrder.indexOf(id);
        const nextIndex = direction === 'left' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= state.unitOrder.length) return state;
        [state.unitOrder[nextIndex], state.unitOrder[index]] = [
          state.unitOrder[index],
          state.unitOrder[nextIndex],
        ];
      },
      prepare: (
        id: number,
        direction: 'left' | 'right'
      ): { payload: [number, 'left' | 'right'] } => ({ payload: [id, direction] }),
    },
  },
});

const getTotalPoints = createSelector(
  (units: RosterUnits) => units,
  (units) => Object.values(units).reduce((acc, unit) => acc + unit.points, 0)
);

const getSpecialRules = createSelector(
  (units: RosterUnits) => units,
  (units) =>
    Object.values(units)
      .reduce(
        (acc: string[], unit) =>
          unit.rules.reduce(
            (acc, rule) =>
              data.rulesData[data.rulesData[rule]]
                ? [...acc, data.rulesData[rule]]
                : [...acc, rule],
            acc
          ),
        []
      )
      .sort()
      .filter((rule, index, ary) => !index || rule !== ary[index - 1])
);

export { getTotalPoints, getSpecialRules };

export const {
  newRoster,
  setRoster,
  updateRoster,
  addUnit,
  setUnit,
  updateUnit,
  removeUnit,
  renameUnit,
  moveUnit,
} = rosterSlice.actions;

export default rosterSlice.reducer;
