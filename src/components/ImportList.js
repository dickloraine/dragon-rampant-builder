import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import {
  Tooltip,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button
} from '@material-ui/core';
import * as jsonpack from 'jsonpack/main';

const ImportList = ({
  setRoster,
  setForceInputUpdate,
  showFeedback,
  onClose = null,
  showText = false
}) => {
  const [open, setOpen] = React.useState(false);
  const [listString, setListString] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  const handleImport = () => {
    if (!listString) return;
    try {
      const list = jsonpack.unpack(listString);
      setRoster({ ...list });
      setForceInputUpdate();
      showFeedback('List imported!', 'success');
    } catch (err) {
      showFeedback('Could not import the list!', 'error');
    }
    handleClose();
  };

  return (
    <>
      <Tooltip title="Import list">
        <IconButton color="inherit" onClick={handleOpen}>
          <GetAppIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleOpen}>Import list</Typography>}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Enter the import string</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="importstring"
            label="Exported String"
            type="text"
            fullWidth
            onChange={e => setListString(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleImport} color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImportList;
