import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const ExpandIcon = ({ expanded, onClick }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded
      })}
      onClick={onClick}
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

export default ExpandIcon;
