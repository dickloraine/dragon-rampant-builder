import React from 'react';
import { AppBar as AppBarMaterial, Box } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ReplayIcon from '@material-ui/icons/Replay';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, Fab, Tooltip, Hidden } from '@material-ui/core';
import LoadList from './LoadList';
import SaveList from './SaveList';
import SideMenu from './SideMenu';
import { useSelector, useDispatch } from 'react-redux';
import { updateUI } from 'store/ui/actions';
import { newRoster } from 'store/roster/actions';

export default function AppBar() {
  const dispatch = useDispatch();
  const ui = useSelector(state => state.ui);
  const units = useSelector(state => state.roster.units);
  const armyCost = Object.values(units).reduce((acc, unit) => acc + unit.points, 0);

  const changeViewMode = (clicked, newState) => {
    const notClicked = clicked === 'viewMode' ? 'editMode' : 'viewMode';
    let newStates = { [clicked]: newState };
    if (newState) newStates = { ...newStates, [notClicked]: false };
    dispatch(updateUI(newStates));
  };

  const ToggleUIButton = ({ option, Icon, title, onClick }) => (
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
            <Hidden smDown>
              <Typography variant="h6">
                &nbsp;&nbsp;&nbsp;&nbsp;Total Points&nbsp;&nbsp;
                <Fab color="secondary" size="small">
                  <Typography variant="h6">{armyCost}</Typography>
                </Fab>
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h6">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Fab color="secondary" size="small">
                  <Typography variant="h6">{armyCost}</Typography>
                </Fab>
              </Typography>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBarMaterial>
      <Toolbar />
    </Box>
  );
}
