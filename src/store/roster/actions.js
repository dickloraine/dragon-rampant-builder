export const RosterActionTypes = {
  NEW_ROSTER: 'NEW_ROSTER',
  SET_ROSTER: 'SET_ROSTER',
  UPDATE_ROSTER: 'UPDATE_ROSTER',
  ADD_UNIT: 'ADD_UNIT',
  SET_UNIT: 'SET_UNIT',
  UPDATE_UNIT: 'UPDATE_UNIT',
  REMOVE_UNIT: 'REMOVE_UNIT'
};

export const newRoster = () => ({
  type: RosterActionTypes.NEW_ROSTER
});

export const setRoster = newRoster => ({
  type: RosterActionTypes.SET_ROSTER,
  payload: newRoster
});

export const updateRoster = newAttributes => ({
  type: RosterActionTypes.UPDATE_ROSTER,
  payload: newAttributes
});

export const addUnit = () => ({
  type: RosterActionTypes.ADD_UNIT
});

export const setUnit = (id, name) => ({
  type: RosterActionTypes.SET_UNIT,
  payload: [id, name]
});

export const updateUnit = (id, newAttributes) => ({
  type: RosterActionTypes.UPDATE_UNIT,
  payload: [id, newAttributes]
});

export const removeUnit = id => ({
  type: RosterActionTypes.REMOVE_UNIT,
  payload: id
});
