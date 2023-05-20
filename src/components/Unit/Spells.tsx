import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
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

const Spells: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const powersData = useAppSelector((state) => state.data.spells);
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);
  const viewMode = useAppSelector((state) => state.ui.viewMode);
  const editMode = useAppSelector((state) => state.ui.editMode);
  if (!unit.fantasticalRules.some((rule) => rule === 'Wizardlings')) return <div></div>;

  const handleChange = (e: SelectChangeEvent<string[]>) =>
    onChange({ ...unit, spells: [...(e.target.value as string[])] });

  return (
    <Box marginBottom="-20px">
      {!viewMode && (
        <FormLabel onClick={handleOpen} component="legend">
          Spells
          <ArrowDropDownIcon sx={{ pt: '5px' }} />
        </FormLabel>
      )}
      <Container sx={{ mb: 0 }}>
        {viewMode && <Typography variant="h4">Spells</Typography>}
        {unit.spells && (
          <List dense>
            <Box marginLeft={!inlineRules ? '1rem' : 'inherit'}>
              {unit.spells.map((name, i, arr) => (
                <Tooltip key={name} title={powersData[name]?.effect || ''}>
                  {unit.spells && !editMode && inlineRules ? (
                    <ListItem key={name}>
                      <ListItemText
                        primary={name}
                        secondary={powersData[name]?.short || ''}
                        primaryTypographyProps={{ variant: 'body2' }}
                        sx={{ m: 0 }}
                      />
                    </ListItem>
                  ) : (
                    <Typography variant="inherit" key={name}>
                      {name}
                      {i === arr.length - 1 ? '' : ', '}
                    </Typography>
                  )}
                </Tooltip>
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
          {Object.keys(powersData).map((name) => (
            <MenuItem key={name} value={name} dense sx={{ maxWidth: 400 }}>
              <Tooltip title={powersData[name].effect}>
                <ListItemText
                  primary={name}
                  secondary={(inlineRules && powersData[name]?.short) || ''}
                  primaryTypographyProps={{
                    color:
                      unit.spells && unit.spells.indexOf(name) > -1
                        ? 'primary'
                        : 'inherit',
                  }}
                  secondaryTypographyProps={{ sx: { whiteSpace: 'normal' } }}
                  sx={{ m: 0 }}
                />
              </Tooltip>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Spells;
