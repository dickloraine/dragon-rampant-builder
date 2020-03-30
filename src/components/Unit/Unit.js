import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CloseIcon from '@material-ui/icons/Close';
import { Button, CardHeader, Typography, Chip, Collapse } from '@material-ui/core';
import UnitSelector from './UnitSelector';
import Options from './Options';
import FantasticalRules from './FantasticalRules';
import StatBlock from './StatBlock';
import SpecialRules from './SpecialRules';
import Actions from './Actions';
import ExpandIcon from '../ExpandIcon';
import getData from 'store/getData';
import { useSelector, useDispatch } from 'react-redux';
import { setUnit, updateUnit, removeUnit } from 'store/roster/actions';
import buildUnit from './buildUnit';

function Unit({ id }) {
  const data = getData();
  const dispatch = useDispatch();
  const unit = useSelector(state => state.roster.units[id]);
  const ui = useSelector(state => state.ui);

  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => setExpanded(!expanded);

  const changeUnit = unitName => dispatch(setUnit(id, unitName));

  const handleChange = unit => {
    unit = buildUnit(unit);
    dispatch(updateUnit(id, { ...unit }));
  };

  return (
    <Card style={{ marginBottom: 25, maxWidth: 400, width: '100%' }}>
      {ui.viewMode ? (
        <CardHeader
          title={
            <>
              <Typography variant="h5">
                <Chip label={unit.points} color="primary" />
                &nbsp;&nbsp;
                {unit.customName ? unit.customName : unit.name}
              </Typography>
              {unit.customName &&
                (expanded ? (
                  <Typography style={{ marginLeft: 45, marginBottom: -25 }}>
                    {unit.name}
                  </Typography>
                ) : (
                  <Typography style={{ marginLeft: 45 }}>{unit.name}</Typography>
                ))}
            </>
          }
          action={<ExpandIcon expanded={expanded} onClick={handleExpandClick} />}
        />
      ) : (
        <CardHeader
          title={
            <UnitSelector unit={unit} onClose={changeUnit} options={data.unitNames} />
          }
          action={
            <Button onClick={() => dispatch(removeUnit(id))}>
              <CloseIcon />
            </Button>
          }
        />
      )}
      <Collapse in={!ui.viewMode || expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {!ui.editMode && (
            <>
              <StatBlock stats={unit.stats} />
              <SpecialRules rules={unit.rules} />
            </>
          )}
          {!ui.viewMode && (
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
}

export default Unit;
