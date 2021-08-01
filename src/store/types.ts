import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

export type { AppDispatch, RootState } from './store';

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

interface BaseUnit {
  name: string;
  type: string;
  points: number;
  stats: UnitStats;
  rules: string[];
  fantasticalRules: string[];
  customName?: string;
}

export interface Unit extends BaseUnit {
  options: string[];
}

export interface DataUnit extends BaseUnit {
  options: UnitOptions;
}

export interface CompactUnit {
  name: string;
  options: string[];
  fantasticalRules: string[];
  customName?: string;
}

export type FantasticalRule = {
  name: string;
  points: number;
  exclude_units: string[];
  description: string;
};

export type Rule = {
  name: string;
  description: string;
};

export type Spell = {
  name: string;
  difficulty: number;
  target: string;
  duration: string;
  effect: string;
};

type Units = { [name: string]: DataUnit };
type FantasticalRules = { [name: string]: FantasticalRule };
type Rules = { [name: string]: Rule };
type Spells = { [name: string]: Spell };

export type CustomDataElement = DataUnit | FantasticalRule | Rule | Spell;

export interface CustomData {
  unitData: Units;
  fantasticalRulesData: FantasticalRules;
  rulesData: Rules;
  spellData: Spells;
}

export interface Data extends CustomData {
  customData: CustomData;
}

export type Thunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type Severity = 'error' | 'info' | 'success' | 'warning';

export type AppState = {
  feedback: {
    open: boolean;
    message: string;
    severity: Severity;
  };
  inputUpdate: boolean;
  autoDarkMode: boolean;
  customizeMode: boolean;
};

export type RosterUnits = { [id: number]: Unit };

export type RosterState = {
  name: string;
  nextID: number;
  units: RosterUnits;
  unitOrder: number[];
};

export type CompactRosterState = {
  name: string;
  nextID: number;
  units: { [id: number]: CompactUnit };
  unitOrder: number[];
};

export type UIState = {
  viewMode: boolean;
  editMode: boolean;
  darkMode: null | boolean;
  validationExpanded: boolean;
  rulesSummaryExpanded: boolean;
  spellsExpanded: boolean;
  statisticsExpanded: boolean;
};
