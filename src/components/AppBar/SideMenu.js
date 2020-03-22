import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider, List, ListItem, Drawer } from '@material-ui/core';
import Load from './Load';
import Save from './Save';
import Delete from './Delete';
import Share from './Share';

export default function SideMenu({
  loadList,
  saveList,
  removeList,
  getSavedLists,
  showError,
  showSuccess,
  getListAsString,
  rosterName
}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleClose = () => setOpen(false);
  const doAndClose = func => (...values) => {
    func(...values);
    setOpen(false);
  };

  const sideList = () => (
    <>
      <List>
        <ListItem button key={'Save'}>
          <Save
            onClick={doAndClose(saveList)}
            showError={showError}
            showSuccess={showSuccess}
            showText={true}
          />
        </ListItem>
        <ListItem button key={'Load'}>
          <Load
            onClick={doAndClose(loadList)}
            getSavedLists={getSavedLists}
            showText={true}
          />
        </ListItem>
        <ListItem button key={'Delete'}>
          <Delete
            onClick={doAndClose(removeList)}
            getSavedLists={getSavedLists}
            showSuccess={showSuccess}
            showText={true}
          />
        </ListItem>
        <Divider />
        <ListItem button key={'Share'}>
          <Share
            getListAsString={getListAsString}
            rosterName={rosterName}
            showText={true}
            closeSidebar={handleClose}
          />
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </>
  );
}
