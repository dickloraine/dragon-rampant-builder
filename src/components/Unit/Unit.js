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
import { useData } from '../App';

const buildUnit = (name, customName, options, fantasticalRules, data) => {
  const unitData = data.unitData[name];
  let unit = {
    ...unitData,
    customName: customName || '',
    options: [...options],
    fantasticalRules: [...fantasticalRules]
  };

  let points = unitData.points;
  for (let option of unit.options) {
    option = unitData.options[option];
    points += option.points;

    if (option.setStats) {
      for (const [key, val] of Object.entries(option.setStats)) {
        unit = { ...unit, stats: { ...unit.stats, [key]: val } };
      }
    }

    if (option.add) {
      for (const rule of option.add) {
        unit.rules = [...unit.rules, rule];
      }
    }

    if (option.remove) {
      for (const rule of option.remove) {
        unit.rules = unit.rules.filter(val => val !== rule);
      }
    }
  }
  for (let fant of unit.fantasticalRules) {
    fant = data.fantasticalRulesData[fant];
    points += fant.points;
    unit.rules = [...unit.rules, fant.name];
  }

  unit = { ...unit, points: points };
  return unit;
};

function Unit({ id, unit, roster, updateRoster, setUnit, removeUnit, ui }) {
  const data = useData();
  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => setExpanded(!expanded);

  const changeUnit = unitName => setUnit(id, unitName);

  const updateUnit = newAttributes => {
    updateRoster({
      units: {
        ...roster.units,
        [id]: { ...roster.units[id], ...newAttributes }
      }
    });
  };

  const handleChange = unit => {
    unit = buildUnit(
      unit.name,
      unit.customName,
      unit.options,
      unit.fantasticalRules,
      data
    );
    updateUnit({ ...unit });
  };

  return (
    <Card style={{ marginBottom: 25, maxWidth: 400, width: '100%' }}>
      {!ui.viewMode && (
        <CardHeader
          title={
            <UnitSelector unit={unit} onClose={changeUnit} options={data.unitNames} />
          }
          action={
            <Button onClick={() => removeUnit(id)}>
              <CloseIcon />
            </Button>
          }
        />
      )}
      {ui.viewMode && (
        <CardHeader
          title={
            <>
              <Typography variant="h5">
                <Chip label={unit.points} color="primary" />
                &nbsp;&nbsp;
                {unit.customName ? unit.customName : unit.name}
              </Typography>
              {unit.customName && expanded && (
                <Typography style={{ marginLeft: 45, marginBottom: -25 }}>
                  {unit.name}
                </Typography>
              )}
              {unit.customName && !expanded && (
                <Typography style={{ marginLeft: 45 }}>{unit.name}</Typography>
              )}
            </>
          }
          action={<ExpandIcon expanded={expanded} onClick={handleExpandClick} />}
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
              <Actions
                id={id}
                unit={unit}
                roster={roster}
                updateRoster={updateRoster}
                updateUnit={updateUnit}
              />
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Unit;
export { buildUnit };
