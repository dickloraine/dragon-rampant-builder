import { Divider, Drawer, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import About from './About';
import Backup from './Backup';
import DarkMode from './DarkMode';
import DeleteList from './DeleteList';
import ExportList from './ExportList';
import ImportList from './ImportList';
import LoadList from './LoadList';
import Restore from './Restore';
import SaveList from './SaveList';

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
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
          <Divider />
          <ListItem button key={'DarkMode'}>
            <DarkMode showText={true} />
          </ListItem>
          <ListItem button key={'About'}>
            <About onClose={handleClose} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
