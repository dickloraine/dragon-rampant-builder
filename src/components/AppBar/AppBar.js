import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, Fab, Tooltip, Hidden } from '@material-ui/core';
import Load from './Load';
import Save from './Save';
import Delete from './Delete';
import SideMenu from './SideMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 25
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function BuilderAppBar({
  ui,
  setUIOption,
  setUIOptions,
  armyCost,
  saveList,
  loadList,
  removeList
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
          <SideMenu
            className={classes.menuButton}
            loadList={loadList}
            saveList={saveList}
            removeList={removeList}
          />
          <Hidden smDown>
            <Typography className={classes.title} variant="h5">
              &nbsp;&nbsp;Dragon Rampant Army Builder&nbsp;&nbsp;
            </Typography>
            <Save onClick={saveList} />
            <Load onClick={loadList} />
            <Delete onClick={removeList} />
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h5" className={classes.title}>
              &nbsp;&nbsp;DRAB
            </Typography>
          </Hidden>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
