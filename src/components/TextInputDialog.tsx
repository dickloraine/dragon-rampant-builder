import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';

const TextInputDialog: React.FC<{
  anchor: JSX.Element;
  action: (text: string) => void;
  title?: string;
  label?: string;
  defaultValue?: string;
  cancelText?: string;
  okayText?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  onClose?: () => void;
  onOpen?: () => void;
}> = ({
  anchor,
  action,
  title = '',
  label = '',
  defaultValue = '',
  cancelText = 'Cancel',
  okayText = 'okay',
  margin = 'dense',
  onClose,
  onOpen,
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleOpen = () => {
    setOpen(true);
    if (onOpen) onOpen();
  };
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };
  const handleKeyPressed = (key: string) => {
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
      <Box display="flex" alignItems="center" onClick={handleOpen}>
        {anchor}
      </Box>
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
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => handleKeyPressed(e.key)}
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
