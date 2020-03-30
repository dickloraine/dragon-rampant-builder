import React from 'react';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { IconButton, Box, Tooltip } from '@material-ui/core';
import TextInputDialog from '../TextInputDialog';
import { useSelector, useDispatch } from 'react-redux';
import { updateRoster, updateUnit } from 'store/roster/actions';

const Actions = ({ id, unit }) => {
  const dispatch = useDispatch();
  const roster = useSelector(state => state.roster);

  const moveUnit = dir => {
    const unitOrder = [...roster.unitOrder];
    const index = roster.unitOrder.indexOf(id);
    const nextIndex = dir ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= unitOrder.length) return;
    unitOrder[nextIndex] = roster.unitOrder[index];
    unitOrder[index] = roster.unitOrder[nextIndex];
    dispatch(updateRoster({ unitOrder: unitOrder }));
  };
  const moveLeft = () => moveUnit(1);
  const moveRight = () => moveUnit(0);

  const renameUnit = value => updateUnit(id, { customName: value });

  const cloneUnit = () => {
    const nextId = roster.nextID;

    dispatch(
      updateRoster({
        nextID: nextId + 1,
        units: {
          ...roster.units,
          [nextId]: { ...unit }
        },
        unitOrder: [...roster.unitOrder, nextId]
      })
    );
  };

  return (
    <Box>
      <Box display="flex" width="97%" style={{ height: 25, marginTop: 10 }}>
        <Box display="flex" alignItems="center">
          <Tooltip title="Move back">
            <IconButton onClick={moveLeft}>
              <NavigateBeforeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Move forward">
            <IconButton onClick={moveRight}>
              <NavigateNextIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box flexGrow={1}></Box>
        <Box display="flex" alignItems="center">
          <TextInputDialog
            anchor={openFunc => (
              <Tooltip title="Rename unit">
                <IconButton onClick={openFunc}>
                  <TextFieldsIcon />
                </IconButton>
              </Tooltip>
            )}
            action={renameUnit}
            title="Enter the name for the unit"
            label="Unit name"
            defaultValue={unit.customName}
            okayText="Rename"
          />
          <Tooltip title="Clone unit">
            <IconButton onClick={cloneUnit}>
              <PersonAddOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Actions;
