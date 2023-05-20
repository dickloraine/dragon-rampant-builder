import { Rules } from '../../store/types';

export const rulesData: Rules = {
  Chariots: {
    name: 'Chariots',
    description: 'May not enter rough terrain. Armor is increased to 4.',
    short: 'May not enter rough terrain. Armor 4.',
  },
  'Counter-charge': {
    name: 'Counter-charge',
    description:
      "When an enemy has successfully diced to Attack this unit,  but before it moves, this unit may test for a counter-charge. Test for an Attack at 7+. If it succeeds, the two units meet a proportionate movement distance between their start positions, and both count as Attacking. If it fails, it stands in place for the enemy's charge. Counter-charge may not be used if the unit is Battered.",
    short: 'On 7+ move half towards attacker and count as attacking too.',
  },
  'Counter-charge vs. foot': {
    name: 'Counter-charge vs. foot',
    description:
      "When an enemy has successfully diced to Attack this unit,  but before it moves, this unit may test for a counter-charge. Test for an Attack at 7+. If it succeeds, the two units meet a proportionate movement distance between their start positions, and both count as Attacking. If it fails, it stands in place for the enemy's charge. Counter-charge may not be used if the unit is Battered.",
    short: 'On 7+ move half towards attacker and count as attacking too.',
  },
  Evade: {
    name: 'Evade',
    description:
      'When an enemy has successfully diced to Attack this unit, but before it moves, this unit may test to Evade at 7+. If it succeeds, it immediately carries out a Skirmish action targeting the Attacking unit only, may not move closer to the Attacking unit, and must avoid other units by 3" as usual; casualties inflicted in the Skirmish action cause a Courage test only at the end of the Attack. The charging unit then moves its full charge distance following the Evading unit; if it makes contact it Attacks with the Evading unit reducing its Armour to 1, and if it cannot contact it must move as close as possible. If the Evade test fails, the unit stands in place and awaits attack without shooting or moving, and its Armour drops to 1 during the Attack. Evade cannot be used if the unit is Battered.',
    short:
      'If attacked: On 7+ take a skirmish action against the attacker. If still reached, -1 armor. If failed, armor 1.',
  },
  'Fleet Footed': {
    name: 'Fleet Footed',
    description: 'This unit does not halve its movement in rough terrain.',
    short: 'Move normally through rough terrain.',
  },
  'Hard to target': {
    name: 'Hard to target',
    description:
      'Scouts count as Armour 2 versus Shooting and may only be targeted within 12".',
    short: 'Count as Armour 2 versus Shooting and may only be targeted within 12".',
  },
  Ranger: {
    name: 'Ranger',
    description:
      'This unit uses its normal Attack/Defence/Armour profile when fighting in rough terrain.',
    short:
      'Use the normal Attack/Defence/armor profile when fighting in rough terrain.',
  },
  Skirmish: {
    name: 'Skirmish',
    description:
      'As an ordered activation, successful on a 7+, the unit may choose to make a half move and Shoot either before or after this movement takes place. All models in the unit Shoot with –1 to their dice scores.',
    short: 'On 7+ half move and shoot. Shoot value -1.',
  },
  'Wall of Spears': {
    name: 'Wall of Spears',
    description:
      'There needs to be 6 or more Strength Points in unit to form a Wall of Spears. On a Move order, form the unit into base-to-base contact; a Wall of Spears cannot form in rough terrain or in cover, and it cannot move in this formation. Wall of Spears increases their Armour by 1 point against Attacks but not Shooting (to 4 for Heavy Foot). If the unit becomes Battered or must retreat while in a Wall of Spears, the formation is broken.',
    short:
      'Needs 6 or more Strength Points. On a Move order, form the unit into base-to-base contact; increase Armor by 1 against Attacks.',
  },
  'Wild Charge': {
    name: 'Wild Charge',
    description:
      'If the unit is within Attack range of an enemy unit, you must test to activate an Attack; this is the only order the unit can be given. Wild Charge may not be used if the unit is Battered.',
    short: 'Unit must attack if able.',
  },
};
