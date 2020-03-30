import React from 'react';
import RestorePageIcon from '@material-ui/icons/RestorePage';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';
import { useDispatch } from 'react-redux';
import { showFeedback, toggleForceInputUpdate } from 'store/appState/actions';

const Restore = ({ showText = null, onClose = null }) => {
  const dispatch = useDispatch();

  let fileReader;
  const fileDialog = React.useRef();

  const restore = () => {
    try {
      let savedLists = store.get('savedRosters') || [];
      let content = fileReader.result;
      content = JSON.parse(content);
      savedLists = { ...savedLists, ...content };
      store.set('savedRosters', savedLists);
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback(`Restored!`, 'success'));
    } catch (err) {
      dispatch(showFeedback(`Could not restore!`, 'error'));
    }
    if (onClose) onClose();
  };

  const handleFileChosen = event => {
    fileReader = new FileReader();
    fileReader.onloadend = restore;
    fileReader.readAsText(event.target.files[0]);
  };

  const openFileDialog = () => fileDialog.current.click();

  return (
    <>
      <Tooltip title="Backup">
        <IconButton color="inherit" onClick={openFileDialog}>
          <RestorePageIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={openFileDialog}>Restore</Typography>}
      <input
        type="file"
        ref={fileDialog}
        style={{ display: 'none' }}
        id="restoreFile"
        accept=".sav"
        onChange={handleFileChosen}
      />
    </>
  );
};

export default Restore;
