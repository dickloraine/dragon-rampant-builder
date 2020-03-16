import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open, options, title } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <List>
        {options.map(value => (
          <ListItem button onClick={() => handleListItemClick(value)} key={value}>
            {value}
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
