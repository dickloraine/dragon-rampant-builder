import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar as AppBarMaterial } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, Fab, Tooltip, Hidden } from '@material-ui/core';
import Load from './Load';
import Save from './Save';
import SideMenu from './SideMenu';
import { Error, Success } from '../Toast';

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

export default function AppBar({
  ui,
  setUIOption,
  setUIOptions,
  armyCost,
  saveList,
  loadList,
  removeList,
  getSavedLists
}) {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const classes = useStyles();

  const showError = message => {
    setErrorMessage(message);
    setOpenError(true);
  };

  const showSuccess = message => {
    setSuccessMessage(message);
    setOpenSuccess(true);
  };

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
      <AppBarMaterial position="fixed">
        <Toolbar>
          <div className={classes.flexing}>
            <SideMenu
              loadList={loadList}
              saveList={saveList}
              removeList={removeList}
              getSavedLists={getSavedLists}
              showError={showError}
              showSuccess={showSuccess}
            />
            <Hidden smDown>
              <Typography variant="h5">
                &nbsp;&nbsp;Dragon Rampant Army Builder&nbsp;&nbsp;
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h5">&nbsp;&nbsp;DRAB&nbsp;&nbsp;</Typography>
            </Hidden>
            <Save onClick={saveList} showError={showError} showSuccess={showSuccess} />
            <Load onClick={loadList} getSavedLists={getSavedLists} />
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
      </AppBarMaterial>
      <Toolbar />
      <Success
        message={successMessage}
        open={openSuccess}
        setOpen={val => setOpenSuccess(val)}
      />
      <Error
        message={errorMessage}
        open={openError}
        setOpen={val => setOpenError(val)}
      />
    </div>
  );
}
