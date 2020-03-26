import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import {
  Tooltip,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core';
import { packRoster } from './Roster';

const copyToClipboard = text => navigator.clipboard.writeText(text);

const ExportList = ({
  roster,
  armyCost,
  showFeedback,
  onClose = null,
  showText = false
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const exportList = exportFunc => {
    try {
      const list = exportFunc(roster);
      copyToClipboard(list);
      showFeedback('List copied to clipboard!', 'success');
    } catch (err) {
      showFeedback('Could not export the list!', 'error');
    }
    if (onClose) onClose();
  };

  const getImportableString = () => JSON.stringify(packRoster(roster));

  const getListAsText = () => {
    let text = [];
    text.push(`${roster.name} @${armyCost} points`);
    text.push('=====================================');
    for (const unit of Object.values(roster.units)) {
      text.push('');
      text.push(
        `${unit.customName ? unit.customName + ' (' + unit.name + ')' : unit.name} @${
          unit.points
        } points`
      );
      text.push('-----------------------------------');

      const options = [...unit.options, ...unit.fantasticalRules];
      if (options.length) {
        for (const option of options) text.push(`- ${option}`);
      }
    }
    text.push('');
    return text.join('\n');
  };

  const getListAsMarkdown = () => {
    let text = [];
    text.push(`**${roster.name} @${armyCost} points**`);
    for (const unit of Object.values(roster.units)) {
      text.push('');
      text.push(
        `* ${unit.customName ? unit.customName + ' (' + unit.name + ')' : unit.name} @${
          unit.points
        } points`
      );

      const options = [...unit.options, ...unit.fantasticalRules];
      if (options.length) {
        text.push('');
        for (const option of options) text.push(`    - ${option}`);
      }
    }
    text.push('');
    return text.join('\n');
  };

  return (
    <>
      <Tooltip title="Export">
        <IconButton color="inherit" onClick={handleOpen}>
          <ShareIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleOpen}>Export List</Typography>}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Chose how to export</DialogTitle>
        <List>
          <ListItem key={'str'} button onClick={() => exportList(getImportableString)}>
            <ListItemIcon>
              <ArrowDownwardIcon />
            </ListItemIcon>
            As an importable String
          </ListItem>
          <ListItem key={'text'} button onClick={() => exportList(getListAsText)}>
            <ListItemIcon>
              <FormatAlignLeftIcon />
            </ListItemIcon>
            As text
          </ListItem>
          <ListItem key={'md'} button onClick={() => exportList(getListAsMarkdown)}>
            <ListItemIcon>
              <FormatAlignJustifyIcon />
            </ListItemIcon>
            As markdown text
          </ListItem>
        </List>
      </Dialog>
    </>
  );
};

export default ExportList;
