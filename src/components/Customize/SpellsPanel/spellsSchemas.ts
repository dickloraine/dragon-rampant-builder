import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { Spell } from '../../../store/types';
import validName from '../common/validName';

export const spellSchema: ObjectSchema<Spell> = yup.object({
  name: validName,
  school: yup.string(),
  difficulty: yup.number().integer().min(2).max(12).required(),
  target: yup.string().required(),
  duration: yup.string().required(),
  effect: yup.string().required(),
  short: yup.string(),
});

export const emptySpell: Spell = {
  name: '',
  difficulty: 7,
  target: '',
  duration: '',
  effect: '',
};
