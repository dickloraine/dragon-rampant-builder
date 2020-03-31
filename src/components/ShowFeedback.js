import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { closeFeedback } from 'store/appState/actions';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const ShowFeedback = () => {
  const dispatch = useDispatch();
  const feedback = useSelector(state => state.appState.feedback);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeFeedback());
  };

  return (
    <Snackbar open={feedback.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={feedback.severity}>
        {feedback.message}
      </Alert>
    </Snackbar>
  );
};

export default ShowFeedback;
