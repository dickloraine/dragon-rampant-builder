import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import {
  Dialog,
  Tooltip,
  IconButton,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Chip
} from '@material-ui/core';
import { useState } from 'react';

const About = ({ onClose = null }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="Load List">
        <IconButton color="inherit" onClick={handleOpen}>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      {<Typography onClick={handleOpen}>About</Typography>}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: 'center' }}>About</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            A simple Army Builder for the tabletop game{' '}
            {<a href="https://ospreypublishing.com/dragon-rampant">Dragon Rampant</a>}.
          </Typography>
          <Box display="flex" style={{ marginTop: 25 }}>
            <Chip
              label="View on Github"
              icon={<GitHubIcon />}
              component="a"
              href="#chip"
              clickable
            />
            <Box flexGrow={1}></Box>
            <Chip label="License: MIT" />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default About;
