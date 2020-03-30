import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Box, Typography } from '@material-ui/core';
import Unit from './Unit';
import buildUnit from './Unit/buildUnit';
import { objMap } from 'helpers/utils';
import { useSelector, useDispatch } from 'react-redux';
import { addUnit } from 'store/roster/actions';

const packRoster = roster => {
  let units = { ...roster.units };
  units = objMap(units, unit => ({
    name: unit.name,
    customName: unit.customName || '',
    options: unit.options,
    fantasticalRules: unit.fantasticalRules
  }));
  return { ...roster, units: units };
};

const unpackRoster = compactRoster => {
  const units = objMap(compactRoster.units, unit => buildUnit(unit));
  return { ...compactRoster, units: units };
};

const Roster = () => {
  const dispatch = useDispatch();
  const roster = useSelector(state => state.roster);
  const ui = useSelector(state => state.ui);

  return (
    <>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {roster.unitOrder.map(id => (
          <Unit id={id} key={id} />
        ))}
      </Box>
      {!Object.keys(roster.units).length && !ui.viewMode && (
        <Typography variant="h6" style={{ marginBottom: 25 }}>
          Click the button to add your first unit!
        </Typography>
      )}
      {!ui.viewMode && (
        <Fab
          color="secondary"
          style={{ marginLeft: 25, marginBottom: 25 }}
          onClick={() => dispatch(addUnit())}
        >
          <AddIcon />
        </Fab>
      )}
    </>
  );
};

export default Roster;
export { packRoster, unpackRoster };
