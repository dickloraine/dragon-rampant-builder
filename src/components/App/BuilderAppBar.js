import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GridOnIcon from '@material-ui/icons/GridOn';
import NotesIcon from '@material-ui/icons/Notes';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { IconButton, Fab, Tooltip, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 25
  },

  title: {
    flexGrow: 1
  }
}));

export default function BuilderAppBar({ ui, setUIOption }) {
  const classes = useStyles();

  function ToggleUIButton({ option, Icon, title }) {
    return (
      <Tooltip title={title}>
        <IconButton
          color="inherit"
          onClick={() => {
            setUIOption(option, !ui[option]);
          }}
        >
          <Icon color={ui[option] ? 'inherit' : 'disabled'} />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Hidden xsDown>
            <Typography variant="h5" className={classes.title}>
              Dragon Rampant Army Builder
            </Typography>

            <ToggleUIButton
              option="showStats"
              Icon={GridOnIcon}
              title="Show Statblock"
            />
            <ToggleUIButton option="showRules" Icon={NotesIcon} title="Show Rules" />
            <ToggleUIButton
              option="showOptions"
              Icon={FormatListBulletedIcon}
              title="Show Options"
            />
            <Typography variant="h6">
              &nbsp;&nbsp;&nbsp;&nbsp;Total Points&nbsp;&nbsp;
              <Fab color="secondary" size="small">
                <Typography variant="h6">{ui.armyCost}</Typography>
              </Fab>
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title}>
              DRAB
            </Typography>

            <ToggleUIButton
              option="showStats"
              Icon={GridOnIcon}
              title="Show Statblock"
            />
            <ToggleUIButton option="showRules" Icon={NotesIcon} title="Show Rules" />
            <ToggleUIButton
              option="showOptions"
              Icon={FormatListBulletedIcon}
              title="Show Options"
            />
            <Typography variant="h6">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Fab color="secondary" size="small">
                <Typography variant="h6">{ui.armyCost}</Typography>
              </Fab>
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
