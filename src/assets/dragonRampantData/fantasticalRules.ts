import { FantasticalRules } from '../../store/types';

export const fantasticalRulesData: FantasticalRules = {
  Leader: {
    name: 'Leader',
    points: 0,
    exclude_units: [],
    description: 'The leader of the army.',
  },
  Cleric: {
    name: 'Cleric',
    points: 4,
    exclude_units: [
      'Ravenous Hordes',
      'Scouts',
      'Light Missiles',
      'Heavy Missiles',
      'Bellicose Foot',
      'Lesser Warbeasts',
      'Greater Warbeasts',
      'Light Riders',
    ],
    description:
      'A Cleric unit counts as using Enchanted melee weapons against Undead units, without needing to roll for effectiveness. A Cleric may choose to ignore Fear caused by the Undead.',
    short: 'Reroll all misses against Undead units, ignore Fear caused by the Undead.',
  },
  Slayer: {
    name: 'Slayer',
    points: 4,
    exclude_units: [
      'Ravenous Hordes',
      'Scouts',
      'Light Missiles',
      'Heavy Missiles',
      'Lesser Warbeasts',
      'Greater Warbeasts',
      'Light Riders',
    ],
    description:
      'A Slayer unit counts as using Enchanted melee weapons against one Type of enemies, without needing to roll for effectiveness. A Slayer may choose to ignore Fear caused by that Type.',
    short:
      'Reroll all misses against one type of enemies, ignore Fear caused by that enemy.',
  },
  Exploder: {
    name: 'Exploder',
    points: 2,
    exclude_units: ['Ravenous Hordes', 'Scouts'],
    description:
      'As an ordered activation successful on 5+, an Exploder unit will explode. A failed activation test means an implosion occurs, and the unit is removed from play without damaging any other units, and counts as casualties.    The explosion affects all units – friend and foe alike – within a 6" radius of the exploding unit. This works exactly as a Shoot action hitting on 3+ (the number of dice rolled depending on the Exploder\'s Strength Points, as for all Shooting), but affects all units within the blast zone. Once exploded, the Exploder unit is removed from the table and counts as destroyed.',
    short:
      'As an ordered activation on 5+: 3+ shooting attack against all units in 6".',
  },
  Fear: {
    name: 'Fear',
    points: 2,
    exclude_units: [],
    description:
      'Courage Tests caused as a result of Attacking (but not Shooting) by a Fear unit suffer an additional -1 to the total. Should two units that cause Fear encounter one another, the effect of this rule is cancelled between those units. Undead units are not affected by Fear.',
    short: 'Enemy courage Tests caused by close combat -1.',
  },
  Fearful: {
    name: 'Fearful',
    points: -2,
    exclude_units: ['Ravenous Hordes'],
    description:
      'Every Courage and Rally test suffers -1 to the total; if attacked by a unit causing Fear, Courage tests are taken at -2.',
    short: 'Every Courage and Rally test suffers -1.',
  },
  Flying: {
    name: 'Flying',
    points: 2,
    exclude_units: ['Ravenous Hordes'],
    description:
      'A Flying unit may move over friends and enemies during its movement, but at the end of its move must adhere to the 3" proximity rule just like any other unit. This is still a great advantage, as units may not usually interpenetrate in Dragon Rampant. Flying units ignore all terrain for movement and Attacks (as will their opponent for Attacks), and they never benefit from cover. Units targeted by a Flying unit will only benefit from cover if it is buildings, woods, or some other overhead cover. When retreating, a Flying unit must move its Maximum movement, and may move over any other unit; this may result in it retreating off the table more often that you would wish!',
    short:
      'May move over friends and enemies during its movement. Flying units ignore all terrain for movement and Attacks; no cover. When retreating, move the Maximum movement.',
  },
  Burrowing: {
    name: 'Burrowing',
    points: 2,
    exclude_units: ['Ravenous Hordes'],
    description:
      'A Burrowing unit may move under friends and enemies during its movement, but at the end of its move must adhere to the 3" proximity rule just like any other unit. This is still a great advantage, as units may not usually interpenetrate in Dragon Rampant. Burrowing units ignore all terrain for movement and Attacks (as will their opponent for Attacks), and they never benefit from cover. Units targeted by a Burrowing unit will only benefit from cover if it is buildings, woods, or some other overhead cover. When retreating, a Burrowing unit must move its Maximum movement, and may move under any other unit; this may result in it retreating off the table more often that you would wish!',
    short:
      'May move under friends and enemies during its movement. Flying units ignore all terrain for movement and Attacks; no cover. When retreating, move the Maximum movement.',
  },
  Hatred: {
    name: 'Hatred',
    points: 1,
    exclude_units: [],
    description:
      'Units with Hatred gain the Wild Charge against enemy units they have Hatred of. Units with Hatred that already have the Wild Charge special rule automatically pass their Wild Charge tests against enemy units they have Hatred of, meaning that your unit must always Attack.',
    short: 'Gain the Wild Charge against enemy units they have Hatred of.',
  },
  Invisibility: {
    name: 'Invisibility',
    points: 3,
    exclude_units: ['Ravenous Hordes'],
    description:
      "Invisible units may not be targeted by ranged attacks except for spells, and do not block line of sight. Invisible units become visible during Attacks and may be targeted by enemy Attacks. Invisible units may achieve objectives and use the unit proximity rule in the same way as other units; they cannot be passed through by other units, as everyone senses their presence even if they can't see them clearly.",
    short:
      'May not be targeted by ranged attacks except for spells, and do not block line of sight.',
  },
  'Enchanted Weapons': {
    name: 'Enchanted Weapons',
    points: 1,
    exclude_units: ['Ravenous Hordes'],
    description:
      "At the start of each game, before deployment, roll one die to see if your weapons will give you a magical edge against your current opponents: on a roll of a 6, the weapon's enchantment becomes effective versus all enemy units. An effective enchanted weapon rerolls all misses (once) in all Attacks (melee) or Shooting (missile).",
    short: 'On a roll of a 6: reroll all misses.',
  },
  'Blessed Weapons': {
    name: 'Blessed Weapons',
    points: 2,
    exclude_units: ['Ravenous Hordes'],
    description:
      "At the start of each game, before deployment, roll one die to see if your weapons will give you a magical edge against your current opponents: on a roll of a 5-6, the weapon's enchantment becomes effective versus all enemy units. An effective blessed weapon rerolls all misses (once) in all Attacks (melee) or Shooting (missile).",
    short: 'On a roll of a 5+: reroll all misses.',
  },
  'Mystical Armour': {
    name: 'Mystical Armour',
    points: 2,
    exclude_units: ['Ravenous Hordes'],
    description:
      'If a unit is equipped with mystical armour, for every Strength Point lost, roll one  die. On a roll of a 6, that point will be ignored.',
    short: 'On a roll of a 6, strength point loss will be ignored.',
  },
  Spellcaster: {
    name: 'Spellcaster',
    points: 4,
    exclude_units: [
      'Ravenous Hordes',
      'Scouts',
      'Light Missiles',
      'Heavy Missiles',
      'Bellicose Foot',
      'Lesser Warbeasts',
      'Greater Warbeasts',
      'Light Riders',
    ],
    description: 'Can cast all Spells from the Spell Table.',
    short: 'Can cast all Spells.',
  },
  Wizardlings: {
    name: 'Wizardlings',
    points: 2,
    exclude_units: [
      'Ravenous Hordes',
      'Scouts',
      'Light Missiles',
      'Heavy Missiles',
      'Bellicose Foot',
      'Lesser Warbeasts',
      'Greater Warbeasts',
      'Light Riders',
    ],
    description:
      'A Wizardling chooses three spells from the Spell Table, and may not use any other spells. The spells must be chosen before the scenario is announced.',
    short: 'Can cast 3 Spells.',
  },
  Summoner: {
    name: 'Summoner',
    points: 3,
    exclude_units: [
      'Ravenous Hordes',
      'Scouts',
      'Bellicose Foot',
      'Lesser Warbeasts',
      'Greater Warbeasts',
      'Light Riders',
    ],
    description:
      'As an ordered activation on 6+, a Summoner unit may try to raise 1 unit per turn. A Summoner that is at half strength or below (6 or 3 Strength Points) has a –1 modifier to its activation test for Summoning. If you deploy a Summoner in a scenario where some of your units are deployed off-table, a –1 modifier is applied to all Summoning activation tests for the scenario\'s duration. If successful, the summoned unit must be placed within 12" of the Summoner, and no closer than 6" to an enemy unit. If this is not achievable, the successfully summoned unit may not be placed until summoned again in another turn. A summoned unit may be any Flying, Burrowing or Undead unit, or other creatures that both players agree can materialize or spring from the ground. The summoned unit may not take further action in this phase, but will do so during your next turn. Until on the table, the summoned units do not count as casualties or for victory purposes.',
    short:
      'Ordered activation on 6+: place the summond unit within 12", no closer than 6" to an enemy.',
  },
  'No Feelings': {
    name: 'No Feelings',
    points: 0,
    exclude_units: [],
    description:
      'Undead. Courage value of 0+. This means that your unit will never become Battered, but will still rout on a negative final score (their magical reanimation being broken). They also ignore the effect of Fear. Such units are, however, fragile due to a lack of armour or calcium deficiency, meaning that any hits inflicted during Attacks are rounded up (as opposed to down) when working out how many Strength Points are lost.',
    short:
      'Undead. Courage value of 0+, ignore the effect of Fear. Any hits inflicted during Attacks are rounded up.',
  },
  'Unstoppable March of the Dead': {
    name: 'Unstoppable March of the Dead',
    points: 0,
    exclude_units: [],
    description:
      'This is a Leader trait usable by a Warband consisting only of units from the Graveyard Dwellers list (see later); it may be selected instead of the rolled Trait if you roll an 8 or higher on the Leader Skills table. Your Warband only takes Courage tests for casualties from Attacking or Shooting, and when Rallying.',
    short:
      'Your Warband only takes Courage tests for casualties from Attacking or Shooting, and when Rallying.',
  },
  Venomous: {
    name: 'Venomous',
    points: 2,
    exclude_units: [],
    description:
      'Any Attack die (but not Defence die) that rolls 6 does 2 Strength Points of damage.',
    short:
      'Any Attack die (but not Defence die) that rolls 6 does 2 Strength Points of damage.',
  },
};
