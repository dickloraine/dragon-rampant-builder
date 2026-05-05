import { FantasticalRules } from '../../../store/types';

export const fantasticalRulesData: FantasticalRules = {
  Leader: {
    name: 'Leader',
    points: 0,
    exclude_units: [],
    disabledBy: ['Concealment', 'Exploder', 'Well led', 'Were-creature'],
    description:
      'Each turn, you may reroll one failed Move, Attack, or Shoot test (but no other tests) within 12” of your Leader’s model unless the Leader is Battered. This may be applied to the Leader’s own unit. Leaders give +1 to your total for all Courage tests for units within 12” of the Leader model (including the Leader’s unit) unless the Leader is Battered. ',
    short: 'One activation reroll per turn within 12"; +1 Courage within 12".',
  },
  '18/00 Strength': {
    name: '18/00 Strength',
    points: 4,
    exclude_units: [
      'Heavy Riders',
      'Light Riders',
      'Heavy Foot',
      'Light Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    description:
      'The unit may reroll up to three failed hit dice when Attacking or Defending (works when Battered). Cannot combine with Champion (Hewing). Only one 18/00 or 18 Strength Strength unit may be included per complete 24 army points of the Warband. If destroyed or routed the opponent gains +1 Glory.',
    short: 'Reroll up to three failed hit dice.',
  },
  '18 Strength': {
    name: '18 Strength',
    points: 3,
    exclude_units: [
      'Heavy Riders',
      'Light Riders',
      'Heavy Foot',
      'Light Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    description:
      'The unit may reroll up to two failed hit dice when Attacking or Defending (works when Battered). Cannot combine with Champion (Hewing). Only one 18/00 Strength or 18 Strength unit may be included per complete 24 army points of the Warband.',
    short: 'Reroll up to two failed hit dice.',
  },
  Amphibious: {
    name: 'Amphibious',
    points: 1,
    exclude_units: [],
    description:
      "Units count as Fast when Attacking or Moving in water-based terrain (unless they leave the terrain as part of the movement). In water-based terrain they gain the Ranger and Fleet Footed special rules if they don't already have them. They may cross impassable water-based terrain features treating them as rough terrain (without Fleet Footed benefit).",
    short: 'Better movement and special rules in water-based terrain.',
  },
  Berserk: {
    name: 'Berserk',
    points: 2,
    exclude_units: [
      'Elite Riders',
      'Heavy Riders',
      'Light Riders',
      'Greater Warbeasts',
      'Elite Foot',
      'Heavy Foot',
      'Light Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
    ],
    disabledBy: ['Venomous', 'Bloodthirsty'],
    description:
      'Any Attack die that rolls a 6 counts as a hit and is rerolled; rerolled hits also count and any further 6s are rerolled repeatedly. Berserk disappears when the unit is at or below half its starting Strength Points. Cannot be combined with Venomous or Bloodthirsty.',
    short: 'Exploding attack dice on 6s (chain rerolls); stops at half-strength.',
  },
  Bodkins: {
    name: 'Bodkins',
    points: 3,
    exclude_units: [],
    description:
      'For units with a Shoot Value: any Shooting die that rolls a 6 causes 2 hits instead of 1, unless the shot suffers the -1 range modifier.',
    short: 'Shooting 6s count as 2 hits unless suffering the -1 range modifier.',
  },
  Brutal: {
    name: 'Brutal',
    points: 1,
    exclude_units: [],
    leaderOnly: true,
    description:
      'Leader-only upgrade. Friendly units within 12" of this Leader may automatically pass a failed Rally activation by removing 1 Strength Point. Brutality cannot be used if the Leader is Battered.',
    short: 'Units within 12" pass failed rally by removing 1 Strength point.',
  },
  Burrower: {
    name: 'Burrower',
    points: 2,
    exclude_units: [
      'Elite Riders',
      'Heavy Riders',
      'Light Riders',
      'Elite Foot',
      'Heavy Foot',
      'Light Foot',
      'Bellicose Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    enabledBy: ['Undead'],
    description:
      "Available to certain burrowing/tunnelling units. Burrowers start off-table in reserve and must roll to arrive; from turn 3 onwards they may attempt to activate off-table to enter. They cannot be deployed at game start and do not count as casualties or for victory until they appear. Cannot be combined with Sneakers. Leaders cannot be Burrowers; a Leader's reroll cannot be used on a Burrower's arrival roll.",
    short:
      'Start off-table and attempt to emerge later; reserve/deployment special rules.',
  },
  Cannibalistic: {
    name: 'Cannibalistic',
    points: 3,
    exclude_units: [],
    description:
      'When this unit inflicts any Strength Point loss on an enemy during an Attack, the Cannibalistic unit regains 1 Strength Point it has lost (up to its starting value).',
    short:
      'Regain 1 Strength Point each time the unit inflicts Strength Point loss (capped at start value).',
  },
  'Champion (Hewing)': {
    name: 'Champion (Hewing)',
    points: 1,
    exclude_units: ['Greater Warbeasts', 'Lesser Warbeasts'],
    description:
      'Reroll one failed hit die when Attacking or Defending, even when Battered; cannot combine with 18/00 Strength). The Champion model should be the final model removed from the unit.',
    short: 'Reroll one failed hit die when Attacking or Defending',
  },
  'Champion (Eagle-Eyed)': {
    name: 'Champion (Eagle-Eyed)',
    points: 1,
    exclude_units: ['Greater Warbeasts', 'Lesser Warbeasts'],
    description:
      'Reroll one failed hit die when Shooting. The Champion model should be the final model removed from the unit.',
    short: 'Reroll one failed hit die when Shooting.',
  },
  Chaotic: {
    name: 'Chaotic',
    points: 1,
    exclude_units: [],
    description:
      'For units that use two six-sided dice normally: replace those rolls with a single d12 for those outcomes, making results more random.',
    short: "Replace 2d6 rolls with 1d12 for that unit's applicable rolls.",
  },
  'Cleric - No undead': {
    name: 'Cleric - No undead',
    points: 2,
    exclude_units: [
      'Light Riders',
      'Greater Warbeasts',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Scouts',
      'Ravenous Hordes',
    ],
    description:
      'Cleric units count as Courageous against any Warband and vs Undead count as a Champion (choose Hewing or Eagle-Eyed). If an opponent destroys or routs this unit with an Undead unit they gain +1 Glory. Cost varies by how many Undead army points the opponent has: no Undead = 2 points, up to 50% Undead = 3 points, 50%+ Undead = 4 points.',
    short: 'Faithful unit; Courageous always, extra anti-Undead benefits.',
  },
  'Cleric - some undead': {
    name: 'Cleric - some undead',
    points: 3,
    exclude_units: [
      'Light Riders',
      'Greater Warbeasts',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Scouts',
      'Ravenous Hordes',
    ],
    description:
      'Cleric units count as Courageous against any Warband and vs Undead count as a Champion (choose Hewing or Eagle-Eyed). If an opponent destroys or routs this unit with an Undead unit they gain +1 Glory. Cost varies by how many Undead army points the opponent has: no Undead = 2 points, up to 50% Undead = 3 points, 50%+ Undead = 4 points.',
    short: 'Faithful unit; Courageous always, extra anti-Undead benefits.',
  },
  'Cleric - most undead': {
    name: 'Cleric - most undead',
    points: 4,
    exclude_units: [
      'Light Riders',
      'Greater Warbeasts',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Scouts',
      'Ravenous Hordes',
    ],
    description:
      'Cleric units count as Courageous against any Warband and vs Undead count as a Champion (choose Hewing or Eagle-Eyed). If an opponent destroys or routs this unit with an Undead unit they gain +1 Glory. Cost varies by how many Undead army points the opponent has: no Undead = 2 points, up to 50% Undead = 3 points, 50%+ Undead = 4 points.',
    short: 'Faithful unit; Courageous always, extra anti-Undead benefits.',
  },
  'Slayer - none': {
    name: 'Slayer - none',
    points: 2,
    exclude_units: ['Ravenous Hordes'],
    description:
      "A Slayer is a Cleric-like upgrade targeted at a specific race or troop type rather than Undead. Effects and variable cost match Cleric. If destroyed or routed by their target type, the opponent gains +1 Glory. A Warband including a Slayer cannot include the Slayer's target type.",
    short: 'Cleric-style bonus but aimed at a chosen target race/type; variable cost.',
  },
  'Slayer - some': {
    name: 'Slayer-some',
    points: 3,
    exclude_units: ['Ravenous Hordes'],
    description:
      "A Slayer is a Cleric-like upgrade targeted at a specific race or troop type rather than Undead. Effects and variable cost match Cleric. If destroyed or routed by their target type, the opponent gains +1 Glory. A Warband including a Slayer cannot include the Slayer's target type.",
    short: 'Cleric-style bonus but aimed at a chosen target race/type; variable cost.',
  },
  'Slayer - most': {
    name: 'Slayer - most',
    points: 4,
    exclude_units: ['Ravenous Hordes'],
    description:
      "A Slayer is a Cleric-like upgrade targeted at a specific race or troop type rather than Undead. Effects and variable cost match Cleric. If destroyed or routed by their target type, the opponent gains +1 Glory. A Warband including a Slayer cannot include the Slayer's target type.",
    short: 'Cleric-style bonus but aimed at a chosen target race/type; variable cost.',
  },
  Concealment: {
    name: 'Concealment',
    points: 3,
    exclude_units: [
      'Elite Riders',
      'Heavy Riders',
      'Greater Warbeasts',
      'Elite Foot',
      'Heavy Foot',
    ],
    disabledBy: ['Flyer', 'Leader'],
    description:
      'Units with Concealment cannot be targeted by Shooting, Attacks, or Wild Charges unless the attacker begins within 6". Counter-charges may begin further away. Concealment doesn\'t stop Spells from targeting them. Scouts that choose Concealment combine it with their Hard to Target rule and count as Armour 2 against Shooting. Concealment cannot be combined with Flyer units.',
    short:
      'Can not be targeted beyond 6" for most attacks; scouts get special interaction.',
  },
  Courageous: {
    name: 'Courageous',
    points: 2,
    exclude_units: [],
    description:
      'Automatically pass one Courage test per game; must be declared before rolling. Counts as a 12 if the number rolled matters for other effects.',
    short: 'Auto-pass one Courage test per game. Declare before rolling.',
  },
  Cowardly: {
    name: 'Cowardly',
    points: -1,
    exclude_units: [],
    description:
      'When Retreating a Cowardly unit must move its full movement distance (not the usual half), affected by terrain. Cowardly Flyers retreat full movement plus any inches rolled on one die.',
    short: 'Moves full retreat distance, flyers add a d6.',
  },
  Cursed: {
    name: 'Cursed',
    points: -1,
    exclude_units: [],
    description:
      'When at least 1 hit is scored against this unit, an additional hit is scored (i.e., +1 hit each time the unit is hit), but only one additional hit per action regardless of total hits inflicted.',
    short: 'Suffers +1 hit each time it takes any hits.',
  },
  'Drums and flags': {
    name: 'Drums and flags',
    points: 2,
    exclude_units: [
      'Greater Warbeasts',
      'Lesser Warbeasts',
      'Scouts',
      'Ravenous Hordes',
    ],
    description:
      'Units gain +1 Courage for the duration of the game. If destroyed or routed the opponent gains +1 Glory.',
    short:
      'Provides +1 Courage to the unit; if destroyed or routed opponent gains +1 Glory',
  },
  Exploder: {
    name: 'Exploder',
    points: 2,
    exclude_units: ['Scouts', 'Ravenous Hordes'],
    disabledBy: ['Leader'],
    description:
      'As an ordered activation (successful on 5+), the unit may explode, dealing an area blast (6" radius) that mimics a Shoot activation hitting on 3+ to all units in the area; the Exploder is removed. A failed activation causes the unit to implode and be removed without causing damage. Exploders cannot be Scouts, Ravenous Hordes, or Leaders.',
    short:
      'Choose to explode on 5+ activation. 3+ shooting attack to all in 6" radius; unit removed.',
  },
  Fanatical: {
    name: 'Fanatical',
    points: 2,
    exclude_units: [],
    description: 'A Fanatical unit may reroll unsuccessful Rally activations.',
    short: 'May reroll failed Rally activations.',
  },
  Fast: {
    name: 'Fast',
    points: 1,
    exclude_units: [],
    description: 'Increases the unit\'s Maximum Movement by 2".',
    short: 'Movement +2".',
    adjustStats: { movement: 2 },
  },
  Fearful: {
    name: 'Fearful',
    points: -1,
    exclude_units: [],
    disabledBy: ['Undead', 'Fearless'],
    description:
      'Every Courage test is at -1 to the total; if attacked by a Fearsome unit, Courage tests are taken at -2. Cannot be combined with Fearless.',
    short: 'Penalised Courage tests (–1 normally, –2 vs Fearsome).',
  },
  Fearless: {
    name: 'Fearless',
    points: 1,
    exclude_units: ['Ravenous Hordes'],
    disabledBy: ['Fearful'],
    description:
      'Units ignore the effect of Fearsome enemies. Cannot be combined with Fearful.',
    short: 'Ignores Fearsome effects.',
  },
  Fearsome: {
    name: 'Fearsome',
    points: 2,
    exclude_units: ['Light Riders', 'Scouts'],
    description:
      'Causes -1 to opponents Courage tests when Attacking. If two Fearsome units meet, the effect cancels between them. Fearless or Undead units ignore Fearsome.',
    short: "Causes -1 to opponents' Courage tests when Attacking.",
  },
  Flyer: {
    name: 'Flyer',
    points: 2,
    exclude_units: [],
    disabledBy: ['Concealment'],
    description:
      'Flyers may move through units, measure ranges base-to-base, ignore terrain for movement and Attacks, never benefit from cover. Flyers always retreat after a fight and move their full distance. Flyer units cannot combine with Concealment. Flyers can be Attacked by contacting their base.',
    short: 'Ignore terrain/cover, always retreat after combat, retreat full distance.',
  },
  Hatred: {
    name: 'Hatred',
    points: 1,
    exclude_units: [],
    description:
      "Before deployment choose one race in the opponent's Warband; the unit gains Wild Charge against that race. If the unit already has Wild Charge it automatically passes Wild Charge tests against the hated target and must always Attack.",
    short:
      'Gains Wild Charge vs a chosen enemy race; if already Wild Charge, auto-pass tests.',
  },
  Insipid: {
    name: 'Insipid',
    points: -1,
    exclude_units: [],
    leaderOnly: true,
    description:
      'Leader-only downgrade: the Leader does not grant friendly units within 12" the usual +1 Courage bonus. This applies even when the Insipid Leader is Battered.',
    short: 'Leader loses the usual nearby Courage bonus.',
  },
  'Large - 2 Armor': {
    name: 'Large - 2 Armor',
    points: 1,
    exclude_units: [],
    disabledBy: ['Large - 3 Armor', 'Large - 4 Armor'],
    description:
      "Adds +2 Strength Points to the unit's starting value. Cost depends on Armour: Armour 1–2: 1 point, Armour 3: 2 points, Armour 4: 3 points.",
    short: 'Increase unit starting strength points by 2.',
    adjustStats: { strengthPoints: 2 },
  },
  'Large - 3 Armor': {
    name: 'Large - 3 Armor',
    points: 2,
    exclude_units: [],
    disabledBy: ['Large - 2 Armor', 'Large - 4 Armor'],
    description:
      "Adds +2 Strength Points to the unit's starting value. Cost depends on Armour: Armour 1–2: 1 point, Armour 3: 2 points, Armour 4: 3 points.",
    short: 'Increase unit starting strength points by 2.',
    adjustStats: { strengthPoints: 2 },
  },
  'Large - 4 Armor': {
    name: 'Large - 4 Armor',
    points: 3,
    exclude_units: [],
    disabledBy: ['Large - 2 Armor', 'Large - 3 Armor'],
    description:
      "Adds +2 Strength Points to the unit's starting value. Cost depends on Armour: Armour 1–2: 1 point, Armour 3: 2 points, Armour 4: 3 points.",
    short: 'Increase unit starting strength points by 2.',
    adjustStats: { strengthPoints: 2 },
  },
  'Longer range': {
    name: 'Longer range',
    points: 2,
    exclude_units: [],
    description:
      'For units with a Shoot Value: increase the unit\'s range by 4". Not usable by units with Short Range Missiles.',
    short: 'Shooting range +4".',
  },
  Lucky: {
    name: 'Lucky',
    points: 3,
    exclude_units: [],
    description:
      'Once per game, the Lucky unit may force a reroll of any one set of dice by either player for a unit within 12" (including itself). The reroll result must be accepted and you cannot reroll a reroll. Only one Lucky unit per complete 24 army points (with some special exceptions).',
    short: 'One-time forced reroll of any one dice set for units within 12".',
  },
  'Blessed blades': {
    name: 'Blessed blades',
    points: 4,
    exclude_units: [],
    disabledBy: ['Enchanted blades'],
    description:
      'Unit rolls an additional three dice when Attacking or Defending (even when Battered). Additional dice are not reduced at half-strength. One Blessed Blades unit per complete 24 army points. If destroyed or routed, opponent gains +1 Glory. Cannot combine with Enchanted Blades.',
    short: 'Extra +3 attack/defence dice.',
  },
  'Enchanted blades': {
    name: 'Enchanted blades',
    points: 3,
    exclude_units: [],
    disabledBy: ['Blessed blades'],
    description:
      'Unit rolls an additional two dice when Attacking or Defending (even when Battered). Additional dice are not reduced at half-strength. Cannot combine with Blessed Blades.',
    short: 'Extra +2 attack/defence dice.',
  },
  'Magical missiles': {
    name: 'Magical missiles',
    points: 3,
    exclude_units: [],
    description:
      'Units with a Shoot Value roll an additional two dice when Shooting (not reduced at half-strength).',
    short: 'Extra +2 shooting dice.',
  },
  'Mystical armour': {
    name: 'Mystical armour',
    points: 2,
    exclude_units: [],
    description:
      'For every Strength Point lost roll one die; on a 6 that lost Strength Point is cancelled (no damage).',
    short: 'Chance to cancel lost Strength Points on a roll of 6.',
  },
  Regeneration: {
    name: 'Regeneration',
    points: 3,
    exclude_units: [
      'Elite Riders',
      'Heavy Riders',
      'Light Riders',
      'Light Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
    ],
    description:
      'When this unit successfully rolls a Move activation it may choose to remain instead and regain 1 Strength Point lost during the game (cannot exceed starting Strength).',
    short:
      'May regain 1 Strength Point on a successful Move activation instead of moving.',
  },
  Repellent: {
    name: 'Repellent',
    points: 2,
    exclude_units: [],
    description:
      'Attack activation tests against a Repellent enemy suffer -1 to the dice roll (also applies to Wild Charges and Counter-charges).',
    short: "Makes attackers' activation tests harder by -1.",
  },
  'Ring of uncertain power': {
    name: 'Ring of uncertain power',
    points: 2,
    exclude_units: ['Greater Warbeasts', 'Lesser Warbeasts', 'Ravenous Hordes'],
    disabledBy: ['Spellcaster 1', 'Spellcaster 2', 'Spellcaster 3', 'Spellcaster 4'],
    description:
      "A unit with the Ring must use it every battle. After deployment (or when entering if off-table) roll on a table to determine the ring's random effect for the battle; the effect is applied immediately and cannot be rerolled. If the effect duplicates an upgrade the unit already has or cannot combine, the ring has no effect that battle. Only one Ring of Uncertain Power unit per Warband. Cannot be combined with Spellcaster.",
    short: 'Gives a randomly determined upgrade/effect each battle (roll-on-table).',
  },
  Slow: {
    name: 'Slow',
    points: -1,
    exclude_units: [],
    description: 'The unit\'s Maximum Movement is reduced by 2".',
    short: 'Movement -2".',
    adjustStats: { movement: -2 },
  },
  Sneakers: {
    name: 'Sneakers',
    points: 1,
    exclude_units: [
      'Elite Riders',
      'Heavy Riders',
      'Light Riders',
      'Greater Warbeasts',
      'Elite Foot',
      'Heavy Foot',
      'Heavy Missiles',
      'Light Missiles',
    ],
    description:
      'Eligible units may make a single Move activation after deployment (pre-game) without an activation test. If both players have Sneakers, Attacker moves all Sneakers first.',
    short: 'Pre-game free Move activation.',
  },
  'Spellcaster 1': {
    name: 'Spellcaster 1',
    points: 1,
    exclude_units: [
      'Light Riders',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    disabledBy: [
      'Spellcaster 2',
      'Spellcaster 3',
      'Spellcaster 4',
      'Spell resistant',
      'Super spell resistant',
      'Ring of uncertain power',
    ],
    description: 'Gives a unit access to Spells. Chooes 1 color of magic.',
    short: 'Gives a unit access to Spells. Chooes 1 color of magic.',
  },
  'Spellcaster 2': {
    name: 'Spellcaster 2',
    points: 2,
    exclude_units: [
      'Light Riders',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    disabledBy: [
      'Spellcaster 1',
      'Spellcaster 3',
      'Spellcaster 4',
      'Spell resistant',
      'Super spell resistant',
      'Ring of uncertain power',
    ],
    description: 'Gives a unit access to Spells. Chooes 2 colors of magic.',
    short: 'Gives a unit access to Spells. Chooes 2 colors of magic.',
  },
  'Spellcaster 3': {
    name: 'Spellcaster 3',
    points: 3,
    exclude_units: [
      'Light Riders',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    disabledBy: [
      'Spellcaster 1',
      'Spellcaster 2',
      'Spellcaster 4',
      'Spell resistant',
      'Super spell resistant',
      'Ring of uncertain power',
    ],
    description: 'Gives a unit access to Spells. Chooes 3 colors of magic.',
    short: 'Gives a unit access to Spells. Chooes 3 colors of magic.',
  },
  'Spellcaster 4': {
    name: 'Spellcaster 4',
    points: 4,
    exclude_units: [
      'Light Riders',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    disabledBy: [
      'Spellcaster 1',
      'Spellcaster 2',
      'Spellcaster 3',
      'Spell resistant',
      'Super spell resistant',
      'Ring of uncertain power',
    ],
    description: 'Gives a unit access to Spells. Chooes 4 colors of magic.',
    short: 'Gives a unit access to Spells. Chooes 4 colors of magic.',
  },
  'Spell resistant': {
    name: 'Spell resistant',
    points: 1,
    exclude_units: [],
    disabledBy: [
      'Spellcaster 1',
      'Spellcaster 2',
      'Spellcaster 3',
      'Spellcaster 4',
      'Super spell resistant',
    ],
    description:
      'When targeted by a Spell, roll one die; on a 5+ the Spell has no effect (the activation used to cast the Spell still counts). Does not affect magical weapons or non-spell shooting. Cannot combine with Spellcaster or Super Spell Resistant.',
    short: 'Roll to potentially negate spells (5+ to resist).',
  },
  'Super spell resistant': {
    name: 'Super spell resistant',
    points: 2,
    exclude_units: [],
    disabledBy: [
      'Spellcaster 1',
      'Spellcaster 2',
      'Spellcaster 3',
      'Spellcaster 4',
      'Spell resistant',
    ],
    description:
      'Like Spell Resistant but negates Spells on a roll of 4+ instead of 5+. Cannot combine with Spellcaster or Spell Resistant.',
    short: 'Roll to potentially negate spells (4+ to resist).',
  },
  'Divine leadership': {
    name: 'Divine leadership',
    points: 2,
    exclude_units: [],
    leaderOnly: true,
    description:
      'Non-Spellcaster Leader-only upgrade. All friendly units within 12" of the Leader (including the Leader\'s unit) gain the Spell Resistant upgrade while the Leader is active (Leader must not be Battered). Measure distance from the Leader model. Units already Spell Resistant or Super Spell Resistant gain no further effect.',
    short:
      'Leader grants Spell Resistant to friendly units within 12" (resist spells on 5+).',
  },
  Summoner: {
    name: 'Summoner',
    points: 3,
    exclude_units: [
      'Light Riders',
      'Greater Warbeasts',
      'Lesser Warbeasts',
      'Bellicose Foot',
      'Scouts',
      'Ravenous Hordes',
    ],
    description:
      'A Summoner may keep allied units off-table and attempt to Summon them as ordered activations. Summoned units do not count as casualties until deployed. To Summon a 1–3 army point unit, the Summoner must roll a 5+; to Summon a 4–6 army point unit, it must roll a 6+. -1 on the check if summoner is at half strength. Place sumond unit in 12", no closer than 6" to enemies. Summoned units cannot be Leaders, Burrowers, Clerics, Spellcasters, or Sneakers, and no more than 50% of army points may be held off-table awaiting Summoning.',
    short: 'Raise units into play mid-game by Summoning. ',
  },
  Undead: {
    name: 'Undead',
    points: 0,
    exclude_units: [],
    disabledBy: ['Fearful'],
    description:
      'Undead units are impossible to Batter and are not affected by Fear. Their Courage becomes 0+ so they never become Battered, though they can still rout on a negative final score. Undead ignore Fearsome effects and are fragile: hits during Attacks are rounded up when calculating Strength Point loss.',
    short:
      'Undead traits: cannot be Battered, ignore Fear, hits against the unit during Attacks are rounded up.',
    adjustStats: { courage: 0 },
  },
  'Unstoppable March of the Dead': {
    name: 'Unstoppable March of the Dead',
    points: 3,
    exclude_units: [],
    leaderOnly: true,
    description:
      'Your Warband only takes Courage tests when Strength Points are lost from Attacking or Shooting (ignore the other Courage test bullet points listed on page 77). Also, do not subtract 1 from Courage tests if at half or lower army points. Unlike most Leader upgrades, this still applies if your Leader’s unit has been destroyed, routed, or is Battered',
    short:
      'only takes Courage tests when Strength Points are lost from Attacking or Shooting; no -1 penalty at half or lower army points.',
    adjustStats: { courage: 0 },
  },
  Venomous: {
    name: 'Venomous',
    points: 3,
    exclude_units: [],
    disabledBy: ['Berserk', 'Bloodthirsty'],
    description:
      'Any Attack die that rolls a 6 causes 2 hits rather than 1 (not applied to Defence or Shooting dice). Cannot combine with Berserk or Bloodthirsty.',
    short: 'Attack 6s deal double hits.',
  },
  Bloodthirsty: {
    name: 'Bloodthirsty',
    points: 3,
    exclude_units: [],
    disabledBy: ['Venomous', 'Berserk'],
    description:
      'Has the same effect as Venomous: Attack dice of 6 cause 2 hits. Cannot combine with Berserk or Venomous.',
    short: 'Attack 6s deal double hits.',
  },
  Weak: {
    name: 'Weak',
    points: -1,
    exclude_units: [],
    description:
      'This unit rolls one fighting die less in Attacks and when Shooting (so it rolls either 11 or 5 dice instead of normal counts).',
    short: 'One fewer fighting die in Attacks and Shooting.',
  },
  'Well led': {
    name: 'Well led',
    points: 1,
    exclude_units: ['Greater Warbeasts', 'Lesser Warbeasts', 'Ravenous Hordes'],
    disabledBy: ['Leader'],
    description:
      'Once per game the Well Led unit may reroll a single Attack, Move, Shoot, Courage test, Wild Charge, Counter-charge, Evade, or Skirmish activation. Rerolls cannot themselves be rerolled.',
    short: 'One-use reroll on a single activation/test or similar.',
  },
  'Were-creature': {
    name: 'Were-creature',
    points: 2,
    exclude_units: [
      'Elite Riders',
      'Heavy Riders',
      'Light Riders',
      'Greater Warbeasts',
      'Lesser Warbeasts',
      'Heavy Missiles',
      'Light Missiles',
      'Scouts',
      'Ravenous Hordes',
    ],
    disabledBy: ['Leader'],
    description:
      'Combine a Lesser Warbeasts unit with another eligible unit type (Elite/Heavy/Light/Bellicose Foot) to represent a were-creature. Costs 2 points plus the cost of the other unit. The unit starts untransformed; when it takes damage it must test if it transform into the Lesser Warbeasts unit. On a roll of 6 the unit transforms. If it suffered 3 losses in a single hit, it transforms on a 5+. Transformed units replace the untransformed unit at full Strength and lose previous upgrades/options; the transformation can happen once only.',
    short:
      'Unit may transform into a Lesser Warbeasts unit when damaged; 6 (or 5+ if 3 losses in one hit).',
  },
  'Wise old owl': {
    name: 'Wise old owl',
    points: 1,
    exclude_units: [],
    leaderOnly: true,
    description:
      "Leader-only upgrade. When deciding Attacker/Defender, you may add or subtract 1 from your total after seeing both players' rolls (choose whichever benefits you).",
    short: 'Leader can adjust the attacker/defender die result by ±1 once.',
  },
  'Random leader traits': {
    name: 'Random leader traits',
    points: 0,
    exclude_units: [],
    leaderOnly: true,
    description: 'Optional Rule. Use the random leader traits from first edition.',
    short: 'Optional Rule. Use the random leader traits from first edition.',
  },
};
