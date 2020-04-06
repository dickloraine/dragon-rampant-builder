import data, { CompactUnit, Unit } from 'store/data';

const buildUnit = (unitToBuild: CompactUnit | Unit) => {
  const unitData = data.unitData[unitToBuild.name];

  let unit: Unit = {
    ...unitData,
    customName: unitToBuild.customName || '',
    options: [...unitToBuild.options],
    fantasticalRules: [...unitToBuild.fantasticalRules],
  };

  let points = unitData.points;
  for (const opt of unit.options) {
    const option = unitData.options[opt];
    points += option.points || 0;

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
        unit.rules = unit.rules.filter((val) => val !== rule);
      }
    }
  }
  for (const fant of unit.fantasticalRules) {
    const fantasticRule = data.fantasticalRulesData[fant];
    points += fantasticRule.points;
    unit.rules = [...unit.rules, fantasticRule.name];
  }

  unit = { ...unit, points: points };
  return unit;
};

export default buildUnit;
