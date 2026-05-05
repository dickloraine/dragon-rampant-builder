import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { FantasticalRule } from '../../../store/types';
import { unitAdjustStatsSchema, unitSetStatsSchema } from '../UnitsPanel/unitSchemas';
import validName from '../common/validName';

export const fantasticalRuleSchema: ObjectSchema<FantasticalRule> = yup.object({
  name: validName,
  points: yup.number().integer().min(0).required(),
  exclude_units: yup.array().of(yup.string().required()).required(),
  description: yup.string().required(),
  short: yup.string(),
  leaderOnly: yup.boolean(),
  setStats: unitSetStatsSchema,
  adjustStats: unitAdjustStatsSchema,
  disabledBy: yup.array().of(yup.string().required()),
  enabledBy: yup.array().of(yup.string().required()),
});

export const emptyFantasticalRule: FantasticalRule = {
  name: '',
  points: 0,
  exclude_units: [],
  description: '',
};
