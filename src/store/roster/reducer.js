import { RosterActionTypes } from './actions';
import getData from 'store/getData';

const rosterInitialState = {
  name: 'New List',
  nextID: 0,
  units: {},
  unitOrder: []
};

const data = getData();

export default (state = rosterInitialState, action) => {
  switch (action.type) {
    case RosterActionTypes.NEW_ROSTER: {
      return { ...rosterInitialState };
    }
    case RosterActionTypes.SET_ROSTER: {
      return { ...action.payload };
    }
    case RosterActionTypes.UPDATE_ROSTER: {
      return { ...state, ...action.payload };
    }
    case RosterActionTypes.ADD_UNIT: {
      const id = state.nextID;
      return {
        ...state,
        nextID: id + 1,
        units: {
          ...state.units,
          [id]: { ...data.unitData.Unit, options: [], fantasticalRules: [] }
        },
        unitOrder: [...state.unitOrder, id]
      };
    }
    case RosterActionTypes.SET_UNIT: {
      const [id, name] = action.payload;
      return {
        ...state,
        units: {
          ...state.units,
          [id]: { ...data.unitData[name], options: [], fantasticalRules: [] }
        }
      };
    }
    case RosterActionTypes.UPDATE_UNIT: {
      const [id, newAttributes] = action.payload;
      return {
        ...state,
        units: {
          ...state.units,
          [id]: { ...state.units[id], ...newAttributes }
        }
      };
    }
    case RosterActionTypes.REMOVE_UNIT: {
      const id = action.payload;
      const units = { ...state.units };
      delete units[id];
      return {
        ...state,
        units: { ...units },
        unitOrder: state.unitOrder.filter(val => val !== id)
      };
    }
    default: {
      return state;
    }
  }
};
