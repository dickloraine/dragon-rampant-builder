import * as yup from 'yup';
import { Spell } from '../../../store/types';

export const spellSchema = yup.object<Spell>({
  name: yup.string().min(1).required(),
  difficulty: yup.number().integer().min(2).max(12),
  target: yup.string(),
  duration: yup.string(),
  effect: yup.string(),
  short: yup.string(),
});

export const emptySpell: Spell = {
  name: 'Name',
  difficulty: 7,
  target: 'Target',
  duration: 'Duration',
  effect: 'Effekt',
};
