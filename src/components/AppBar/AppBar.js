import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import GridOnIcon from '@material-ui/icons/GridOn';
import NotesIcon from '@material-ui/icons/Notes';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { IconButton, Fab, Tooltip, Hidden } from '@material-ui/core';
import Load from './Load';
import Save from './Save';
import Delete from './Delete';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 25
  },

  flexing: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  },

  flexingend: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

export default function BuilderAppBar({
  ui,
  setUIOption,
  setUIOptions,
  armyCost,
  save,
  load
}) {
  const classes = useStyles();

  const changeViewMode = (clicked, newState) => {
    const notClicked = clicked === 'viewMode' ? 'editMode' : 'viewMode';
    let newStates = { [clicked]: newState };
    if (newState) newStates = { ...newStates, [notClicked]: false };
    setUIOptions(newStates);
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
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.flexing}>
            <Hidden smDown>
              <Typography variant="h5">
                Dragon Rampant Army Builder&nbsp;&nbsp;
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h5" className={classes.flexing}>
                DRAB
              </Typography>
            </Hidden>
            <Save onClick={save} />
            <Load onClick={load} />
            <Delete />
          </div>
          <div className={classes.flexingend}>
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
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
