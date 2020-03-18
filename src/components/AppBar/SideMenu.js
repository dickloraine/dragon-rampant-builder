import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Load from './Load';
import Save from './Save';
import Delete from './Delete';

export default function SideMenu({ loadList, saveList, removeList }) {
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
          <Load onClick={doAndClose(loadList)} showText={true} />
        </ListItem>
        <ListItem button key={'Delete'}>
          <Delete onClick={doAndClose(removeList)} showText={true} />
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
