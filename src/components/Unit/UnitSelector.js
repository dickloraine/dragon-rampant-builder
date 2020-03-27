import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Typography, Chip } from '@material-ui/core';
import ListDialog from '../ListDialog';

const UnitSelector = ({ unit, options, onClose }) => {
  const name = unit.customName ? unit.customName : unit.name;

  const setSelectedUnit = value => {
    if (value !== unit.name) onClose(value);
  };

  return (
    <ListDialog
      action={setSelectedUnit}
      anchor={openFunc => (
        <>
          <Typography variant="h5" onClick={openFunc}>
            <Chip label={unit.points} color="primary" />
            &nbsp;&nbsp;
            {name}
            <ArrowDropDownIcon />
          </Typography>
          {unit.customName && (
            <Typography style={{ marginLeft: 45, marginBottom: -25 }}>
              {unit.name}
            </Typography>
          )}
        </>
      )}
      options={options}
      title="Choose unit type"
    />
  );
};

export default UnitSelector;
