import { Error, ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getTotalPoints } from '../store/rosterSlice';
import type { Unit } from '../store/types';
import { toggleUIOption } from '../store/uiSlice';

const checkMutualExclusive = (warnings: string[][], unit: Unit, ...rules: string[]) => {
  const foundRules = rules.filter((rule) => unit.fantasticalRules.includes(rule));
  if (foundRules.length > 1) {
    warnings.push([unit.name, `${foundRules.join(' and ')} may not be used together!`]);
  }
};

const Validation = () => {
  const dispatch = useAppDispatch();
  const edition = useAppSelector((state) => state.ui.edition);
  const validationExpanded = useAppSelector((state) => state.ui.validationExpanded);
  const fantasticalRulesData = useAppSelector(
    (state) => state.data.fantasticalRulesData
  );
  const units = useAppSelector((state) => state.roster.units);
  const armyCost = getTotalPoints(units);
  const warnings: string[][] = [];

  if (edition === 'second') {
    if (armyCost > 36 && units.length < 6) {
      warnings.push(['Army', 'Army must have at least 6 units!']);
    } else if (armyCost > 23 && units.length < 4) {
      warnings.push(['Army', 'Army must have at least 4 units!']);
    }
    if (armyCost > 36 && units.length > 18) {
      warnings.push(['Army', 'Army must have at most 18 units!']);
    } else if (armyCost > 23 && units.length > 12) {
      warnings.push(['Army', 'Army must have at most 12 units!']);
    }

    const onePer24PointsRules = [
      '18/00 Strength',
      '18 Strength',
      'Lucky',
      'Blessed blades',
    ];
    for (const rule of onePer24PointsRules) {
      const foundUnits = units.filter((unit) => unit.fantasticalRules.includes(rule));
      if (foundUnits.length > Math.floor(armyCost / 24)) {
        warnings.push([
          foundUnits[0].name,
          `Only one unit with ${rule} is allowed per 24 points of army cost!`,
        ]);
      }
    }

    if (units.filter((unit) => unit.fantasticalRules.includes('Leader')).length > 1) {
      warnings.push(['Army', 'Only one leader is allowed per army!']);
    }

    if (
      units.filter((unit) => unit.fantasticalRules.includes('Ring of uncertain power'))
        .length > 1
    ) {
      warnings.push([
        'Army',
        'Only one unit with Ring of uncertain power is allowed per army!',
      ]);
    }

    for (const unit of units) {
      if (unit.points > 10)
        warnings.push([unit.name, 'No Unit may cost more than 10 points!']);
      if (unit.name !== 'Unit' && unit.points < 1)
        warnings.push([unit.name, 'No Unit may cost less than one point!']);

      const leaderOnlyRules = unit.fantasticalRules.filter(
        (rule) => fantasticalRulesData[rule].leaderOnly
      );
      if (leaderOnlyRules.length > 0 && !unit.fantasticalRules.includes('Leader')) {
        warnings.push([
          unit.name,
          `Has to be a leader to use ${leaderOnlyRules.join(' and ')}!`,
        ]);
      }
      if (unit.fantasticalRules.includes('Leader')) {
        unit.fantasticalRules.forEach((rule) => {
          if (['Concealment', 'Exploder', 'Well led', 'Were-creature'].includes(rule))
            warnings.push([unit.name, `A Leader can´t have ${rule}!`]);
        });
      }

      checkMutualExclusive(warnings, unit, 'Fearless', 'Fearful');
      checkMutualExclusive(warnings, unit, 'Concealment', 'Flyer');
      checkMutualExclusive(warnings, unit, 'Venomous', 'Berserk', 'Bloodthirsty');
      checkMutualExclusive(warnings, unit, 'Blessed blades', 'Enchanted blades');

      if (unit.fantasticalRules.includes('Large - 2 Armor') && unit.stats.armor > 2)
        warnings.push([unit.name, 'Wrong armor amount for  Large!']);
      if (unit.fantasticalRules.includes('Large - 3 Armor') && unit.stats.armor !== 3)
        warnings.push([unit.name, 'Wrong armor amount for  Large!']);
      if (unit.fantasticalRules.includes('Large - 4 Armor') && unit.stats.armor < 4)
        warnings.push([unit.name, 'Wrong armor amount for  Large!']);
      checkMutualExclusive(
        warnings,
        unit,
        'Large - 2 Armor',
        'Large - 3 Armor',
        'Large - 4 Armor'
      );

      checkMutualExclusive(
        warnings,
        unit,
        'Spellcaster 1',
        'Spellcaster 2',
        'Spellcaster 3',
        'Spellcaster 4',
        'Spell resistant',
        'Super spell resistant'
      );
      checkMutualExclusive(
        warnings,
        unit,
        'Spellcaster 1',
        'Spellcaster 2',
        'Spellcaster 3',
        'Spellcaster 4',
        'Ring of uncertain power'
      );

      if (
        unit.fantasticalRules.includes('Unstoppable March of the Dead') &&
        units.some((u) => !u.fantasticalRules.includes('Undead'))
      )
        warnings.push([
          unit.name,
          'All units must be Undead to use "Unstoppable March of the Dead!',
        ]);
    }
  } else {
    for (const unit of units) {
      if (unit.points > 10)
        warnings.push([unit.name, 'No Unit may cost more than 10 points!']);
      if (unit.name !== 'Unit' && unit.points < 1)
        warnings.push([unit.name, 'No Unit may cost less than one point!']);
      if (
        unit.options.includes('Short range missiles') &&
        unit.options.includes('Mixed Weapons')
      )
        warnings.push([
          unit.name,
          'Short range missiles and Mixed Weapons may not be used together!',
        ]);
      if (
        unit.fantasticalRules.includes('Unstoppable March of the Dead') &&
        !unit.fantasticalRules.includes('Leader')
      )
        warnings.push([
          unit.name,
          'Only a leader can take "Unstoppable March of the Dead"',
        ]);
    }
  }

  return (
    <>
      {warnings.length !== 0 && (
        <Accordion
          expanded={validationExpanded}
          onChange={() => dispatch(toggleUIOption('validationExpanded'))}
          sx={{ maxWidth: 'breakpoints.values.lg' }}
        >
          <AccordionSummary
            sx={{ backgroundColor: 'error.main', color: 'error.contrastText' }}
            expandIcon={<ExpandMore sx={{ color: 'error.contrastText' }} />}
          >
            <Typography variant="h3">Warnings</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: 'error.light', color: 'error.contrastText' }}
          >
            <List>
              {warnings.map(([name, text], index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: 'error.contrastText' }}>
                    <Error />
                  </ListItemIcon>
                  <ListItemText primary={name} secondary={text} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default Validation;
