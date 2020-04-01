import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import { packRoster } from './Roster';
import ListDialog from './ListDialog';
import { useSelector, useDispatch } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';

const copyToClipboard = text => navigator.clipboard.writeText(text);

const ExportList = ({ onClose = null, showText = false }) => {
  const dispatch = useDispatch();
  const roster = useSelector(state => state.roster);
  const getImportableString = () => JSON.stringify(packRoster(roster));
  const armyCost = roster.totalPoints;

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

  const options = [
    ['As an importable String', <ArrowDownwardIcon />, getImportableString],
    ['As text', <FormatAlignLeftIcon />, getListAsText],
    ['As markdown text', <FormatAlignJustifyIcon />, getListAsMarkdown]
  ];

  const exportList = text => {
    let exportFunc = options.reduce(
      (acc, opt) => (opt[0] === text ? opt[2] : acc),
      null
    );

    try {
      const list = exportFunc(roster);
      copyToClipboard(list);
      dispatch(showFeedback('List copied to clipboard!', 'success'));
    } catch (err) {
      dispatch(showFeedback('Could not export the list!', 'error'));
    }
  };

  return (
    <ListDialog
      action={exportList}
      anchor={openFunc => (
        <>
          <Tooltip title="Export">
            <IconButton color="inherit" onClick={openFunc}>
              <ShareIcon />
            </IconButton>
          </Tooltip>
          {showText && <Typography onClick={openFunc}>Export List</Typography>}
        </>
      )}
      options={options}
      title="Chose how to export"
      onClose={onClose}
    />
  );
};

export default ExportList;
