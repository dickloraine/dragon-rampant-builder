import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Button,
  IconButton,
  InputLabel,
  List,
  ListItem,
  Menu,
  MenuItem,
} from '@mui/material';
import { produce } from 'immer';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useAnchor from '../../../hooks/useAnchor';
import { SelectElement } from '../../../libs/react-hook-form-mui';
import { UnitStats } from '../../../store/types';
import statData from '../../../utils/statData';

type StatManipulationProps = {
  title: string;
  type: 'setStats' | 'adjustStats';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formContext: UseFormReturn<any, any>;
};

const StatManipulation = ({ title, type, formContext }: StatManipulationProps) => {
  const [anchorStat, handleClickStat, handleCloseStat] = useAnchor();
  const rangeType = type === 'setStats' ? 'range' : 'adjustRange';
  const { setValue, control } = formContext;
  const stats = useWatch({ name: type, control }) || {};

  return (
    <>
      <InputLabel id="options-label" sx={{ mt: 2 }}>
        {title}
      </InputLabel>
      <List>
        {Object.keys(stats).map((name) => (
          <ListItem
            id={name}
            key={name}
            secondaryAction={
              <IconButton
                size="small"
                aria-label="Delete"
                onClick={() =>
                  setValue(
                    type,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    produce(stats, (draft: any) => {
                      if (draft) delete draft[name as keyof UnitStats];
                    })
                  )
                }
              >
                <DeleteForeverIcon color="action" />
              </IconButton>
            }
          >
            <SelectElement
              name={type + '.' + name}
              label={statData[name].name}
              type="number"
              fullWidth
              options={statData[name][rangeType]}
            />
          </ListItem>
        ))}
        <ListItem id="add_opt" key="add_opt">
          <Button onClick={handleClickStat} startIcon={<AddCircleIcon />}>
            Add Stat
          </Button>
          <Menu
            id="add-stat-menu"
            anchorEl={anchorStat}
            keepMounted
            open={Boolean(anchorStat)}
            onClose={handleCloseStat}
          >
            {Object.keys(statData)
              .filter((k) => !Object.keys(stats).includes(k))
              .map((name) => (
                <MenuItem
                  onClick={() =>
                    setValue(type, {
                      ...stats,
                      [name]: type === 'setStats' ? 4 : 0,
                    })
                  }
                  key={name}
                >
                  {statData[name].name}
                </MenuItem>
              ))}
          </Menu>
        </ListItem>
      </List>
    </>
  );
};

export default StatManipulation;
