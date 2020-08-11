import { IconButton, Tooltip, Typography } from '@material-ui/core';
import RestorePageIcon from '@material-ui/icons/RestorePage';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showFeedback, toggleForceInputUpdate } from 'store/appStateSlice';
import { rosterStore } from 'store/persistantStorage';

const Restore: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  showText,
  onClose,
}) => {
  const dispatch = useDispatch();

  let fileReader: FileReader;
  const fileDialog = React.useRef<HTMLInputElement>(null);

  const restore = async () => {
    try {
      const content = fileReader.result as string;
      const savedLists: Object = JSON.parse(content);
      await Promise.all(
        Object.entries(savedLists).map(([key, val]) => rosterStore.setItem(key, val))
      );
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback(`Restored!`, 'success'));
    } catch (err) {
      dispatch(showFeedback(`Could not restore!`, 'error'));
      console.log(err);
    }
    if (onClose) onClose();
  };

  const handleFileChosen = (event: React.ChangeEvent<HTMLInputElement>) => {
    fileReader = new FileReader();
    fileReader.onloadend = restore;
    if (event.target.files) fileReader.readAsText(event.target.files[0]);
  };

  const openFileDialog = () => {
    if (fileDialog.current) fileDialog.current.click();
  };

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

export default React.memo(Restore);
