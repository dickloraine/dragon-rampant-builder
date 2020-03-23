import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem, Drawer, Divider } from '@material-ui/core';
import LoadList from '../LoadList';
import SaveList from '../SaveList';
import DeleteList from '../DeleteList';
import ExportList from '../ExportList';
import ImportList from '../ImportList';

export default function SideMenu({
  roster,
  setRoster,
  setForceInputUpdate,
  showError,
  showSuccess
}) {
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
            <SaveList
              roster={roster}
              showError={showError}
              showSuccess={showSuccess}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <ListItem button key={'Load'}>
            <LoadList
              setRoster={setRoster}
              setForceInputUpdate={setForceInputUpdate}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <ListItem button key={'Delete'}>
            <DeleteList
              showSuccess={showSuccess}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <Divider />
          <ListItem button key={'Export'}>
            <ExportList
              roster={roster}
              showError={showError}
              showSuccess={showSuccess}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <ListItem button key={'Import'}>
            <ImportList
              setRoster={setRoster}
              setForceInputUpdate={setForceInputUpdate}
              showError={showError}
              showSuccess={showSuccess}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
