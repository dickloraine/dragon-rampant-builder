import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {
  Tooltip,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

const copyToClipboard = text => navigator.clipboard.writeText(text);

export default function Share({
  getListAsString,
  rosterName,
  showText = false,
  closeSidebar = false
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const url = window.location.href + '?' + getListAsString();
  const handleClick = text => {
    copyToClipboard(text);
    setOpen(false);
    if (closeSidebar) closeSidebar();
  };

  return (
    <>
      <Tooltip title="Share">
        <IconButton color="inherit" onClick={handleOpen}>
          <ShareIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleOpen}>Share</Typography>}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Choose a link type</DialogTitle>
        <List>
          <ListItem key="url" button onClick={() => handleClick(url)}>
            <ListItemIcon>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Copy URL to clipboard" />
          </ListItem>
          <ListItem
            key="htmlurl"
            button
            onClick={() => handleClick(`<a href="${url}">${rosterName}</a>`)}
          >
            <ListItemIcon>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Copy Link to clipboard" />
          </ListItem>
          <ListItem
            key="mdlurl"
            button
            onClick={() => handleClick(`[${rosterName}](${url})`)}
          >
            <ListItemIcon>
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Copy Markdown Link to clipboard" />
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}
