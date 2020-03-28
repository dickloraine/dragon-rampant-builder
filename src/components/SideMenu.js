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

export default function SideMenu({
  roster,
  setRoster,
  armyCost,
  setForceInputUpdate,
  showFeedback
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
              showFeedback={showFeedback}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <ListItem button key={'Load'}>
            <LoadList
              setRoster={setRoster}
              setForceInputUpdate={setForceInputUpdate}
              showFeedback={showFeedback}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <ListItem button key={'Delete'}>
            <DeleteList
              showFeedback={showFeedback}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <Divider />
          <ListItem button key={'Export'}>
            <ExportList
              roster={roster}
              armyCost={armyCost}
              showFeedback={showFeedback}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <ListItem button key={'Import'}>
            <ImportList
              setRoster={setRoster}
              setForceInputUpdate={setForceInputUpdate}
              showFeedback={showFeedback}
              onClose={handleClose}
              showText={true}
            />
          </ListItem>
          <Divider />
          <ListItem button key={'Backup'}>
            <Backup onClose={handleClose} showText={true} />
          </ListItem>
          <ListItem button key={'Restore'}>
            <Restore
              onClose={handleClose}
              setForceInputUpdate={setForceInputUpdate}
              showText={true}
              showFeedback={showFeedback}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
