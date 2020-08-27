import {
  AppBar as AppBarMaterial,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ReplayIcon from '@material-ui/icons/Replay';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import { useDispatch } from 'react-redux';
import { newRoster } from 'store/rosterSlice';
import LoadList from '../LoadList';
import SaveList from '../SaveList';
import SideMenu from '../SideMenu';
import ToggleViewMode from './ToggleViewMode';
import TotalPoints from './TotalPoints';

const AppBar = () => {
  const dispatch = useDispatch();

  return (
    <Box display="flex">
      <AppBarMaterial position="fixed">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <SideMenu />
            <Hidden smDown>
              <Typography variant="h5">
                &nbsp;&nbsp;Dragon Rampant Army Builder&nbsp;&nbsp;
              </Typography>
            </Hidden>
            <Hidden xsDown mdUp>
              <Typography variant="h5">&nbsp;&nbsp;DRAB&nbsp;&nbsp;</Typography>
            </Hidden>
            <IconButton
              color="inherit"
              aria-label="reload"
              onClick={() => dispatch(newRoster())}
            >
              <ReplayIcon />
            </IconButton>
            <SaveList />
            <LoadList />
          </Box>
          <Box flexGrow={1}></Box>
          <Box display="flex" alignItems="center">
            <ToggleViewMode option="viewMode" Icon={VisibilityIcon} title="View mode" />
            <ToggleViewMode option="editMode" Icon={EditIcon} title="Edit mode" />
            <TotalPoints />
          </Box>
        </Toolbar>
      </AppBarMaterial>
      <Toolbar />
    </Box>
  );
};

export default AppBar;
