import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
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
  Hidden,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Box
} from '@material-ui/core';
import getData from 'store/getData';
import { useSelector, useDispatch } from 'react-redux';
import { setUIOption } from 'store/uiSlice';

const spellData = getData('spellData');
const rulesData = getData('rulesData');

export default function SpellTable() {
  const dispatch = useDispatch();
  const spellsExpanded = useSelector(state => state.ui.spellsExpanded);
  const units = useSelector(state => state.roster.units);
  const [open, setOpen] = useState([...Array(Object.keys(spellData))].map(() => false));
  let specialRules = [
    ...Object.values(units).reduce(
      (acc, unit) =>
        unit.rules.reduce(
          (acc, rule) =>
            rulesData[rulesData[rule]] ? acc.add(rulesData[rule]) : acc.add(rule),
          acc
        ),
      new Set()
    )
  ].sort();

  const spellcasterInRoster = () => {
    for (const rule of specialRules) {
      if (rule === 'Spellcaster' || rule === 'Wizardlings') return true;
    }
    return false;
  };

  const handleSpellClick = index => {
    const newOpen = [...open];
    newOpen[index] = !open[index];
    setOpen(newOpen);
  };

  return (
    <>
      {spellcasterInRoster() && (
        <ExpansionPanel
          expanded={spellsExpanded}
          onChange={() => dispatch(setUIOption('spellsExpanded', !spellsExpanded))}
          style={{ maxWidth: 1210 }}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Spell Table</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ maxWidth: 800 }}>
            <Hidden mdDown>
              <TableContainer>
                <Table size="small" style={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow key="headspelltable">
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
                      <TableRow key={spell.name}>
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
            </Hidden>
            <Hidden smUp>
              <List>
                {Object.values(spellData).map((spell, index) => (
                  <Box key={index}>
                    <ListItem
                      key={spell.name + 'small'}
                      button
                      onClick={() => handleSpellClick(index)}
                    >
                      <ListItemText primary={spell.name} />
                      {open[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                      <List key={spell.name + 'list'} dense style={{ paddingLeft: 20 }}>
                        <ListItem key={spell.name + spell.difficulty}>
                          <ListItemText
                            primary="Difficulty: "
                            secondary={spell.difficulty}
                          />
                        </ListItem>
                        <ListItem key={spell.name + spell.target}>
                          <ListItemText primary="Target: " secondary={spell.target} />
                        </ListItem>
                        <ListItem key={spell.name + spell.duration}>
                          <ListItemText
                            primary="Duration: "
                            secondary={spell.duration}
                          />
                        </ListItem>
                        <ListItem key={spell.name + spell.effect}>
                          <ListItemText primary="Effect: " secondary={spell.effect} />
                        </ListItem>
                      </List>
                    </Collapse>
                  </Box>
                ))}
              </List>
            </Hidden>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )}
    </>
  );
}
