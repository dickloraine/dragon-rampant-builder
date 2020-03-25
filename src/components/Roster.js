import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Box, Typography } from '@material-ui/core';
import Unit from './Unit';

const Roster = ({ roster, updateRoster, ui, data }) => {
  const addUnit = () => {
    const id = roster.nextID;

    updateRoster({
      nextID: id + 1,
      units: {
        ...roster.units,
        [id]: { ...data.unitData.Unit, options: [], fantasticalRules: [] }
      },
      unitOrder: [...roster.unitOrder, id]
    });
  };

  const setUnit = (id, name) => {
    updateRoster({
      units: {
        ...roster.units,
        [id]: { ...data.unitData[name], options: [], fantasticalRules: [] }
      }
    });
  };

  const removeUnit = id => {
    const units = { ...roster.units };
    delete units[id];
    updateRoster({
      units: { ...units },
      unitOrder: roster.unitOrder.filter(val => val !== id)
    });
  };

  return (
    <>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {roster.unitOrder.map(id => (
          <Unit
            id={id}
            key={id}
            unit={roster.units[id]}
            roster={roster}
            updateRoster={updateRoster}
            removeUnit={removeUnit}
            setUnit={setUnit}
            data={data}
            ui={ui}
            unitOrder={roster.unitOrder}
          />
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
          onClick={addUnit}
        >
          <AddIcon />
        </Fab>
      )}
    </>
  );
};

export default Roster;
