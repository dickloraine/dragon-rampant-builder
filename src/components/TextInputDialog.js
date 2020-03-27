import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button
} from '@material-ui/core';

const TextInputDialog = ({
  anchor,
  action,
  title = '',
  label = '',
  defaultValue = '',
  cancelText = 'Cancel',
  okayText = 'okay',
  margin = 'dense',
  onClose = null,
  onOpen = null
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();
  const handleOpen = () => {
    setOpen(true);
    if (onOpen) onOpen();
  };
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };
  const handleKeyPressed = (value, key) => {
    if (key === 'Enter') {
      setValue(value);
      action(value);
      handleClose();
    } else if (key === 'ESC') handleClose();
  };
  const handleAction = () => {
    action(value);
    handleClose();
  };

  return (
    <>
      {anchor(handleOpen)}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin={margin}
            label={label}
            type="text"
            fullWidth
            defaultValue={defaultValue || value}
            onChange={e => setValue(e.target.value)}
            onKeyPress={e => handleKeyPressed(e.target.value, e.key)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancelText}
          </Button>
          <Button onClick={handleAction} color="primary">
            {okayText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TextInputDialog;
