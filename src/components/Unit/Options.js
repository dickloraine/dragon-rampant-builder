import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import getData from 'store/getData';

export default function Options({ unit, onChange }) {
  const optionsData = getData('unitData')[unit.name].options;
  if (!optionsData || !Object.keys(optionsData).length) return <div></div>;

  const handleChange = option => e => {
    let newUnit = { ...unit };

    if (e.target.checked) {
      newUnit.options = [...newUnit.options, option];
    } else {
      newUnit.options = newUnit.options.filter(val => val !== option);
    }

    onChange(newUnit);
  };

  return (
    <FormControl component="fieldset" style={{ marginTop: 10 }}>
      <FormLabel component="legend">Options</FormLabel>
      <FormGroup>
        {Object.keys(optionsData).map(option => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange(option)}
                checked={unit.options.includes(option)}
              />
            }
            label={
              <Typography>
                {option}{' '}
                <Typography color="secondary" component="span">
                  @{optionsData[option].points}
                </Typography>
              </Typography>
            }
            key={option}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
