import * as yup from 'yup';
import { FantasticalRule } from '../../../store/types';
import { unitAdjustStatsSchema, unitSetStatsSchema } from '../UnitsPanel/unitSchemas';
import validName from '../common/validName';

export const fantasticalRuleSchema = yup.object<FantasticalRule>({
  name: validName,
  points: yup.number().integer().min(0).required(),
  exclude_units: yup.array().of(yup.string()),
  description: yup.string().required(),
  short: yup.string(),
  setStats: unitSetStatsSchema,
  adjustStats: unitAdjustStatsSchema,
});

export const emptyFantasticalRule: FantasticalRule = {
  name: '',
  points: 0,
  exclude_units: [],
  description: '',
};
