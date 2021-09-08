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
import { useSelector } from 'react-redux';
import { selectAllRules } from 'store/dataSlice';
import { RootState, Unit } from 'store/types';
import useOpen from '../../hooks/useOpen';

const FantasticalRules: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const fantasticalRulesData = useSelector(
    (state: RootState) => state.data.fantasticalRulesData
  );
  const rulesData = useSelector((state: RootState) => selectAllRules(state));

  let fantasticalRules = Object.keys(fantasticalRulesData).filter(
    (rule) => !fantasticalRulesData[rule].exclude_units.includes(unit.name)
  );

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
                <Tooltip title={rulesData[name].description}>
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
                <Tooltip title={rulesData[name].description}>
                  <Typography>
                    {name}{' '}
                    <Typography color="secondary" component="span">
                      @{fantasticalRulesData[name].points}
                    </Typography>
                  </Typography>
                </Tooltip>
              )}
              {unit.fantasticalRules.indexOf(name) > -1 && (
                <Tooltip title={rulesData[name].description}>
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
