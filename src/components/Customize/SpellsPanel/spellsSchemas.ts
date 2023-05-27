import * as yup from 'yup';
import { Spell } from '../../../store/types';
import validName from '../common/validName';

export const spellSchema = yup.object<Spell>({
  name: validName,
  difficulty: yup.number().integer().min(2).max(12),
  target: yup.string(),
  duration: yup.string(),
  effect: yup.string(),
  short: yup.string(),
});

export const emptySpell: Spell = {
  name: '',
  difficulty: 7,
  target: '',
  duration: '',
  effect: '',
};
