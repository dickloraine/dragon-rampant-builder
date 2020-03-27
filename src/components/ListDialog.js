import React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemIcon } from '@material-ui/core';

const ListDialog = ({
  anchor,
  action,
  options,
  title,
  onClose = null,
  onOpen = null
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    if (onOpen) onOpen();
  };
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };
  const handleOnClick = text => {
    action(text);
    if (onClose) onClose();
    handleClose();
  };

  const opts = typeof options[0] === 'string' ? options.map(o => [o, null]) : options;

  return (
    <>
      {anchor(handleOpen)}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <List>
          {opts.map(([text, icon]) => (
            <ListItem button onClick={() => handleOnClick(text)} key={text}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              {text}
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default ListDialog;
