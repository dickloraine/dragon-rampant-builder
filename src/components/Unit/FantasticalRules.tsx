import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import data, { Unit } from 'store/data';
import useOpen from '../../hooks/useOpen';

const FantasticalRules: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const { open, handleOpen, handleClose } = useOpen();
  const unitData = data.unitData[unit.name];
  const fantasticalRulesData = data.fantasticalRulesData;
  const rulesData = data.rulesData;

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
                  onChange={() =>
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
                <Tooltip title={rulesData[name]}>
                  <Typography>
                    {name}{' '}
                    <Typography color="secondary" component="span">
                      @{fantasticalRulesData[name].points}
                    </Typography>
                  </Typography>
                </Tooltip>
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
                <Tooltip title={rulesData[name]}>
                  <Typography>
                    {name}{' '}
                    <Typography color="secondary" component="span">
                      @{fantasticalRulesData[name].points}
                    </Typography>
                  </Typography>
                </Tooltip>
              )}
              {unit.fantasticalRules.indexOf(name) > -1 && (
                <Tooltip title={rulesData[name]}>
                  <Typography color="primary">
                    {name}{' '}
                    <Typography color="secondary" component="span">
                      @{fantasticalRulesData[name].points}
                    </Typography>
                  </Typography>
                </Tooltip>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FantasticalRules;
