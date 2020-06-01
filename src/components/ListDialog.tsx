import { Dialog, DialogTitle, List, ListItem, ListItemIcon } from '@material-ui/core';
import React from 'react';

const ListDialog: React.FC<{
  anchor: (openFunc: () => void) => JSX.Element;
  action: (text: string) => void;
  options: [string, JSX.Element | null][] | string[];
  title: string;
  onClose?: () => void;
  onOpen?: () => void;
}> = ({ anchor, action, options, title, onClose, onOpen }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    if (onOpen) onOpen();
  };
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };
  const handleOnClick = (text: string) => {
    action(text);
    handleClose();
  };

  const opts: [string, JSX.Element | null][] =
    typeof (options as string[])[0] === 'string'
      ? (options as string[]).map((o: string) => [o, null])
      : (options as [string, JSX.Element | null][]);

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
