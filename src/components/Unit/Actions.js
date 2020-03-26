import React from 'react';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {
  IconButton,
  Box,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button
} from '@material-ui/core';

const Actions = ({ id, unit, roster, updateRoster, updateUnit }) => {
  const [open, setOpen] = React.useState(false);
  const [renameString, setRenameString] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const moveUnit = dir => {
    const unitOrder = [...roster.unitOrder];
    const index = roster.unitOrder.indexOf(id);
    const nextIndex = dir ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= unitOrder.length) return;
    unitOrder[nextIndex] = roster.unitOrder[index];
    unitOrder[index] = roster.unitOrder[nextIndex];
    updateRoster({ ...roster, unitOrder: unitOrder });
  };
  const moveLeft = () => moveUnit(1);
  const moveRight = () => moveUnit(0);

  const renameUnit = () => {
    updateUnit({ customName: renameString });
    setOpen(false);
  };

  const handleKeyPressed = (value, key) => {
    if (key === 'Enter') {
      setRenameString(value);
      renameUnit();
    } else if (key === 'ESC') handleClose();
  };

  const cloneUnit = () => {
    const nextId = roster.nextID;

    updateRoster({
      nextID: nextId + 1,
      units: {
        ...roster.units,
        [nextId]: { ...unit }
      },
      unitOrder: [...roster.unitOrder, nextId]
    });
  };

  return (
    <Box>
      <Box display="flex" width="97%" style={{ height: 25, marginTop: 10 }}>
        <Box display="flex" alignItems="center">
          <Tooltip title="Move back">
            <IconButton onClick={moveLeft}>
              <NavigateBeforeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Move forward">
            <IconButton onClick={moveRight}>
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box flexGrow={1}></Box>
        <Box display="flex" alignItems="center">
          <Tooltip title=" Rename unit">
            <IconButton onClick={handleOpen}>
              <TextFieldsIcon />
            </IconButton>
          </Tooltip>
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Enter the name for the unit</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="importstring"
                label="Unit name"
                type="text"
                fullWidth
                value={unit.customName}
                onChange={e => setRenameString(e.target.value)}
                onKeyPress={e => handleKeyPressed(e.target.value, e.key)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={renameUnit} color="primary">
                Rename
              </Button>
            </DialogActions>
          </Dialog>
          <Tooltip title="Clone unit">
            <IconButton onClick={cloneUnit}>
              <PersonAddOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Actions;
