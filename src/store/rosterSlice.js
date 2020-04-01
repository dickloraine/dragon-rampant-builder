import { createSlice } from '@reduxjs/toolkit';
import getData from 'store/getData';
import { multipleArgsReducer } from './utils';

const rosterInitialState = {
  name: 'New List',
  totalPoints: 0,
  nextID: 0,
  units: {},
  unitOrder: []
};

const data = getData();

const getTotalPoints = state =>
  Object.values(state.units).reduce((acc, unit) => acc + unit.points, 0);

const setState = state => ({
  ...state,
  totalPoints: getTotalPoints(state)
});

const rosterSlice = createSlice({
  name: 'roster',
  initialState: rosterInitialState,
  reducers: {
    newRoster: () => ({ ...rosterInitialState }),
    setRoster: (state, action) => setState({ ...action.payload }),
    updateRoster: (state, action) => setState({ ...state, ...action.payload }),
    addUnit: multipleArgsReducer((state, action) => {
      let [unit, index] = action.payload;
      unit = unit ? unit : { ...data.unitData.Unit, options: [], fantasticalRules: [] };
      const id = state.nextID;
      index == null
        ? state.unitOrder.push(id)
        : state.unitOrder.splice(index + 1, 0, id);
      state.nextID += 1;
      state.units[id] = unit;
      state.totalPoints = getTotalPoints(state);
    }),
    setUnit: multipleArgsReducer((state, action) => {
      const [id, name] = action.payload;
      state.units[id] = { ...data.unitData[name], options: [], fantasticalRules: [] };
      state.totalPoints = getTotalPoints(state);
    }),
    updateUnit: multipleArgsReducer((state, action) => {
      const [id, newAttributes] = action.payload;
      state.units[id] = { ...state.units[id], ...newAttributes };
      state.totalPoints = getTotalPoints(state);
    }),
    removeUnit: (state, action) => {
      const id = action.payload;
      delete state.units[id];
      state.totalPoints = getTotalPoints(state);
      state.unitOrder.splice(state.unitOrder.indexOf(id), 1);
    },
    renameUnit: multipleArgsReducer((state, action) => {
      const [id, name] = action.payload;
      state.units[id].customName = name;
    }),
    moveUnit: multipleArgsReducer((state, action) => {
      const [id, direction] = action.payload;
      const index = state.unitOrder.indexOf(id);
      const nextIndex = direction === 'left' ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= state.unitOrder.length) return state;
      [state.unitOrder[nextIndex], state.unitOrder[index]] = [
        state.unitOrder[index],
        state.unitOrder[nextIndex]
      ];
    })
  }
});

export const {
  newRoster,
  setRoster,
  updateRoster,
  addUnit,
  setUnit,
  updateUnit,
  removeUnit,
  renameUnit,
  moveUnit
} = rosterSlice.actions;
export default rosterSlice.reducer;
