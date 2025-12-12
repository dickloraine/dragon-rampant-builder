import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import useOpen from '../../hooks/useOpen';
import { getSpellSchools } from '../../store/dataSlice';
import { Unit } from '../../store/types';

const SpellSchools: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const spellSchools = useAppSelector(getSpellSchools);
  const viewMode = useAppSelector((state) => state.ui.viewMode);
  if (
    !unit.fantasticalRules.some((rule) =>
      ['Spellcaster 1', 'Spellcaster 2', 'Spellcaster 3', 'Spellcaster 4'].includes(
        rule
      )
    )
  )
    return null;

  const handleChange = (e: SelectChangeEvent<string[]>) =>
    onChange({ ...unit, spells: [...(e.target.value as string[])] });

  return (
    <Box marginBottom="-20px">
      {!viewMode && (
        <FormLabel onClick={handleOpen} component="legend">
          Spell Schools
          <ArrowDropDownIcon sx={{ pt: '5px' }} />
        </FormLabel>
      )}
      <Container sx={{ mb: 0 }}>
        {viewMode && <Typography variant="h4">Spell Schools</Typography>}
        {unit.spells && (
          <List dense>
            <Box marginLeft={'1rem'}>
              {unit.spells.map((name, i, arr) => (
                <Typography variant="inherit" key={name}>
                  {name}
                  {i === arr.length - 1 ? '' : ', '}
                </Typography>
              ))}
            </Box>
          </List>
        )}
      </Container>
      <FormControl variant="standard" sx={{ mt: 1, width: 0, height: 0 }}>
        <Select
          variant="standard"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => <Box />}
          multiple
          value={unit.spells}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {spellSchools.map((name) => (
            <MenuItem key={name} value={name} dense sx={{ maxWidth: 400 }}>
              <ListItemText
                primary={name}
                secondary={''}
                sx={{ m: 0 }}
                slotProps={{
                  primary: {
                    color:
                      unit.spells && unit.spells.indexOf(name) > -1
                        ? 'primary'
                        : 'inherit',
                  },
                  secondary: { sx: { whiteSpace: 'normal' } },
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SpellSchools;
