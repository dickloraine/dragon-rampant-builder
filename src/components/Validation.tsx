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
import { getEdition, toggleUIOption } from '../store/uiSlice';

const Validation = () => {
  const dispatch = useAppDispatch();
  const edition = useAppSelector(getEdition);
  const validationExpanded = useAppSelector((state) => state.ui.validationExpanded);
  const units = useAppSelector((state) => state.roster.units);
  const armyCost = useAppSelector(getTotalPoints);
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

      if (unit.fantasticalRules.includes('Large - 2 Armor') && unit.stats.armor > 2)
        warnings.push([unit.name, 'Wrong armor amount for  Large!']);
      if (unit.fantasticalRules.includes('Large - 3 Armor') && unit.stats.armor !== 3)
        warnings.push([unit.name, 'Wrong armor amount for  Large!']);
      if (unit.fantasticalRules.includes('Large - 4 Armor') && unit.stats.armor !== 4)
        warnings.push([unit.name, 'Wrong armor amount for  Large!']);

      const spellCount = unit.spells ? unit.spells.length : 0;
      if (spellCount > 1 && unit.fantasticalRules.includes('Spellcaster 1'))
        warnings.push([unit.name, 'Only 1 spell school allowed!']);
      else if (spellCount > 2 && unit.fantasticalRules.includes('Spellcaster 2'))
        warnings.push([unit.name, 'Only 2 spell schools allowed!']);
      else if (spellCount > 3 && unit.fantasticalRules.includes('Spellcaster 3'))
        warnings.push([unit.name, 'Only 3 spell schools allowed!']);
      else if (spellCount > 4 && unit.fantasticalRules.includes('Spellcaster 4'))
        warnings.push([unit.name, 'Only 4 spell schools allowed!']);

      if (
        unit.fantasticalRules.some((r) =>
          [
            'Cleric - No undead',
            'Cleric - some undead',
            'Cleric - most undead',
          ].includes(r)
        ) &&
        units.some((u) => u.fantasticalRules.includes('Undead'))
      )
        warnings.push([
          unit.name,
          'An army with a cleric must not have any undead units!',
        ]);

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
