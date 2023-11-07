import { Spells } from '../../store/types';

export const spells: Spells = {
  'Almighty Prod!': {
    name: 'Almighty Prod!',
    difficulty: 6,
    target: 'Friendly unit within 18"',
    duration:
      "Until start of player's next activation phase (unless used before that).",
    effect:
      'If the target unit fails its next Ordered Activation roll it may immediately re-roll the test (once). The spell’s effect ends immediately whether successful or not.',
    short: 'Target unit may re-roll next Ordered Activation.',
  },
  'Banish Fear!': {
    name: 'Banish Fear!',
    difficulty: 6,
    target: 'Friendly unit within 18"',
    duration: "Until the start of the player's next activation phase.",
    effect: 'The target unit may re-roll all failed Courage tests (once per test).',
    short: 'Target unit may re-roll all failed Courage tests.',
  },
  'Heal Thee!': {
    name: 'Heal Thee!',
    difficulty: 7,
    target: 'Friendly unit within 18"',
    duration: '1 immediate action',
    effect:
      "Restore 1 Strength Point to a friendly unit within range. Strength may not rise above unit's original value.",
    short: 'Restore 1 Strength Point to a friendly unit.',
  },
  'Befuddle Thee!': {
    name: 'Befuddle Thee!',
    difficulty: 7,
    target: 'Enemy unit within 18"',
    duration: 'Until the unit Rallies',
    effect: 'Automatically Batters an Unbattered unit within range.',
    short: 'Automatically Batters an Unbattered unit.',
  },
  'Bog Thee!': {
    name: 'Bog Thee!',
    difficulty: 7,
    target: 'Enemy unit within 18"',
    duration: "Until the end of the target's next activation phase.",
    effect:
      "A quagmire springs up around the target unit; any movement or combat it is involved in counts as in rough terrain. Movement of other units is not affected. There is no effect if the target unit is in or moves into 'real' rough terrain.",
    short: 'Target counts as in rough terrain.',
  },
  "Dragon's Breath!": {
    name: "Dragon's Breath!",
    difficulty: 7,
    target: 'Self or any unit within 18"',
    duration: "Until the end of the target's next activation phase.",
    effect:
      "A magical wall of mist or fog is thrown up around the target unit; it may not Shoot or be Shot at, but may still be targeted by spells and moves as normal (the Dragon's Breath moves with it).",
    short:
      'Target may not Shoot or be Shot at, but may still be targeted by spells and moves as normal.',
  },
  'Power Bolt!': {
    name: 'Power Bolt!',
    difficulty: 7,
    target: 'Enemy unit within 18"',
    duration: '1 immediate Shoot action',
    effect:
      'A magical attack of flame, electric, poison, or whatever else suits your Spellcaster. This works exactly as a Shoot action, with a Shoot Value of 4+ (suffering –1 to dice rolls for targets over 12" away).',
    short: 'Shoot attack with Shoot Value of 4+ (-1 for targets over 12").',
  },
  'Sharper Blades!': {
    name: 'Sharper Blades!',
    difficulty: 7,
    target: 'Self or friendly unit within 18"',
    duration: "Until the start of the player's next activation phase.",
    effect:
      'The target unit may re-roll all failed Attack or Defence dice (once per Attack).',
    short: 'The target unit may re-roll all failed Attack or Defence dice.',
  },
  'Stronger Shields!': {
    name: 'Stronger Shields!',
    difficulty: 7,
    target: 'Self or friendly unit within 18"',
    duration: "Until the start of the player's next activation phase.",
    effect: "The target unit's Armor increases by 1.",
    short: 'Armor +1.',
  },
  'Sod-off Spell!': {
    name: 'Sod-off Spell!',
    difficulty: 8,
    target: 'One bespelled unit within 18"',
    duration: 'Immediate cancellation',
    effect:
      "This spell cancels out the effect of any spells currently affecting one unit with a duration of 'Until the start of the player's next activation phase' or 'Until the unit Rallies'. If successful, the effect of all applicable spells on the targeted units are ended immediately. The spellcaster cannot target itself.",
    short: 'Cancels out the effect of any spells currently affecting one unit.',
  },
};
