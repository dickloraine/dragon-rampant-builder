import unitData from 'assets/dragonRampantData/units.json';
import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import rulesData from 'assets/dragonRampantData/rules.json';
import spellData from 'assets/dragonRampantData/spells.json';

const getData = (type = null) => {
  const data = {
    unitData: unitData,
    unitNames: Object.keys(unitData).slice(1),
    fantasticalRulesData: fantasticalRulesData,
    rulesData: rulesData,
    spellData: spellData
  };
  return type ? data[type] : data;
};

export default getData;
