import { RosterActionTypes } from './actions';
import getData from 'store/getData';

const rosterInitialState = {
  name: 'New List',
  totalPoints: 0,
  nextID: 0,
  units: {},
  unitOrder: []
};

const data = getData();

const setState = newState => ({
  ...newState,
  totalPoints: Object.values(newState.units).reduce((acc, unit) => acc + unit.points, 0)
});

export default (state = rosterInitialState, action) => {
  switch (action.type) {
    case RosterActionTypes.NEW_ROSTER: {
      return { ...rosterInitialState };
    }
    case RosterActionTypes.SET_ROSTER: {
      return setState({ ...action.payload });
    }
    case RosterActionTypes.UPDATE_ROSTER: {
      return setState({ ...state, ...action.payload });
    }
    case RosterActionTypes.ADD_UNIT: {
      let [unit, index] = action.payload;
      unit = unit ? unit : { ...data.unitData.Unit, options: [], fantasticalRules: [] };
      const id = state.nextID;
      const unitOrder =
        index != null
          ? [
              ...state.unitOrder.slice(0, index + 1),
              id,
              ...state.unitOrder.slice(index + 1)
            ]
          : [...state.unitOrder, id];

      return setState({
        ...state,
        nextID: id + 1,
        units: {
          ...state.units,
          [id]: { ...unit }
        },
        unitOrder: unitOrder
      });
    }
    case RosterActionTypes.SET_UNIT: {
      const [id, name] = action.payload;
      return setState({
        ...state,
        units: {
          ...state.units,
          [id]: { ...data.unitData[name], options: [], fantasticalRules: [] }
        }
      });
    }
    case RosterActionTypes.UPDATE_UNIT: {
      const [id, newAttributes] = action.payload;
      return setState({
        ...state,
        units: {
          ...state.units,
          [id]: { ...state.units[id], ...newAttributes }
        }
      });
    }
    case RosterActionTypes.REMOVE_UNIT: {
      const id = action.payload;
      const units = { ...state.units };
      delete units[id];
      return setState({
        ...state,
        units: { ...units },
        unitOrder: state.unitOrder.filter(val => val !== id)
      });
    }
    case RosterActionTypes.RENAME_UNIT: {
      const [id, name] = action.payload;
      return {
        ...state,
        units: {
          ...state.units,
          [id]: { ...state.units[id], customName: name }
        }
      };
    }
    case RosterActionTypes.MOVE_UNIT: {
      const [id, direction] = action.payload;
      const unitOrder = [...state.unitOrder];
      const index = unitOrder.indexOf(id);
      const nextIndex = direction === 'left' ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= unitOrder.length) return state;
      unitOrder[nextIndex] = state.unitOrder[index];
      unitOrder[index] = state.unitOrder[nextIndex];
      return { ...state, unitOrder: unitOrder };
    }
    default: {
      return state;
    }
  }
};
