import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Load from './Load';
import Save from './Save';
import Delete from './Delete';

export default function SideMenu({ loadList, saveList, removeList, getSavedLists }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const doAndClose = func => (...values) => {
    func(...values);
    setOpen(false);
  };

  const sideList = () => (
    <>
      <List>
        <ListItem button key={'Save'}>
          <Save onClick={doAndClose(saveList)} showText={true} />
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
            showText={true}
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
