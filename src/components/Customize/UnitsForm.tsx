import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import produce from 'immer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DataUnit, UnitOption, UnitStats } from 'store/dataSlice';
import { RootState } from 'store/store';
import range from 'utils/range';
import statData from 'utils/statData';
import { CustomFormProps } from './CustomizeList';
import OptionsForm from './OptionsForm';

const emptyOption = {
  points: 0,
  summary: '',
};

const SelectStat: React.FC<{
  stat: keyof UnitStats;
  unit: DataUnit;
  changeState: React.Dispatch<React.SetStateAction<DataUnit>>;
  isPhone: boolean;
}> = ({ stat, unit, changeState, isPhone }) => {
  const data = statData[stat];

  return (
    <>
      <TableCell>{isPhone ? data.shortName : data.name}</TableCell>
      <TableCell>
        <Select
          value={unit.stats[stat]}
          type="number"
          onChange={(e) =>
            changeState({
              ...unit,
              stats: { ...unit.stats, [stat]: e.target.value as number },
            })
          }
        >
          {data.range.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </TableCell>
    </>
  );
};

function UnitsForm(props: CustomFormProps<DataUnit>) {
  const { open, handleClose, initialState, changeState, handleAction, validateName } =
    props;
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('xs'));
  const unit = initialState;
  const rules = useSelector((state: RootState) => state.data.rulesData);

  const [optionsOpen, setOptionsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<UnitOption>({ ...emptyOption });
  const [currentOptionName, setCurrentOptionName] = useState('Name');
  const selectProps = { unit: unit, changeState: changeState, isPhone: isPhone };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Unit</DialogTitle>
      <DialogContent>
        <FormControl>
          {/* --------------------------------- Name -------------------------------- */}
          <TextField
            autoFocus
            label="Name"
            type="text"
            margin="normal"
            fullWidth
            value={unit.name}
            onChange={(e) => changeState({ ...unit, name: e.target.value })}
            error={!validateName()}
            helperText="You have to choose a unique name!"
          />
          {/* -------------------------------- Points ------------------------------- */}
          <TextField
            label="Points"
            margin="normal"
            type="number"
            select
            SelectProps={{
              value: unit.points,
              onChange: (e) =>
                changeState({
                  ...unit,
                  points: e.target.value as number,
                }),
            }}
          >
            {range(1, 10).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
          {/* --------------------------- Strength Points --------------------------- */}
          <TextField
            label="Strength&nbsp;Points"
            margin="normal"
            type="number"
            select
            SelectProps={{
              value: unit.stats.strengthPoints,
              onChange: (e) =>
                changeState({
                  ...unit,
                  stats: { ...unit.stats, strengthPoints: e.target.value as number },
                }),
            }}
          >
            {[6, 12].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        {/* --------------------------------- Stats --------------------------------- */}
        <InputLabel id="stats-label" style={{ marginTop: 15 }}>
          Stats
        </InputLabel>
        <TableContainer style={{ marginBottom: 20 }}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <SelectStat stat="attack" {...selectProps} />
                <SelectStat stat="attackValue" {...selectProps} />
              </TableRow>
              <TableRow>
                <SelectStat stat="move" {...selectProps} />
                <SelectStat stat="defenceValue" {...selectProps} />
              </TableRow>
              <TableRow>
                <SelectStat stat="shoot" {...selectProps} />
                <SelectStat stat="shootValue" {...selectProps} />
              </TableRow>
              <TableRow>
                <SelectStat stat="courage" {...selectProps} />
                <SelectStat stat="shootRange" {...selectProps} />
              </TableRow>
              <TableRow>
                <SelectStat stat="armour" {...selectProps} />
                <SelectStat stat="movement" {...selectProps} />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* --------------------------------- Rules --------------------------------- */}
        <InputLabel id="rules-label" style={{ marginTop: 15 }}>
          Rules
        </InputLabel>
        <Select
          multiple
          id="rules"
          labelId="rules-label"
          value={unit.rules}
          onChange={(e) => changeState({ ...unit, rules: e.target.value as string[] })}
        >
          {Object.keys(rules).map((rule) => (
            <MenuItem key={rule} value={rule}>
              {rule}
            </MenuItem>
          ))}
        </Select>
        {/* -------------------------------- Options -------------------------------- */}
        <InputLabel id="options-label" style={{ marginTop: 15 }}>
          Options
        </InputLabel>
        <List>
          {Object.keys(unit.options).map((name) => (
            <ListItem id={name} key={name}>
              <ListItemIcon>
                <IconButton
                  aria-label="Edit"
                  onClick={() => {
                    setCurrentOption(unit.options[name]);
                    setCurrentOptionName(name);
                    setOptionsOpen(true);
                  }}
                >
                  <EditIcon color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  aria-label="Delete"
                  onClick={() =>
                    changeState(
                      produce(unit, (draft) => {
                        delete draft.options[name];
                      })
                    )
                  }
                >
                  <DeleteForeverIcon color="action" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          <ListItem id="add_fr" key="add_fr">
            <Button
              aria-label="Add option"
              onClick={() => {
                setCurrentOption(emptyOption);
                setCurrentOptionName('Name');
                setOptionsOpen(true);
              }}
              startIcon={<AddCircleIcon />}
            >
              Add option
            </Button>
          </ListItem>
        </List>
        <OptionsForm
          open={optionsOpen}
          handleClose={() => setOptionsOpen(false)}
          name={currentOptionName}
          option={currentOption}
          unit={unit}
          changeOption={setCurrentOption}
          changeName={setCurrentOptionName}
          changeState={changeState}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAction} color="primary" disabled={!validateName()}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UnitsForm;
