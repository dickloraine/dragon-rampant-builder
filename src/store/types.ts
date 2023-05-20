import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

export type { AppDispatch, RootState } from './store';

export type UnitStats = {
  attack: number;
  move: number;
  shoot: number;
  courage: number;
  armor: number;
  attackValue: number;
  defenceValue: number;
  shootValue: number;
  shootRange: number | string;
  movement: number;
  strengthPoints: number;
};

export type UnitOption = {
  name: string;
  description: string;
  points?: number;
  short?: string;
  remove?: string[];
  add?: string[];
  setStats?: Partial<UnitStats>;
  adjustStats?: Partial<UnitStats>;
  disabledBy?: string[];
  enabledBy?: string[];
};

export type UnitOptions = { [optionName: string]: UnitOption };

interface BaseUnit {
  name: string;
  type: string;
  points: number;
  stats: UnitStats;
  rules: string[];
  fantasticalRules: string[];
  customName?: string;
  spells?: string[];
  trait?: string;
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
  spells?: string[];
  trait?: string;
}

export type FantasticalRule = {
  name: string;
  points: number;
  exclude_units: string[];
  description: string;
  short?: string;
  setStats?: Partial<UnitStats>;
  adjustStats?: Partial<UnitStats>;
};

export type Rule = {
  name: string;
  description: string;
  short?: string;
};

export type Spell = {
  name: string;
  difficulty: number;
  target: string;
  duration: string;
  effect: string;
  short?: string;
};

export type Trait = {
  name: string;
  roll: number;
  description: string;
  short?: string;
};

export type Units = { [name: string]: DataUnit };
export type FantasticalRules = { [name: string]: FantasticalRule };
export type Rules = { [name: string]: Rule };
export type Spells = { [name: string]: Spell };
export type Traits = { [name: string]: Trait };

export type CustomDataElement = DataUnit | FantasticalRule | Rule | Spell;

export interface CustomData {
  unitData: Units;
  fantasticalRulesData: FantasticalRules;
  rulesData: Rules;
  spells: Spells;
}

export interface Data extends CustomData {
  traits: Traits;
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

export type RosterUnits = Unit[];

export type RosterState = {
  name: string;
  units: RosterUnits;
};

export type CompactRosterState = {
  name: string;
  units: CompactUnit[];
};

export type UIState = {
  viewMode: boolean;
  editMode: boolean;
  inlineRules: boolean;
  darkMode: null | boolean;
  validationExpanded: boolean;
  rulesSummaryExpanded: boolean;
  campaignExpanded: boolean;
  powersExpanded: boolean;
  statisticsExpanded: boolean;
};
