import { Box, Button, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { showFeedback } from '../store/appStateSlice';
import { newRoster } from '../store/rosterSlice';
import type { Edition } from '../store/types';
import { updateUI } from '../store/uiSlice';

const EditionChooser = () => {
  const dispatch = useAppDispatch();
  const currentEdition = useAppSelector((state) => state.ui.edition);

  if (currentEdition) return null;

  const setEdition = (edition: Edition) => {
    dispatch(updateUI({ edition: edition }));
    if (edition !== 'first') dispatch(newRoster());
    dispatch(showFeedback(`Set to ${edition} edition!`, 'success'));
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Choose Edition
      </Typography>
      <Typography variant="body1">
        Select which edition you want to use. You can always switch editions later from
        the side menu.
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => setEdition('first')}>
          First Edition
        </Button>
        <Button variant="contained" onClick={() => setEdition('second')}>
          Second Edition
        </Button>
      </Stack>
    </Box>
  );
};

export default EditionChooser;
