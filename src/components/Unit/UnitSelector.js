import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Typography, Chip } from '@material-ui/core';
import SimpleDialog from '../SimpleDialog';

export default function UnitSelector({ unit, options, onClose }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    if (value !== unit.name) onClose(value);
  };

  const name = unit.customName ? unit.customName : unit.name;

  return (
    <>
      <Typography variant="h5" onClick={handleClickOpen}>
        <Chip label={unit.points} color="primary" />
        &nbsp;&nbsp;
        {name}
        <ArrowDropDownIcon />
      </Typography>
      {unit.customName && (
        <Typography style={{ marginLeft: 45, marginBottom: -25 }}>
          Elite Riders
        </Typography>
      )}
      <SimpleDialog
        selectedValue={unit.name}
        open={open}
        onClose={handleClose}
        options={options}
        title="Choose unit type"
      />
    </>
  );
}
