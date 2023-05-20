import store from '../../store/store';
import { CompactUnit, Unit, UnitStats } from '../../store/types';

const buildUnit = (unitToBuild: CompactUnit | Unit) => {
  const unitData = store.getState().data.unitData[unitToBuild.name];
  const fantasticalRulesData = store.getState().data.fantasticalRulesData;

  let unit: Unit = {
    ...unitData,
    customName: unitToBuild.customName || '',
    options: [...unitToBuild.options],
    fantasticalRules: [...unitToBuild.fantasticalRules],
    spells: unitToBuild.spells || [],
    trait: unitToBuild.trait,
  };

  let points = unitData.points;
  let statsToAdjust: Partial<UnitStats> = {};
  for (const opt of unit.options) {
    const option = unitData.options[opt];
    points += option.points || 0;

    if (option.setStats) {
      for (const [key, val] of Object.entries(option.setStats)) {
        unit = { ...unit, stats: { ...unit.stats, [key]: val } };
      }
    }

    if (option.adjustStats) {
      statsToAdjust = { ...statsToAdjust, ...option.adjustStats };
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

  for (const rule of unit.fantasticalRules) {
    const fantasticalRule = fantasticalRulesData[rule];
    points += fantasticalRule.points;
    unit.rules = [...unit.rules, fantasticalRule.name];

    if (fantasticalRule.setStats) {
      for (const [key, val] of Object.entries(fantasticalRule.setStats)) {
        unit = { ...unit, stats: { ...unit.stats, [key]: val } };
      }
    }

    if (fantasticalRule.adjustStats) {
      statsToAdjust = { ...statsToAdjust, ...fantasticalRule.adjustStats };
    }
  }

  for (const [key, val] of Object.entries(statsToAdjust)) {
    const k = key as keyof UnitStats;
    const oldVal = unit.stats[k];
    if (val && typeof val == 'number' && typeof oldVal == 'number') {
      unit = { ...unit, stats: { ...unit.stats, [key]: oldVal + val } };
    }
  }

  if (!unit.fantasticalRules.some((x) => x === 'Wizardlings'))
    unit = { ...unit, spells: [] };

  if (!unit.fantasticalRules.some((x) => x === 'Leader'))
    unit = { ...unit, trait: undefined };

  if (unit.rules.length > 0) {
    unit = { ...unit, rules: [...unit.rules].sort() };
  }
  unit = { ...unit, points: points };
  return unit;
};

export default buildUnit;
