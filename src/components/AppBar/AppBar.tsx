import {
  AppBar as AppBarMaterial,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ReplayIcon from '@material-ui/icons/Replay';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newRoster } from 'store/rosterSlice';
import { AppDispatch, RootState } from 'store/store';
import { UIState, updateUI } from 'store/uiSlice';
import LoadList from '../LoadList';
import SaveList from '../SaveList';
import SideMenu from '../SideMenu';
import TotalPoints from './TotalPoints';

const AppBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const ui = useSelector((state: RootState) => state.ui);

  const changeViewMode = (clicked: keyof UIState, newState: boolean) => {
    const notClicked = clicked === 'viewMode' ? 'editMode' : 'viewMode';
    let newStates = { [clicked]: newState };
    if (newState) newStates = { ...newStates, [notClicked]: false };
    dispatch(updateUI(newStates));
  };

  const ToggleUIButton: React.FC<{
    option: keyof UIState;
    Icon: any;
    title: string;
    onClick: (arg0: keyof UIState, arg1: boolean) => void;
  }> = ({ option, Icon, title, onClick }) => (
    <Tooltip title={title}>
      <IconButton
        color="inherit"
        onClick={() => {
          onClick(option, !ui[option]);
        }}
      >
        <Icon fontSize="small" color={ui[option] ? 'inherit' : 'disabled'} />
      </IconButton>
    </Tooltip>
  );

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
            <IconButton color="inherit" onClick={() => dispatch(newRoster())}>
              <ReplayIcon />
            </IconButton>
            <SaveList />
            <LoadList />
          </Box>
          <Box flexGrow={1}></Box>
          <Box display="flex" alignItems="center">
            <ToggleUIButton
              option="viewMode"
              Icon={VisibilityIcon}
              title="View mode"
              onClick={changeViewMode}
            />
            <ToggleUIButton
              option="editMode"
              Icon={EditIcon}
              title="Edit mode"
              onClick={changeViewMode}
            />
            <TotalPoints />
          </Box>
        </Toolbar>
      </AppBarMaterial>
      <Toolbar />
    </Box>
  );
};

export default AppBar;
