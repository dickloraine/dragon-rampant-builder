import * as yup from 'yup';
import { FantasticalRule } from '../../../store/types';
import { unitAdjustStatsSchema, unitSetStatsSchema } from '../UnitsPanel/unitSchemas';

export const fantasticalRuleSchema = yup.object<FantasticalRule>({
  name: yup.string().min(1).required(),
  points: yup.number().integer().min(0).required(),
  exclude_units: yup.array().of(yup.string()),
  description: yup.string().required(),
  short: yup.string(),
  setStats: unitSetStatsSchema,
  adjustStats: unitAdjustStatsSchema,
});

export const emptyFantasticalRule: FantasticalRule = {
  name: 'Name',
  points: 0,
  exclude_units: [],
  description: 'Description',
};
