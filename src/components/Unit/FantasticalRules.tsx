import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import data, { Unit } from 'store/data';

const FantasticalRules: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const unitData = data.unitData[unit.name];
  const fantasticalRulesData = data.fantasticalRulesData;

  let fantasticalRules = unitData.fantasticalRules;
  if (!fantasticalRules || !fantasticalRules.length) return <div></div>;
  if (fantasticalRules[0] === 'any')
    fantasticalRules = Object.keys(fantasticalRulesData);
  if (fantasticalRules[0] === 'exclude') {
    const toCheck = fantasticalRules.slice(1);
    fantasticalRules = Object.keys(fantasticalRulesData);
    for (const excluded of toCheck) {
      fantasticalRules = fantasticalRules.filter((val) => val !== excluded);
    }
  }

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    onChange({ ...unit, fantasticalRules: [...(e.target.value as string[])] });

  return (
    <>
      <FormLabel onClick={handleOpen} component="legend">
        Fantastical Rules <ArrowDropDownIcon />
      </FormLabel>
      {unit.fantasticalRules &&
        unit.fantasticalRules.length > 0 &&
        unit.fantasticalRules.map((name) => (
          <div key={name}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  onClick={() =>
                    onChange({
                      ...unit,
                      fantasticalRules: [
                        ...unit.fantasticalRules.filter((v) => v !== name),
                      ],
                    })
                  }
                />
              }
              label={
                <Typography>
                  {name}{' '}
                  <Typography color="secondary" component="span">
                    @{fantasticalRulesData[name].points}
                  </Typography>
                </Typography>
              }
              key={name}
            />
          </div>
        ))}
      <FormControl style={{ marginTop: 10, width: 0, height: 0 }}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={unit.fantasticalRules}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {fantasticalRules.map((name) => (
            <MenuItem key={name} value={name}>
              {unit.fantasticalRules.indexOf(name) < 0 && (
                <Typography>
                  {name}{' '}
                  <Typography color="secondary" component="span">
                    @{fantasticalRulesData[name].points}
                  </Typography>
                </Typography>
              )}
              {unit.fantasticalRules.indexOf(name) > -1 && (
                <Typography color="primary">
                  {name}{' '}
                  <Typography color="secondary" component="span">
                    @{fantasticalRulesData[name].points}
                  </Typography>
                </Typography>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FantasticalRules;
