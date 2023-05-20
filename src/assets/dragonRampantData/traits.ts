import { Traits } from '../../store/types';

export const traitData: Traits = {
  Unworthy: {
    name: 'Unworthy',
    roll: 3,
    description:
      "After deployment and whether your Leader is on the table or not, roll one die for each of your units (except Leader's). On the roll of a 1, that unit deserts and is immediately removed from play (not counting as casualties).",
    short:
      'Roll one die for each of your units. On a 1 that unit is removed from play.',
  },
  Insipid: {
    name: 'Insipid',
    roll: 4,
    description: 'Offers units within 12" no Courage bonus.',
    short: 'Offers units within 12" no Courage bonus.',
  },
  Cowardly: {
    name: 'Cowardly',
    roll: 5,
    description: "Leader's unit may not be given an Attack order.",
    short: "Leader's unit may not be given an Attack order.",
  },
  Weakling: {
    name: 'Weakling',
    roll: 6,
    description:
      "Leader's unit rolls 1 fighting die less in all Attacks and when Shooting (therefore rolling either 11 or 5 dice).",
    short: "Leader's unit rolls 1 fighting die less",
  },
  Brutal: {
    name: 'Brutal',
    roll: 7,
    description:
      'Any units within 12" of your Leader model may automatically pass failed Rally tests by removing one Strength Point (a sacrificed friend works wonders for morale...).',
    short:
      'Any units within 12" may automatically pass failed Rally tests by removing one Strength Point.',
  },
  Wise: {
    name: 'Wise',
    roll: 8,
    description:
      'Renowned for strategic insight, you may add or subtract 1 from your final total (whichever you prefer) when dicing to decide attacker/defender.',
    short:
      'You may add or subtract 1 from your final total when dicing to decide attacker/defender.',
  },
  Brave: {
    name: 'Brave',
    roll: 9,
    description: "Leader's unit is not affected by Fear.",
    short: "Leader's unit is not affected by Fear.",
  },
  Strong: {
    name: 'Strong',
    roll: 10,
    description:
      "During Attacks (whether attacking or defending), Leader's unit may reroll one failed hit die.",
    short: "During Attacks, Leader's unit may reroll one failed hit die.",
  },
  Commanding: {
    name: 'Commanding',
    roll: 11,
    description:
      'You may reroll (once) a failed Move, Attack, or Shoot order within 12" of your Leader\'s model, once per turn.',
    short:
      'You may reroll a failed Move, Attack, or Shoot order within 12" of your Leader\'s model.',
  },
  Goader: {
    name: 'Goader',
    roll: 12,
    description:
      'Each turn, one unit within 12" of your Leader model may automatically pass a Move activation test without needing to roll dice.',
    short:
      'One unit within 12" of your Leader model may automatically pass a Move activation test.',
  },
  Boneshaker: {
    name: 'Goader',
    roll: 13,
    description:
      'Each turn, one unit within 12" of your Leader model may automatically pass an Attack activation test without needing to roll dice (but not a Wild Charge).',
    short:
      'One unit within 12" of your Leader model may automatically pass an Attack activation test.',
  },
  'Sky Darkener': {
    name: 'Sky Darkener',
    roll: 14,
    description:
      'Each turn, one unit within 12" of your Leader model may automatically pass a Shoot activation test without needing to roll dice.',
    short:
      'One unit within 12" of your Leader model may automatically pass a Shoot activation test.',
  },
  Formidable: {
    name: 'Formidable',
    roll: 15,
    description:
      "During Attacks (whether attacking or defending), Leader's unit may reroll up to two failed hit dice.",
    short: "During Attacks, Leader's unit may reroll up to two failed hit dice.",
  },
  Patient: {
    name: 'Patient',
    roll: 16,
    description:
      'Each turn, one unit within 12" of your Leader model may choose to ignore a compulsory Wild Charge, and may instead take an ordered action in your ordered activation phase.',
    short:
      'One unit within 12" of your Leader model may choose to ignore a compulsory Wild Charge, and take an ordered action.',
  },
  Charmed: {
    name: 'Charmed',
    roll: 17,
    description: "Leader's unit may not be targeted by enemy spells.",
    short: "Leader's unit may not be targeted by enemy spells.",
  },
  '18/00 Strength!': {
    name: '18/00 Strength!',
    roll: 18,
    description:
      "During Attacks (whether attacking or defending), Leader's unit may reroll up to three failed hit dice.",
    short: "During Attacks, Leader's unit may reroll up to three failed hit dice.",
  },
};
