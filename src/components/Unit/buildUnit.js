import getData from 'store/getData';

const buildUnit = unit => {
  const data = getData();
  const unitData = data.unitData[unit.name];

  unit = {
    ...unitData,
    customName: unit.customName || '',
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
  return unit;
};

export default buildUnit;
