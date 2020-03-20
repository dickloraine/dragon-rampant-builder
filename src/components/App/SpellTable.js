import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Hidden
} from '@material-ui/core';

export default function SpellTable({
  setUIOption,
  getSpecialRules,
  spellsExpanded,
  spellData
}) {
  const specialRules = getSpecialRules();

  const spellcasterInRoster = () => {
    for (const rule of specialRules) {
      if (rule === 'Spellcaster' || rule === 'Wizardlings') return true;
    }
    return false;
  };

  return (
    <>
      {spellcasterInRoster() && (
        <ExpansionPanel
          expanded={spellsExpanded}
          onChange={() => setUIOption('spellsExpanded', !spellsExpanded)}
          style={{ minWidth: 400, maxWidth: 1210 }}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Spell Table</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ maxWidth: 800 }}>
            <TableContainer>
              <Table size="small" style={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: 100 }}>Spell name</TableCell>
                    <Hidden smDown>
                      <TableCell align="center">Difficulty</TableCell>
                    </Hidden>
                    <Hidden mdUp>
                      <TableCell align="center">Dif</TableCell>
                    </Hidden>
                    <TableCell>Target</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Effect</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.values(spellData).map(spell => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {spell.name}
                      </TableCell>
                      <TableCell align="center">{spell.difficulty}+</TableCell>
                      <TableCell>{spell.target}</TableCell>
                      <TableCell>{spell.duration}</TableCell>
                      <TableCell>{spell.effect}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )}
    </>
  );
}