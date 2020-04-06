import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import rulesData from 'assets/dragonRampantData/rules.json';
import spellData from 'assets/dragonRampantData/spells.json';
import unitData from 'assets/dragonRampantData/units.json';

export type UnitStats = {
  attack: number;
  move: number;
  shoot: number;
  courage: number;
  armour: number;
  attackValue: number;
  defenceValue: number;
  shootValue: number;
  shootRange: number | string;
  movement: number;
  strengthPoints: number;
};

export type UnitOption = {
  points?: number;
  summary?: string;
  remove?: string[];
  add?: string[];
  setStats?: Partial<UnitStats>;
};
type UnitOptions = { [optionName: string]: UnitOption };

export type Unit = {
  name: string;
  type: string;
  points: number;
  stats: UnitStats;
  rules: string[];
  options: string[];
  fantasticalRules: string[];
  customName?: string;
};

export type DataUnit = {
  name: string;
  type: string;
  points: number;
  stats: UnitStats;
  rules: string[];
  options: UnitOptions;
  fantasticalRules: string[];
  customName?: string;
};

export type CompactUnit = {
  name: string;
  options: string[];
  fantasticalRules: string[];
  customName?: string;
};

export type fantasticalRule = {
  name: string;
  points: number;
};

export type Spell = {
  name: string;
  difficulty: number;
  target: string;
  duration: string;
  effect: string;
};

type Units = { [name: string]: DataUnit };
type FantasticalRules = { [name: string]: fantasticalRule };
type Rules = { [name: string]: string };
type Spells = { [name: string]: Spell };

export type Data = {
  unitData: Units;
  unitNames: string[];
  fantasticalRulesData: FantasticalRules;
  rulesData: Rules;
  spellData: Spells;
};

const data: Data = {
  unitData: unitData,
  unitNames: Object.keys(unitData).slice(1),
  fantasticalRulesData: fantasticalRulesData,
  rulesData: rulesData,
  spellData: spellData,
};

export default data;
