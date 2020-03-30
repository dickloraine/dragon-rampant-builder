import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem, Drawer, Divider } from '@material-ui/core';
import LoadList from './LoadList';
import SaveList from './SaveList';
import DeleteList from './DeleteList';
import ExportList from './ExportList';
import ImportList from './ImportList';
import Backup from './Backup';
import Restore from './Restore';

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button key={'Save'}>
            <SaveList onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Load'}>
            <LoadList onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Delete'}>
            <DeleteList onClose={handleClose} showText={true} />
          </ListItem>
          <Divider />
          <ListItem button key={'Export'}>
            <ExportList onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Import'}>
            <ImportList onClose={handleClose} showText={true} />
          </ListItem>
          <Divider />
          <ListItem button key={'Backup'}>
            <Backup onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Restore'}>
            <Restore onClose={handleClose} showText={true} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
