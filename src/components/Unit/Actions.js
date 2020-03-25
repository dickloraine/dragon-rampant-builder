import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { IconButton, CardActions } from '@material-ui/core';

const Actions = ({ id, unit, roster, updateRoster }) => {
  const moveUnit = dir => {
    const unitOrder = [...roster.unitOrder];
    const index = roster.unitOrder.indexOf(id);
    const nextIndex = dir ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= unitOrder.length) return;
    unitOrder[nextIndex] = roster.unitOrder[index];
    unitOrder[index] = roster.unitOrder[nextIndex];
    updateRoster({ ...roster, unitOrder: unitOrder });
  };
  const moveLeft = () => moveUnit(1);
  const moveRight = () => moveUnit(0);

  const cloneUnit = () => {
    const nextId = roster.nextID;

    updateRoster({
      nextID: nextId + 1,
      units: {
        ...roster.units,
        [nextId]: { ...unit }
      },
      unitOrder: [...roster.unitOrder, nextId]
    });
  };

  return (
    <CardActions>
      <IconButton onClick={moveLeft}>
        <ArrowLeftIcon />
      </IconButton>
      <IconButton onClick={moveRight}>
        <ArrowRightIcon />
      </IconButton>
      <IconButton onClick={cloneUnit}>
        <PlusOneIcon />
      </IconButton>
    </CardActions>
  );
};

export default Actions;
