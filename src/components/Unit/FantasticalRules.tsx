import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { Unit } from '../../store/types';

const FantasticalRules: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const fantasticalRulesData = useAppSelector(
    (state) => state.data.fantasticalRulesData
  );
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);

  if (unit.name === 'Unit') return <div></div>;

  const fantasticalRules = Object.keys(fantasticalRulesData).filter(
    (rule) => !fantasticalRulesData[rule].exclude_units.includes(unit.name)
  );

  const handleChange = (e: SelectChangeEvent<string[]>) =>
    onChange({ ...unit, fantasticalRules: [...(e.target.value as string[])] });

  return (
    <>
      <FormLabel onClick={handleOpen} component="legend">
        Fantastical Rules
        <ArrowDropDownIcon sx={{ pt: '5px' }} />
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
                <Tooltip title={fantasticalRulesData[name].description}>
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
      <FormControl variant="standard" sx={{ mt: 0, width: 0, height: 0 }}>
        <Select
          variant="standard"
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
            <MenuItem key={name} value={name} dense sx={{ maxWidth: 400 }}>
              <Tooltip title={fantasticalRulesData[name].description}>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      color={
                        unit.fantasticalRules.indexOf(name) > -1 ? 'primary' : 'inherit'
                      }
                    >
                      {name}{' '}
                      <Typography color="secondary" component="span" variant="body2">
                        @{fantasticalRulesData[name].points}
                      </Typography>
                    </Typography>
                  }
                  secondary={(inlineRules && fantasticalRulesData[name]?.short) || ''}
                  secondaryTypographyProps={{ sx: { whiteSpace: 'normal' } }}
                  sx={{ m: 0 }}
                />
              </Tooltip>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FantasticalRules;
