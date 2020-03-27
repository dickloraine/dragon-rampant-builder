import React from 'react';
import RestorePageIcon from '@material-ui/icons/RestorePage';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';

const Restore = ({
  setForceInputUpdate,
  showText = null,
  showFeedback,
  onClose = null
}) => {
  let fileReader;
  const fileDialog = React.useRef();

  const restore = () => {
    try {
      let savedLists = store.get('savedRosters') || [];
      let content = fileReader.result;
      content = JSON.parse(content);
      savedLists = { ...savedLists, ...content };
      store.set('savedRosters', savedLists);
      setForceInputUpdate();
      showFeedback(`Restored!`, 'success');
    } catch (err) {
      showFeedback(`Could not restore!`, 'error');
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
