import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CloseIcon from '@material-ui/icons/Close';
import { Box, Button, CardHeader } from '@material-ui/core';
import UnitSelector from './UnitSelector';
import Options from './Options';
import FantasticalRules from './FantasticalRules';
import StatBlock from './StatBlock';
import SpecialRules from './SpecialRules';

function Unit({ id, unit, updateUnit, data, setUnit, removeUnit, ui }) {
  const changeUnit = unitName => setUnit(id, unitName);

  const handleChange = unit => {
    const unitData = data.unitData[unit.name];
    unit = {
      ...unitData,
      options: [...unit.options],
      fantasticalRules: [...unit.fantasticalRules]
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
    updateUnit(id, { ...unit });
  };

  return (
    <Card variant="outlined" style={{ marginBottom: 25, maxWidth: 400, width: '100%' }}>
      <CardHeader
        title={
          <UnitSelector
            name={unit.name}
            onClose={changeUnit}
            options={data.unitNames}
            points={unit.points}
          />
        }
        action={
          <Button onClick={() => removeUnit(id)}>
            <CloseIcon />
          </Button>
        }
      />
      <CardContent>
        {!ui.editMode && (
          <>
            <StatBlock stats={unit.stats} />
            <SpecialRules rules={unit.rules} />
          </>
        )}
        {!ui.viewMode && (
          <>
            <Options
              onChange={handleChange}
              optionsData={data.unitData[unit.name].options}
              unit={unit}
            />
            <Box>
              <FantasticalRules
                onChange={handleChange}
                unitData={data.unitData[unit.name]}
                fantasticalRulesData={data.fantasticalRulesData}
                unit={unit}
              />
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default Unit;
