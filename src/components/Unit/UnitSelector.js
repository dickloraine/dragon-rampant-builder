import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Typography, Chip } from '@material-ui/core';
import SimpleDialog from '../SimpleDialog';

export default function UnitSelector({ name, options, points, onClose }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  function handleClose(value) {
    setOpen(false);
    if (value !== name) onClose(value);
  }

  return (
    <div>
      <Typography variant="h5" onClick={handleClickOpen}>
        <Chip label={points} color="primary" />
        &nbsp;&nbsp;
        {name}
        <ArrowDropDownIcon />
      </Typography>
      <SimpleDialog
        selectedValue={name}
        open={open}
        onClose={handleClose}
        options={options}
        title="Choose unit type"
      />
    </div>
  );
}
