import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { removeUnit, updateUnit } from '../../store/rosterSlice';
import { Unit as UnitType } from '../../store/types';
import ExpandIcon from '../ExpandIcon';
import Actions from './Actions';
import FantasticalRules from './FantasticalRules';
import Options from './Options';
import SpecialRules from './SpecialRules';
import Spells from './Spells';
import StatBlock from './StatBlock';
import Trait from './Trait';
import UnitSelector from './UnitSelector';
import buildUnit from './buildUnit';

const Unit: React.FC<{ id: number }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const unit = useAppSelector((state) => state.roster.units[id]);
  const viewMode = useAppSelector((state) => state.ui.viewMode);
  const editMode = useAppSelector((state) => state.ui.editMode);

  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => setExpanded(!expanded);

  const handleChange = (unit: UnitType) => {
    unit = buildUnit(unit);
    dispatch(updateUnit(id, { ...unit }));
  };

  const handleRemove = () => dispatch(removeUnit(id));

  return (
    <Card sx={{ mb: 3, maxWidth: 380, width: '100%', position: 'relative' }}>
      {viewMode ? (
        <CardHeader
          title={
            <>
              <Typography variant="h3">
                <Chip label={unit.points} color="primary" />
                &nbsp;&nbsp;
                {unit.customName ? unit.customName : unit.name}
              </Typography>
              {unit.customName &&
                (expanded ? (
                  <Typography sx={{ ml: '45px', mb: -3 }}>{unit.name}</Typography>
                ) : (
                  <Typography sx={{ ml: '45px' }}>{unit.name}</Typography>
                ))}
            </>
          }
          action={<ExpandIcon expanded={expanded} onClick={handleExpandClick} />}
        />
      ) : (
        <CardHeader
          title={<UnitSelector unit={unit} id={id} />}
          action={
            <Button onClick={handleRemove}>
              <CloseIcon />
            </Button>
          }
        />
      )}
      <Collapse in={!viewMode || expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {!editMode && (
            <>
              <StatBlock stats={unit.stats} />
              <SpecialRules rules={unit.rules} />
            </>
          )}
          <Trait onChange={handleChange} unit={unit} />
          <Spells onChange={handleChange} unit={unit} />
          {!viewMode && (
            <>
              <Options onChange={handleChange} unit={unit} />
              <FantasticalRules onChange={handleChange} unit={unit} />
              <Actions id={id} unit={unit} />
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default React.memo(Unit);
