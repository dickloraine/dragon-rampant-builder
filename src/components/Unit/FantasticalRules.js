import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Input from '@material-ui/core/Input';
import { Typography, Box, Select, MenuItem } from '@material-ui/core';
import getData from 'store/getData';

function FantasticalRules({ unit, onChange }) {
  const [open, setOpen] = React.useState(false);
  const unitData = getData('unitData')[unit.name];
  const fantasticalRulesData = getData('fantasticalRulesData');

  let fantasticalRules = unitData.fantasticalRules;
  if (!fantasticalRules || !fantasticalRules.length) return <div></div>;
  if (fantasticalRules[0] === 'any')
    fantasticalRules = Object.keys(fantasticalRulesData);
  if (fantasticalRules[0] === 'exclude') {
    const toCheck = fantasticalRules.slice(1);
    fantasticalRules = Object.keys(fantasticalRulesData);
    for (const excluded of toCheck) {
      fantasticalRules = fantasticalRules.filter(val => val !== excluded);
    }
  }

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <FormLabel onClick={handleOpen} component="legend">
        Fantastical Rules <ArrowDropDownIcon />
      </FormLabel>
      {unit.fantasticalRules &&
        unit.fantasticalRules.length > 0 &&
        unit.fantasticalRules.map(name => (
          <div key={name}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  onClick={() =>
                    onChange({
                      ...unit,
                      fantasticalRules: [
                        ...unit.fantasticalRules.filter(v => v !== name)
                      ]
                    })
                  }
                />
              }
              label={
                <Typography>
                  {name}{' '}
                  <Typography color="secondary" component="span">
                    @{fantasticalRulesData[name].points}}
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
          onChange={e => onChange({ ...unit, fantasticalRules: [...e.target.value] })}
          input={<Input />}
          renderValue={() => ' '}
        >
          {fantasticalRules.map(name => (
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
}

export default FantasticalRules;
