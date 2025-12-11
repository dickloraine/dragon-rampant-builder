import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getSpellSchools } from '../store/rosterSlice';
import { toggleUIOption } from '../store/uiSlice';

const SpellSchoolTable = () => {
  const dispatch = useAppDispatch();
  const spellData = useAppSelector(getSpellSchools);
  const powersExpanded = useAppSelector((state) => state.ui.powersExpanded);
  const [open, setOpen] = useState([...Array(Object.keys(spellData))].map(() => false));

  if (!spellData || Object.keys(spellData).length === 0) return null;

  const handleSpellClick = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !open[index];
    setOpen(newOpen);
  };

  return (
    <Accordion
      expanded={powersExpanded}
      onChange={() => dispatch(toggleUIOption('powersExpanded'))}
      sx={{ maxWidth: 1210 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h3">Spell Table</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ maxWidth: 800 }}>
        <TableContainer sx={{ display: { xs: 'none', md: 'block' } }}>
          <Table size="small" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow key="headpowertable">
                <TableCell sx={{ minWidth: 120 }}>Spell name</TableCell>
                <TableCell>School</TableCell>
                <TableCell align="center" sx={{ display: { md: 'none', lg: 'block' } }}>
                  Difficulty
                </TableCell>
                <TableCell align="center" sx={{ display: { md: 'block', lg: 'none' } }}>
                  Dif
                </TableCell>
                <TableCell>Target</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Effect</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(spellData).map((spells) =>
                spells.map((spell) => (
                  <TableRow key={spell.name}>
                    <TableCell component="th" scope="row">
                      {spell.name}
                    </TableCell>
                    <TableCell>{spell.school}</TableCell>
                    <TableCell align="center">{spell.difficulty}+</TableCell>
                    <TableCell>{spell.target}</TableCell>
                    <TableCell>{spell.duration}</TableCell>
                    <TableCell>{spell.effect}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <List sx={{ display: { md: 'none', xs: 'block' } }}>
          {Object.entries(spellData).map(([school, spells], index) => (
            <Box key={index}>
              <ListItem key={school + 'small'} onClick={() => handleSpellClick(index)}>
                <ListItemText primary={school} />
                <Box width={25}></Box>
                {open[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                {spells.map((spell) => (
                  <List key={school + 'list'} dense sx={{ pl: 3 }}>
                    <ListItem key={spell.name}>
                      <ListItemText primary={spell.name} />
                    </ListItem>
                    <List key={school + 'list'} dense sx={{ pl: 3 }}>
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
                        <ListItemText primary="Duration: " secondary={spell.duration} />
                      </ListItem>
                      <ListItem key={spell.name + spell.effect}>
                        <ListItemText primary="Effect: " secondary={spell.effect} />
                      </ListItem>
                    </List>
                  </List>
                ))}
              </Collapse>
            </Box>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default SpellSchoolTable;
