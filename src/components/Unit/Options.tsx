import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Tooltip,
  Typography,
} from '@material-ui/core';
import React from 'react';
import data, { Unit } from 'store/data';

const Options: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const optionsData = data.unitData[unit.name].options;
  if (!optionsData || !Object.keys(optionsData).length) return <div></div>;

  const handleChange = (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let newUnit = { ...unit };

    if (e.target.checked) {
      newUnit.options = [...newUnit.options, option];
    } else {
      newUnit.options = newUnit.options.filter((val) => val !== option);
    }

    onChange(newUnit);
  };

  return (
    <FormControl component="fieldset" style={{ marginTop: 10 }}>
      <FormLabel component="legend">Options</FormLabel>
      <FormGroup>
        {Object.keys(optionsData).map((option) => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange(option)}
                checked={unit.options.includes(option)}
              />
            }
            label={
              <Tooltip title={optionsData[option].summary}>
                <Typography>
                  {option}{' '}
                  <Typography color="secondary" component="span">
                    @{optionsData[option].points}
                  </Typography>
                </Typography>
              </Tooltip>
            }
            key={option}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default Options;
