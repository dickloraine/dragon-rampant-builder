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

const Trait: React.FC<{ unit: Unit; onChange: (unit: Unit) => void }> = ({
  unit,
  onChange,
}) => {
  const [open, handleOpen, handleClose] = useOpen();
  const traitData = useAppSelector((state) => state.data.traits);
  const inlineRules = useAppSelector((state) => state.ui.inlineRules);
  const viewMode = useAppSelector((state) => state.ui.viewMode);

  if (!unit.fantasticalRules.some((rule) => rule === 'Leader')) return <div></div>;

  const handleChange = (e: SelectChangeEvent<string>) =>
    onChange({ ...unit, trait: e.target.value });

  return (
    <Box marginBottom="-20px">
      {!viewMode && (
        <FormLabel onClick={handleOpen} component="legend">
          Trait
          <ArrowDropDownIcon sx={{ pt: '5px' }} />
        </FormLabel>
      )}
      <Container sx={{ mb: 0 }}>
        {viewMode && <Typography variant="h4">Trait</Typography>}
        {unit.trait && (
          <List dense>
            <Box marginLeft={!inlineRules ? '1rem' : 'inherit'}>
              <Tooltip
                key={unit.trait}
                title={traitData[unit.trait]?.description || ''}
              >
                <ListItem key={unit.trait}>
                  <ListItemText
                    primary={unit.trait}
                    secondary={(inlineRules && traitData[unit.trait]?.short) || ''}
                    primaryTypographyProps={{ variant: 'body2' }}
                    sx={{ m: 0 }}
                  />
                </ListItem>
              </Tooltip>
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
          value={unit.trait || ''}
          onChange={handleChange}
          input={<Input />}
          renderValue={() => ' '}
        >
          {Object.keys(traitData).map((name) => (
            <MenuItem key={name} value={name} dense sx={{ maxWidth: 400 }}>
              <Tooltip title={traitData[name].description}>
                <ListItemText
                  primary={traitData[name].roll + ': ' + name}
                  secondary={(inlineRules && traitData[name]?.short) || ''}
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

export default Trait;
