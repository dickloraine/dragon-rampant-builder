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

export default function AppBar({
  roster,
  ui,
  setUIOption,
  updateUI,
  armyCost,
  setRoster,
  setForceInputUpdate,
  showFeedback,
  reload,
  data
}) {
  const changeViewMode = (clicked, newState) => {
    const notClicked = clicked === 'viewMode' ? 'editMode' : 'viewMode';
    let newStates = { [clicked]: newState };
    if (newState) newStates = { ...newStates, [notClicked]: false };
    updateUI(newStates);
  };

  const ToggleUIButton = ({ option, Icon, title, onClick = setUIOption }) => {
    return (
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
  };

  return (
    <Box display="flex">
      <AppBarMaterial position="fixed">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <SideMenu
              roster={roster}
              setRoster={setRoster}
              data={data}
              setForceInputUpdate={setForceInputUpdate}
              showFeedback={showFeedback}
            />
            <Hidden smDown>
              <Typography variant="h5">
                &nbsp;&nbsp;Dragon Rampant Army Builder&nbsp;&nbsp;
              </Typography>
            </Hidden>
            <Hidden xsDown mdUp>
              <Typography variant="h5">&nbsp;&nbsp;DRAB&nbsp;&nbsp;</Typography>
            </Hidden>
            <IconButton color="inherit" onClick={reload}>
              <ReplayIcon />
            </IconButton>
            <SaveList roster={roster} showFeedback={showFeedback} />
            <LoadList
              setRoster={setRoster}
              showFeedback={showFeedback}
              setForceInputUpdate={setForceInputUpdate}
              data={data}
            />
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
